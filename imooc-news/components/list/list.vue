<template>
	<swiper class="swiper" @change="change" :current="activeTab">
		<swiper-item v-for="(item, index) in tab"  class="swiper__item">
			<list-scroll class="swiper__item__scroll" @loadmore="loadmore">
				<view v-for="(itemData, index) in res">
					<list-card :mode="itemData.mode" :itemData="itemData"></list-card>
				</view>
				<uni-load-more status="noMore" iconType="snow"></uni-load-more>
			</list-scroll>
		</swiper-item>

	</swiper>	
</template>	

<script>
	import UniLoadMore from '../uni-load-more/components/uni-load-more/uni-load-more.vue'
	export default {
		name:"list",
		props: {
			tab: {
				type: Array,
				default() {
					return[]
				}
			},
			activeTab: 0
		},
		methods: {
			loadmore(e) {
				console.log('上拉')
			}
		},
		components: {
			UniLoadMore
		},
		watch: {
			activeTab(newVlue) {
				this.activeTab = newVlue
			},
			tab(newVlue) {
				if(newVlue.length === 0) {
					return
				}
				this.getList(this.activeTab)
			}
		},
		created() {

		},
		data() {
			return {
				res: '',
			};
		},
		methods: {
			change(e) {
				const { current } = e.detail
				// console.log(current)
				this.getList(current)
				this.$emit('change', current)
			},
			getList(current) {
				this.$api.get_list({ name: this.tab[current].name }).then((res)=> {
					this.res = res.data
					console.log('this.res', this.res)
				}).catch((e) => {
					console.log(e)
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 2000px;
		&__item {
				height: 100%;
			&__scroll {
				height: 100%;
			}
		}
	}
</style>
