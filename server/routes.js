var controller = require('./controller');
module.exports = function(app){
  app.get('/cakes', controller.home);
  app.get('/cake/:id', controller.cake_id);
  app.post('/create_cake', controller.create_cake);
  app.put('/update/:id', controller.update);
  app.delete('/delete/:id', controller.delete);
}
