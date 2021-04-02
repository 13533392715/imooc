<template>
	<view class="scroll">
		<scroll-view scroll-y style="height: 100%" @scrolltolower="loadmore ">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		},
		methods: {
			loadmore() {
				console.log('触发上拉')
				this.$emit('loadmore')
			}
		}
	}
</script>

<style>

</style>
