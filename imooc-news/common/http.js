export default function $http(options){
	const { url, data } = options
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data
		}).then((res)=> {
			if(res.result.code === 200) {
				reslove(res.result)
			}else {
				reject(res.res)
			} 
		}).catch((err)=> {
			reject(err)
		})
	})
}