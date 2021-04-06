<template>
	<view class="home">
			<!-- 自定义导航栏 -->
			<navbar :isSearch="false"></navbar>
			<tab :list="tabList" @tab="tab" :tabIndex="tabIndex" :activeTab="activeTab"></tab>
			<view class="home__list">
				<list :activeTab="activeTab" :tab="tabList" @change="change"></list>
			</view>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue' 
	import tab from '@/components/tab/tab.vue'
	import list from '@/components/list/list.vue'
	export default {
		components: { navbar, tab, list  },
		data() {
			return {
				title: 'Hello',
				tabList: [], 
				scrollTop: 0,
				old: {
						scrollTop: 0
				},
				tabIndex: 0,
				activeTab: 0,
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			change(current) {
				this.tabIndex = current
				console.log('this.tabIndex', this.tabIndex)
			},
			tab({data, index}) {
				// console.log(data, index)
				this.activeTab = index
			},
			getLabel() {
				// 调用云函数方法	
				this.$api.get_label({
					name: 'get_label'
				}).then((res)=> {
					const {data} = res
					this.tabList = data
					// console.log('this.tabList', this.tabList)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
