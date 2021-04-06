<template>
	<view class="navbar">
		<view class="navbar__fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<!-- 搜索页里 -->
			<view  
			class="navbar__content" 
			:style="{height: navBarHeight + 'px', width: windowWidth + 'px'}"
			v-if="isSearch"
			>
				<view class="navbar__content__icons" @click="back">
					<uni-icons type="back" size="22" color="#fff"></uni-icons>
				</view>
				<view class="navbar__serach" :class="{navbar__content__serach: isSearch}">
					<view class="navbar__serach__icon">
						<uni-icons type="search" size="20"></uni-icons>
					</view>
					<input class="navbar__serach__text" placeholder="请输入搜索内容" v-model="inputValue" type="text" @input="inputChange" @keydown.enter="handleEnter"></input>
				</view>
			</view> 
			<!-- 非搜索页 -->
			<view @click="open"
			class="navbar__content" 
			:style="{height: navBarHeight + 'px', width: windowWidth + 'px'}"
			v-else
			>
				<view class="navbar__serach" :class="{navbar__content__serach: isSearch}">
					<view class="navbar__serach__icon">
						<uni-icons type="search" size="20" ></uni-icons>
					</view>
					<input class="navbar__serach__text" placeholder="uni-app,vue" ></input>
				</view>
			</view>
		</view>
		<view style="height: 45px"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		props: {
			isSearch: {
				default: false,
				type: Boolean
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				inputValue: '',
				allValue: []
			};
		},
		created() {
			// 获取系统信息
			const info = uni.getSystemInfoSync()
			// 设置状态栏高度
			this.statusBarHeight = info
			this.windowWidth = info.windowWidth
			// 获取胶囊的位置信息
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - this.statusBarHeight) + (menuButtonInfo.top - this.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
			this.into()
		},
		methods: {
			open() {
					uni.navigateTo({
						url:'/pages/home-search/home-search'
					})
				},
				back() {
					uni.navigateBack({
						delta: 999
					})
				},
				inputChange(e) {
					this.inputValue = e.detail.value
				},
				handleEnter() {
					this.allValue.splice(this.allValue.length, 0, this.inputValue)
					uni.setStorage({
						key: 'storage_key',
						data: this.allValue
					})
					this.$emit('handlerEnter', this.allValue)
					// uni.getStorage({
					//     key: 'storage_key',
					//     success: function (res) {
								
					//     }
					// });
				},
				clear() {
					this.allValue = []
				},
				into() {
					uni.getStorage({
					    key: 'storage_key',
					    success: function (res) {
								this.allValue = res.data
					    }
					});
				},
			},
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.navbar {
		&__fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			background-color: $mk-base-color;
		}
		&__content {
			height: 45px;
			padding: 0 15px;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;			
			&__icons {
				margin-right: 10px;
			}
		}
		&__serach {
			width: 100%;
			display: flex;
			align-items: center;
			height: 30px;
			background-color: #fff;
			border-radius: 30px;
			padding: 0 10px;
			&__icon {
				margin-right: 10px;
			}
			&__text {
				font-size: 12px;
				color: #999;
			}
		}
	}
	.navbar__content__serach {
		border-radius: 5px;
	}
</style>
