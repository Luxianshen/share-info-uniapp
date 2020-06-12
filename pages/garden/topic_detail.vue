<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">xx话题</block></cu-custom>
		<view class="bg-black flex align-center" >
			<view class="padding-xl text-white">
				<view class="flex p-xs mb-sm ">
					<view class="flex-sub padding-sm radius">
						<view class="padding-sm"></view>
						<view class="cu-avatar xl  margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					</view>
					<view class="flex-twice  padding-sm margin-xs radius">
						<view class="padding-xs text-xxl text-bold">
							钢铁之翼
						</view>
						<view class="padding-xs text-lg">
							Only the guilty need fear me.
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey text-sm">4人</text>
						<text class="text-grey">关注</text>
						<view class="cu-avatar-group ">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<button class="cu-btn round" style="margin-left: 130px;">关注</button>
					</view>
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-grey nav text-center">
			<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-camerafill"></text> 最新
			</view>
			<view class="cu-item" :class="1==TabCur?'text-white cur':''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-upstagefill"></text> 热门
			</view>
			<view class="cu-item" :class="2==TabCur?'text-white cur':''" @tap="tabSelect" data-id="2">
				<text class="cuIcon-clothesfill"></text> 图文
			</view>
			<view class="cu-item" :class="3==TabCur?'text-white cur':''" @tap="tabSelect" data-id="3">
				<text class="cuIcon-clothesfill"></text> 文章
			</view>
		</scroll-view>
		<recommend v-if="TabCur==0"></recommend>
		<recommend v-if="TabCur==1"></recommend>
		<imageText v-if="TabCur==2"></imageText>
		<shareText v-if="TabCur==3"></shareText>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
</style>
