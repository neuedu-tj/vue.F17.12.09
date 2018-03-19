var vm = new Vue({

    el : "#addr",
    data : {
        addrs : []

    },
    mounted : function () {
        this.$nextTick(function () {
            vm.init();
        });
    },
    methods : {
        init : function () {
            this.$http.get("data/address.json").then(res =>{
                vm.addrs = res.body.result;
            })
        }
    }

});