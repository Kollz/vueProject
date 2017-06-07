import Vue from 'vue'


var addAnnonce = new Vue({
	methods:{
		onChange:function(){
			if (this.options[this.selectedIndex].id === "apprentissage") {
				$("#specialisation").show();
			} else{
				$("#specialisation").hide();
			}
		}
	}
});