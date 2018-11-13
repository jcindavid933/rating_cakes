var Cake = require('./models.js');

module.exports = {
  home: function(request,response){
    Cake.find({}, function(err, cake){
      if(err){
        response.json(err);
      }
      else{
        console.log('HUIdahwiudhaiuhdiuaw');
        response.json(cake);
      }
    }).sort({_id: -1});
  },

  cake_id: function(request, response){
    Cake.find({_id: request.params.id}, function(err, cake){
      if(err){
        response.json(err);
      }
      else{
        response.json(cake);
      }
    })
  },

  create_cake: function(request, response){
    var cake = new Cake(request.body);
    cake.save(function(err){
      if(err){
        response.json(err);
      }
      else{
        response.json({message: "Success", cake: cake});
      }
    })
  },

  update: function(request, response){
    Cake.findOneAndUpdate({_id: request.params.id}, {$push: {comment: request.body.comment, rating: request.body.rating}}, function(err){
      if(err){
        response.json(err);
      }
    })
  },

  delete: function(request, response){
    Cake.remove({_id: request.params.id}, function(err){
      if(err){
        response.json(err);
      }
      else{
        response.json({message: "Success"});
      }
    })
  }
}
