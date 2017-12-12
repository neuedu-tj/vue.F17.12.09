var vm = new Vue({
  el : "#app" ,
  data : {
    message : 'Hi',
    title : 'Vue Demo'

  } ,
  filters : {

  } ,
  mounted : function(){
    this.$nextTick(function(){
      this.cartView()
    })
  } ,
  methods : {
    add : function(){
      console.log(this.$el.innerText)
    } ,
    cartView : function() {
       this.message = 'Hello Vue 哈哈'
    }

  }
})


////////////

var cart = new Vue({
  el : '#cart' ,
  data : {

  },
  mounted : function(){
    this.getCart();
  },
  methods : {
    getCart : function() {
      this.$http.get("data/emp.json").then(function(res){
        console.log(res.data)
      });
    }
  }
})
