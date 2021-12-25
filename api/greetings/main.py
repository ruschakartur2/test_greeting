import asyncio
import logging
import pathlib
import aioredis
from aiohttp import web
from aiohttp_middlewares import cors_middleware
from api.greetings.routes import setup_routes
from api.greetings.utils import load_config
from api.greetings.views import GreetHandler

PROJ_ROOT = pathlib.Path(__file__).parent.parent


async def setup_redis():
    redis = aioredis.from_url("redis://redis", encoding="utf-8", decode_responses=True)
    return redis


async def init(loop):
    conf = load_config(PROJ_ROOT / 'config' / 'config.yml')

    app = web.Application(middlewares=[
        cors_middleware(
            allow_all=True,
            origins='*',
            allow_credentials=True,
            expose_headers="*",
            allow_headers='*',
            allow_methods=["POST", "PATCH", 'GET', 'OPTION'],
        )])
    redis_pool = await setup_redis()

    handler = GreetHandler(redis_pool, conf)

    setup_routes(app, handler)
    host, port = conf['host'], conf['port']
    return app, host, port


def main():
    logging.basicConfig(level=logging.DEBUG)

    loop = asyncio.get_event_loop()
    app, host, port = loop.run_until_complete(init(loop))
    web.run_app(app)


if __name__ == "__main__":
    main()
