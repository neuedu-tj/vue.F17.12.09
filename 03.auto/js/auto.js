
var vm = new Vue({

    el : '#auto',
    
    data : {
        storage :[]
    },
    
    mounted : function () {
        this.$nextTick(function () {
            this.populate();
        })
    },
    
    methods : {
        populate : function ()  {
             this.$http.get("data/auto.json").then(res => {
                vm.storage = res.body.result.list;

             });
        }
    }

});