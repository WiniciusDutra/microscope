//Início de roteamento da página layout
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){return Meteor.subscribe('posts');}
});

Router.map(function() {
  this.route('postsList', {path: '/'}); //rota para raiz

  this.route('postMais', { //roteando para postMais
    path: '/postMais/:_id',
    data: function(){ return Posts.findOne(this.params._id); }
 });

  this.route('postPage', { //roteando para um post específico
    path: '/posts/:_id',
    data: function(){ return Posts.findOne(this.params._id); }
 });
});
//Fim de roteamento da página layout

//Início de roteamento da página clients
Router.configure({ //pra quê serve isso se sem ele tudo funciona???
  clientsTemplate: 'teste'
});

Router.map(function(){
  this.route('clients', {path: '/clients'});
});
//Fim de roteamento da página clients
