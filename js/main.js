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
		showProjectInfo:function(e){
			console.log($(e.target).offset().top);
			if(typeof item.checked === 'undefined'){
				if(this.$refs.name.style.width<=(document.documentElement.clientHeight/2)){
					this.$set(item,'active',true);
				}else{
					this.$set(item,'active2',true);
				}
			}else{
				if(this.scrollTop<=(document.documentElement.clientHeight/2)){
					item.active = true;
				}else{
					item.active2 = true;
				}
//				item.active = true;
//				item.active2 = true;
			}
			var _this = this;
			this.$http.get("http://shalouapi.tuyidesign.com/",{command:"listProjectTask",active:1,project:item.project}).then(function(res){
				item.listProjectTask = res.data.taskList;
			})
		},
		hideProjectInfo:function(item){
			item.active = false;
			item.active2 = false;
		}
	}
});