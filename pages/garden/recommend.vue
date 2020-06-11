<template name="recommend">
	<view>
		<!-- 遍历出类型-->
		<view class="cu-list menu-avatar comment solids-top">
			<view class="cu-item">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">莫甘娜</view>
					<view class="text-gray text-content text-df">
						凯尔，你被自己的光芒变的盲目。
					</view>
					<view class="grid flex-sub padding-lr col-3 grid-square" >
						<view class="bg-img" @tap="showModal" data-target="Image"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in 9" :key="index">
						</view>
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
		<view class="cu-list menu-avatar comment solids-top">
			<view class="cu-item">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
				<view class="content">
					<view class="text-grey">凯尔</view>
					<view class="text-gray text-content text-df">
						妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
					</view>
					<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
						<view class="flex">
							<view>莫甘娜：</view>
							<view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
						</view>
					</view>
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">2018年12月4日</view>
						<view>
							<text class="cuIcon-appreciate text-gray"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog">
				<view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;">
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close "></text>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
				</view>
			</view>
		</view>
		
	</view>

</template>

<script>
	export default {
		name: "recommend",
		data() {
			return {
				modalName: null
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			}
		}
	}
</script>

<style>
</style>
