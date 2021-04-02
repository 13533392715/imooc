<template>
	<view>
		<!-- 基础卡片 -->
		<view  class="listCard" v-if="mode === 'base'">
			<view class="listCard__imageWrap">
				<image class="listCard__imageWrap__img" :src="itemData.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listCard__content">
				<view class="listCard__content__title">
					<text class="listCard__content__title__text"> {{ itemData.title }} </text>
				</view>
				<view class="listCard__content__des">
					<view class="listCard__content__des——label">
						<view class="listCard__content__des——label——item">{{ itemData.classify }}</view>
					</view>
					<view class="listCard__content__des——brows">{{ itemData.browse_count }}浏览</view>
				</view>
			</view>
		</view>
		
		<!-- 多图模式 -->
		<view  class="listCard mode-column" v-if="mode === 'column'">
			<view class="listCard__content">
				<view class="listCard__content__title">
					<text class="listCard__content__title__text">	{{ itemData.title }} </text>
				</view>
				<view class="listCard__imageWrap">
					<view v-for="item in 3" :key="item" class="listCard__imageWrap__item">
						<image class="listCard__imageWrap__img" :src="itemData.cover[item]" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listCard__content__des">
					<view class="listCard__content__des——label">
						<view class="listCard__content__des——label——item">{{ itemData.classify }}</view>
					</view>
					<view class="listCard__content__des——brows">{{ itemData.browse_count }}浏览</view>
				</view>
			</view>
		</view> 
	
		<!-- 大图模式 -->
		<view  class="listCard mode-image" v-if="mode === 'image'">
				<view class="listCard__imageWrap">
					<image class="listCard__imageWrap__img" :src="itemData.cover[0]" mode="aspectFill"></image>
				</view>
				<view class="listCard__content">
					<view class="listCard__content__title">
						<text class="listCard__content__title__text">	{{ itemData.title }} </text>
					</view>
					<view class="listCard__content__des">
						<view class="listCard__content__des——label">
							<view class="listCard__content__des——label——item">{{ itemData.classify }}</view>
						</view>
						<view class="listCard__content__des——brows">{{ itemData.browse_count }}浏览</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: '',
			itemData: '',
		},
		created() {
		},
		name: "list-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.listCard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		overflow: hidden;
		&__imageWrap {
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			margin-right: 10px;
			&__img {
				width: 100%;
				height: 100%;
			}
		}
		&__content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			&__title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
			}
			&__des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				&——label {
					display: flex;
					&——item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}
				&——brows {
					color: #999;
					line-height: 1.5;
				}
			}
		}
	}
	.mode-column {
		.listCard-content {
			width: 100%;
			padding-left: 0;
			&__des {
			}
		}
		.listCard__imageWrap {
			display: flex;
			margin-top: 10px;
			width: 100%;
			height: 70px;
			margin-bottom: 10px;
			&__item {
				margin-left: 10px;
				width: 100%;
				border-radius: 5px;
				overflow: hidden;
				&:first-child {
					margin-left: 0;
				}
			}
			&__img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.mode-image {
		flex-direction: column;
		.listCard__imageWrap {
			width: 100%;
			height: 100px;
		}
		.listCard__content {
			padding-left: 0;
			margin-top: 10px ;
			&__des {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		}
	}
</style>
