import { Application } from 'egg';

export default (app: Application) => {
  const controller = app.controller;
  app.get('/get', controller.home.get);
  app.get('/set', controller.home.set);
  app.get('/setKey', controller.home.setKey);
  app.get('/remove', controller.home.remove);
  app.get('/maxAge', controller.home.maxAge);
}
