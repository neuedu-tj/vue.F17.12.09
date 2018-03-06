var vm_emps = new Vue({


    el : '#app' ,
    data : {
        total : 0,
        emps : [] ,
        emp : {"id": 0 , "name":"" , "salary":0.0 , "photo":""}
    },
    filters : {
        fmtSalary : function(value) {
            return "$ "+ value.toFixed(2);
        }
    },
    mounted : function() {
       this.$nextTick(function () {
         
       })
    },
    methods : {
        init : function() {
            console.log("case start . ") 
        },
        getEmps : function() {
            // var _this = this;
            // this.$http.get("data/emp.json").then(function(e){
            //     _this.emps = e.data;
            // })
            this.$http.get("data/emp.json").then(res => {
                this.emps = res.data;
                // this.calculate()
            })


        },
        addEmp : function() {
            this.emps.push(this.emp);
            this.emp = {"id":0 , "name":"" , "salary":0.0 , "photo":""}
            this.calculate()
        },
        calculate : function() {


            var _total = 0;
            this.emps.forEach(function(e) {
                 _total += parseInt(e.salary)
            })
            this.total = _total
        }
    }

});

// Vue.filter("money" , function (value , suffix) {
//     return "$ " + value.toFixed(2) + suffix;
// })

