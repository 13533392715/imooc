<template>
	<view class="tab">
		<scroll-view class="tab__scroll" scroll-x>
			<view class="tab__box">
				<view v-for="(item, index) in list" 
				class="tab__box__item" 
				:class="{'tab__box__item——active': activeIndex === index}" 
				@click="ClickTab(item, index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab__icon">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		props: {
			list: '',
			tabIndex: '',
		},
		// 可以监听 dataprops 值得变化
		watch: {
			tabIndex(newValue) {
				this.activeIndex = newValue
				// console.log(this.activeIndex)
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		methods: { 
			ClickTab(item, index) {
				this.activeIndex = index
				this.$emit('tab', {
					data: item,
					index: index
				})
			},

		}
	
	}
</script>

<style lang="scss">
	.tab {
		position: sticky;
		top: 45px;
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		background-color: #fff;
		z-index: 999;
		&__scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
		}
		&__box {
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			height: 45px;
			box-sizing: border-box;
			&__item {
				flex-shrink: 0;
				padding: 0 10px;
				color: #333;
				font-size: 14px;
				&——active {
					color:rgba($color: #ff1234, $alpha: 1.0);
				}
			}
		}
		&__icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			border-left: 3px #F1F1F1 solid;
		}
	}
</style>
