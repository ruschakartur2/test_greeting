from aiohttp import web


class GreetHandler:
    def __init__(self, redis, conf):
        self._redis = redis
        self._conf = conf

    async def greet(self, request):
        data = await request.json()
        name = f"name:{data['name']}"
        if await self._redis.get(name):
            return web.json_response({'message': f'Вже бачилися, {self.get_name_from_key(name)}'})

        await self._redis.set(name, '+')
        return web.json_response({'message': f'Привіт, {self.get_name_from_key(name)}'})

    async def greeted_names(self, request):
        data = [i.split(':')[-1] for i in await self._redis.keys(pattern='name:*')]
        return web.json_response(data)

    def get_name_from_key(self, name):
        return name.split(":")[-1]
