<template name="garden">
	<view>
		<scroll-view class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in tabList" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<timeLine v-if="TabCur === '0'"></timeLine>
		<topic v-if="TabCur === '1'"></topic>
		<recommend v-if="TabCur === '2'"></recommend>
		<imageText v-if="TabCur === '3'"></imageText>
		<shareText v-if="TabCur === '4'"></shareText>
	</view>
</template>

<script>
	export default {
		name: "garden",
		data() {
			return {
				TabCur: '2',
				scrollLeft: 0,
				tabList: [
					"时间轴",
					"话题",
					"推荐",
					"图文",
					"文章",
					"计划"
				]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 1000vh;
	}
</style>
