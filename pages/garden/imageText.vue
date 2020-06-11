<template name="imageText">
	<view>
		<view class="cu-list menu-avatar comment solids-top" v-for="(item,index) in 2" :key="index">
			<view class="cu-item">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">莫甘娜</view>
					<view class="text-gray text-content text-df" style="padding:10px 5px 15px;">
						凯尔，你被自己的光芒变的盲目。
					</view>
					<view class="grid flex-sub col-3 grid-square" style="padding:5px 5px 5px;">
						<view class="bg-img" @tap="showModal" data-target="Image" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in 9" :key="index">
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
		name: "imageText",
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
</style>
