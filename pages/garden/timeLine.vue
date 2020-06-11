<template name="timeLine">
	<view>
		<view class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 100%;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					钢铁之翼
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
			</view>
			<view class="flex solid-bottom padding align-center">
				<button class="cu-btn round bg-red" @click="goAdd">记录</button>
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">昨天</view>
			<view class="cu-item cur cuIcon-noticefill">
				<view class="content bg-green shadow-blur">
					<text>22:22</text> 【广州市】快件已到达地球
				</view>
			</view>
			<view class="cu-item text-red cuIcon-attentionforbidfill">
				<view class="content bg-red shadow-blur">
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item text-grey cuIcon-evaluate_fill">
				<view class="content bg-grey shadow-blur">
					这是第一次，我家的铲屎官走了这么久。
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>20:00</text> 【月球】快件已到达月球，准备发往地球
				</view>
				<view class="bg-cyan content">
					<text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
				</view>
			</view><view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>20:00</text> 【月球】快件已到达月球，准备发往地球
				</view>
				<view class="bg-cyan content">
					<text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>20:00</text> 【月球】快件已到达月球，准备发往地球
				</view>
				<view class="bg-cyan content">
					<text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "timeLine",
		data() {
			return {
			};
		},
		methods:{
			goAdd(){
				uni.navigateTo({
				    url: '/pages/garden/timeLineAdd',
				});
			}
		}
	}
</script>

<style>
</style>
