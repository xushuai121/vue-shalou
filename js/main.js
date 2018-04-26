var vm = new Vue({
	el:"#app",
	data:{
		ProjectList:[],
		ProjectInfoList:[],
	},
	mounted:function(){
		this.$nextTick(function(){
			this.showMain();
		})
	},
	methods:{
		showMain:function(){
			var _this = this;
			this.$http.get("http://shalouapi.tuyidesign.com/",{command:"listProject",active:1}).then(function(res){
				_this.ProjectList = res.data.projectList;
			})
		},
		showProjectInfo:function(item,index){
			console.log(this.$refs.menuItem[index].offsetTop);
			var _this = this;
			this.$http.get("http://shalouapi.tuyidesign.com/",{command:"listProjectTask",active:1,project:item.project}).then(function(res){
				item.listProjectTask = res.data.taskList;
				if(typeof item.checked === 'undefined'){
					if(_this.$refs.menuItem[index].offsetTop<=(document.documentElement.clientHeight/2)){
						_this.$set(item,'active',true);
					}else{
						_this.$set(item,'active2',true);
					}
				}else{
					if(_this.scrollTop<=(document.documentElement.clientHeight/2)){
						item.active = true;
					}else{
						item.active2 = true;
					}
				}
			})
		},
		hideProjectInfo:function(item){
			item.active = false;
			item.active2 = false;
		}
	}
});