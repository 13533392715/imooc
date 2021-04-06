<template>
	<view class="home">
	 <navbar :isSearch="true" @handlerEnter="handlerEnter" ref="mainindex"></navbar>
	 <view class="list">
		 <view class="list__box">
			 <view class="list__box__header">
				 <text class="list__box__title">搜索历史</text>
				 <text class="list__box__clear" @click="getStorage">清空</text>
			 </view>
			 <view class="list__box__content" v-if="Historical">
				 <view class="list__content__item" v-for="item in AlloldSearch" >
					 {{item}}
				 </view>
			 </view>	
			 <view class="noData" v-else>
				 没有搜索历史
			 </view>	
		 </view>
		
	 </view>··
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue' 
	export default {
		components: {
			navbar
		},
		data() {
			return {
				Historical: false,
				AlloldSearch: []
			}
		},
		onShow() {
			this.getStorage()
		},
		computed: {
			aAlloldSearch: function() {
				return this.AlloldSearch
			}
		},
		methods: {
			handlerEnter(oldSearch) {
				this.AlloldSearch = oldSearch
				this.Historical = true
			},
			handleClear() {
				this.AlloldSearch = []
				uni.setStorage({
					key: 'storage_key',
					data: this.AlloldSearch
				})
				// uni.getStorage({
				//     key: 'storage_key',
				//     success: function (res) {
							
				//     }
				// });
				this.$refs.mainindex.clear()
				this.Historical = false
			},
			getStorage() {
				uni.getStorage({
				    key: 'storage_key',
				    success: function (res) {
							if(res.data) {
								this.Historical = true
								this.AlloldSearch = res.data
								console.log('this.AlloldSearch', this.AlloldSearch, 'this.Historical', this.Historical)
							}
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: #F8F8F8;
	}
	.list {
		&__box {
			background-color: #fff;
			margin-bottom: 10px;
			&__header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
			}
			&__title {
				color: $mk-base-color;
			}
			&__clear {
				 color: #30b33a;
				 font-weight: bold;
			}
			&__content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;
			}
		}
		&__content__item {
			padding: 2px 10px;
			margin-top: 12px;
			margin-right: 10px;
			border-radius: 5px;
			font-size: 14px;
			color: #666;
			background-color: #F1F1F1;
		}
	}
	.noData {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		width: 100%;
		color: #666;
		font-size: 12px;
		padding: 15px;
	}

</style>
