def setup_routes(app, handler):
    router = app.router
    h = handler
    router.add_post('/greet', h.greet, name='greet')
    router.add_get('/greeted_names', h.greeted_names, name='greeted_names')
