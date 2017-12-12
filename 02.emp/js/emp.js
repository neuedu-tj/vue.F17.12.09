var vm_emps = new Vue({
    el : '#app' ,
    data : {
        total : 0 ,
        emps : [] ,
        emp : {"id":0 , "name":"" , "salary":0.0 , "photo":""}
    } ,
    mounted : function() {
        this.init()
    } ,
    methods : {
        init : function() {
            console.log("case start . ")
        } ,
        getEmps : function() {
            var _this = this;
            this.$http.get("data/emp.json").then(function(e){
                _this.emps = e.data;
            })
        },
        addEmp : function() {
            this.emps.push(this.emp);
            this.emp = {"id":0 , "name":"" , "salary":0.0 , "photo":""}
        }
    }

});