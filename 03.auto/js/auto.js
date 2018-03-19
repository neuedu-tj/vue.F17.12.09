
var vm = new Vue({

    el : '#auto',
    
    data : {
        storage :[],
        selectAllFlag : false   ,
        sum : 0 ,
        dialogFlag : false,
        tempAuto : {}

    },
    
    mounted : function () {
        this.$nextTick(function () {
            this.loadData();
        })
    },
    
    methods : {
        loadData : function ()  {
             this.$http.get("data/auto.json").then(res => {
                vm.storage = res.body.result.list;

             });
        },
        updateQuantity : function (auto , q) {
            auto.quantity += q;
            this.calculteTotalPrice();
        },
        confirmOption : function (auto) {
            if (typeof auto.checked == 'undefined' || auto.checked == false) {
                this.$set(auto , "checked" , true);
            } else {
                this.$set(auto , "checked" , false);
            }
            this.calculteTotalPrice();
        },
        selectAll : function () {
            this.selectAllFlag = !this.selectAllFlag;
            if (this.selectAllFlag) {
                this.storage.forEach(function (auto , index) {
                     auto.checked = true;
                })
            } else {
                this.storage.forEach(function (auto , index) {
                    auto.checked = false;
                })
            }
            this.calculteTotalPrice();
        } ,
        checkSelectStatus : function () {
            this.storage.forEach(function (auto , index) {
                if(auto.checked || auto.checked == 'undefined') {

                }
            })
        },
        calculteTotalPrice : function () {
            this.sum = 0;
            var _this = this;

            this.storage.forEach(function (auto , index) {
               if (auto.checked) {

                   _this.sum += auto.price * auto.quantity;
               }
            })
        } ,
        showDialog : function (auto) {

            this.dialogFlag = !this.dialogFlag;
            this.tempAuto = auto;
        } ,
        removeHandler : function () {
            this.dialogFlag = !this.dialogFlag;
            var index = this.storage.indexOf(this.tempAuto);
            console.log("index : " + index );
            // this.storage.$delete(this.tempAuto)         // vue1.0
            this.storage.splice(index , 1);

            this.calculteTotalPrice();
            
        }

    },
    filters : {
        fmtPrice : function (v)  {
           return " $ " + v.toFixed(2);
        }
    }



});