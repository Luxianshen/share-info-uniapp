<template name="shareText">
	<view>
		<view class="cu-list menu-avatar comment solids-top" v-for="(item,index) in 2" :key="index">
			<view class="cu-item">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">莫甘娜</view>
					<view class="text-gray text-content text-df" style="padding:10px 5px 15px;">
						凯尔，你被自己的光芒变的盲目。
					</view>
					<view class="cu-card article">
						<view class="cu-item">
							<view class="content">
								<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
								<view class="desc">
									<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
								</view>
							</view>
						</view>
					</view>
		
					<view class="content">
						<text class="cuIcon-emojiflashfill text-pink"></text>
						<text class="text-grey">赞同</text>
						<view class="cu-avatar-group " style="margin-left: 140px;">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<text class="text-grey text-sm">4 人</text>
					</view>
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">2018年12月4日</view>
						<view>
							<text class="cuIcon-appreciatefill text-red"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar justify-center bg-white">
			<view class="action border-title">
				<text class="text-xl text-bold">关于我们</text>
				<text class="bg-grey" style="width:2rem"></text>
				<!-- 底部样式 last-child选择器-->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "shareText",
		data() {
			return {};
		},
		methods: {
			goAdd() {
				uni.navigateTo({
					url: '/pages/garden/timeLineAdd',
				});
			}
		},
	}
</script>

<style>
	.cu-card.article {
		background-color: bg-grey;
	}

	.cu-card.article>.cu-item {
		padding-bottom: 20upx;
	}

	.cu-card.article>.cu-item .content {
		display: flex;
		padding: 0 3upx;
	}

	.cu-card.article>.cu-item .content>image {
		width: 200upx;
		height: 5.4em;
		margin-right: 20upx;
		border-radius: 6upx;
	}

	.cu-card.article>.cu-item .content .desc {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.cu-card.article>.cu-item .content .text-content {
		font-size: 28upx;
		color: #888;
		height: 4.8em;
		overflow: hidden;
	}
</style>

