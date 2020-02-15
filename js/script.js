var app = new Vue({
  el: '#app',
  data: {
  	currentVal: '',
  	tempData:  {},
		classes: classes,
		modalData: {
			content: '',
			title: ''
		}
  },
  methods: {
  	arrSort: function(obj) {
			const vm = this;
  		const arr = Object.values(obj);
  		let result = arr.sort(function (a, b) {
				return a.num < b.num ? 1 : -1;
			});
			return result
  	},
  	func: function(data, currentVal) {
  		const vm = this;
  		const len = data.length;
  		const objData = {};
  		vm.currentVal = currentVal;
  		data.forEach(function(item, index, array){
  			const str = item.txt.trim()
		    let strSplit_arr = str.split(" ");
		    strSplit_arr.forEach((i) => {
					const obj = {
						num: 1,
						txt: i,
						datas: [
							{time: item.time, version: item.version,}
						]
					}
					if(objData[i]) {
						objData[i].datas.push({time: item.time, version: item.version,})
						objData[i].num += 1
					} else {
						objData[i] = obj
					}
		    })
			})
			vm.tempData = vm.arrSort(objData)
		},
		showModalData(item) {
			const vm = this;
			vm.modalData.title = item.txt;
			vm.modalData.content = item.datas;
			console.log(item.datas)
		},
  	changeData_game() {
			const vm = this;
			const arr_data = gameData1.concat(gameData2).concat(gameData3).concat(gameData4);
	    vm.func(arr_data, 'game')
  	},
  	changeData_shower() {
  		const vm = this;
			const arr_data = showerData1.concat(showerData2).concat(showerData3);
	    vm.func(arr_data, 'shower')
  	},
  	changeData_eat() {
  		const vm = this;
			const arr_data = eatData1.concat(eatData2).concat(eatData3).concat(eatData4).concat(eatData5);
	    vm.func(arr_data, 'eat')
  	},
  	changeData_hair() {
  		const vm = this;
			const arr_data = hairData1.concat(hairData2);
	    vm.func(arr_data, 'hair')
  	},
  	changeData_dress() {
  		const vm = this;
			// const arr_data = gameData1.concat(gameData2).concat(gameData3).concat(gameData4);
	    vm.func(dressData1, 'dress')
  	}
  },
  created: function () {
		const vm = this;
    vm.changeData_game()
  },
  mounted: function () {
		const vm = this;
  	
  }
})