<template name="garden">
	<view>
		<wuc-tab :tab-list="tabList" :tabCur="TabCur" @change="tabChange" tab-class="text-center text-black bg-white fixed"
		 select-class="text-blue text-xl" ></wuc-tab>
		<swiper :style='"height: "+windowHeight+"px;"' :current="TabCur" class="swiper" duration="600" :circular="true"
		 indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
			<swiper-item v-for="(item,index) in tabList" :key="index">
				<scroll-view class="sv" scroll-y :style='"height: "+scrollviewHigh+"px;"' style="margin-top: 50px;">
					<timeLine v-if="TabCur ==0"></timeLine>
					<topic v-if="TabCur ==1"></topic>
					<recommend v-if="TabCur == 2"></recommend>
					<imageText v-if="TabCur ==3"></imageText>
					<shareText v-if="TabCur ==4"></shareText>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		name: "garden",
		data() {
			return {
				TabCur: 2,
				scrollLeft: 0,
				windowHeight: 0,
				scrollviewHigh: 0,
				tabList: [{
						name: "时间轴"
					},
					{
						name: "话题"
					},
					{
						name: "推荐"
					},
					{
						name: "图文"
					},
					{
						name: "文章"
					},
					{
						name: "计划"
					}
				]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			tabChange(index) {
				this.TabCur = index;
			},
			swiperChange(e) {
				let {
					current
				} = e.target;
				this.TabCur = current;
			},
			getHeigth() {
				const {
					windowWidth,
					windowHeight,
					screenHeight
				} = uni.getSystemInfoSync();
				let _this = this
				uni.getSystemInfo({
					success(res) {
						_this.phoneHeight = res.windowHeight
						// 计算组件的高度
						let view = uni.createSelectorQuery().select(".sv");
						view.boundingClientRect(data => {
							_this.navHeight = data.height
							_this.scrollviewHigh = _this.phoneHeight - _this.navHeight

						}).exec()
					}
				})
				this.windowHeight = windowHeight;
			}
		},
		mounted() {
			this.getHeigth();
		},
		onShow() {
			console.info("hi")
		}
	}
</script>

<style>
	.page {
		height: 1000vh;
	}
</style>
