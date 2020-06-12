<template name="topic">
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>话题列表
				<button class="cu-btn bg-yellow" style="margin-left: 180px;">话题中心</button>
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in 2" :key="index" :data-id="index" @click="goDetail">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">凯尔 <view class="cu-tag round bg-orange sm">战士</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "timeLine",
		data() {
			return {};
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/garden/topic_detail',
				});
			}
		},
	}
</script>

<style>
</style>
