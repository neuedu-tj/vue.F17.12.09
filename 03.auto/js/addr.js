
var vm = new Vue({

    el : "#addr",
    data : {
        slied_status : false,
        limit : 3 , 
        addrs : []
    },
    mounted : function () {
        this.$nextTick(function () {
            this.init();
        });
    },
    methods : {
        init : function () {
            this.$http.get("data/address.json").then(res => {

                this.addrs = res.body.result;
            })
        },
        loadMore : function () {
            this.slied_status = !this.slied_status;

            if (this.slied_status) {
                this.limit = this.addrs.length;
            } else {
                this.limit = 3;
            }
            
        }
        
    } ,
    computed : {
        filterAddr : function () {
            return this.addrs.slice(0,this.limit);
        }
    }

});
