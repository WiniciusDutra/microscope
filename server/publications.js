Meteor.publish('posts', function(author){
   return Posts.find();
//  return Posts.find({flagged: false}); //publications
   //return Posts.find({author: author}); //filtrando os dados publicados
});
