<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">添加事件</block></cu-custom>
		<form>
			<view class="cu-form-group align-start">
				<view class="title">事件内容</view>
				<textarea maxlength="-1"  @input="textareaInput" placeholder="多行文本输入框"></textarea>
			</view>
			<view class="cu-form-group margin-top" @tap="showModal" data-target="IconModal">
				<view class="title">选择图标</view>
				<view class="lg text-gray" :class="'cuIcon-' + icon"></view>
			</view>
			<view class="cu-modal" :class="modalName=='IconModal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar justify-end solid-bottom">
						<view class="content">选择图标</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="cu-list grid col-3">
						<view class="cu-item" v-for="(item,index) in cuIcon" :key="index"  @tap="SetIcon" :data-icon="item.name">
							<text class="lg text-gray" :class="'cuIcon-' + item.name"></text>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group margin-top" @tap="showModal" data-target="ColorModal">
				<view class="title">选择颜色</view>
				<view class="padding solid radius shadow-blur" :class="'bg-'+color"></view>
			</view>
			<view class="cu-modal" :class="modalName=='ColorModal'?'show':''">
					<view class="cu-dialog">
						<view class="cu-bar justify-end solid-bottom">
							<view class="content">选择颜色</view>
							<view class="action" @tap="hideModal">
								<text class="cuIcon-close text-red"></text>
							</view>
						</view>
						<view class="grid col-5 padding">
							<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" @tap="SetColor" :data-color="item.name" v-if="item.name!='white'">
								<view class="padding-tb radius" :class="'bg-' + item.name"> {{item.title}} </view>
							</view>
						</view>
					</view>
				</view>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				modalName: '',
				textareaValue: '',
				icon: 'appreciate',
				color: 'red',
				cuIcon: [{
					name: 'appreciate',
					isShow: true
				}, {
					name: 'check',
					isShow: true
				}, {
					name: 'close',
					isShow: true
				}, {
					name: 'edit',
					isShow: true
				}, {
					name: 'emoji',
					isShow: true
				}, {
					name: 'favorfill',
					isShow: true
				}, {
					name: 'favor',
					isShow: true
				}, {
					name: 'loading',
					isShow: true
				}]
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			textareaInput(e) {
				this.textareaValue = e.detail.value
			},
			SetIcon(e) {
				this.icon = e.currentTarget.dataset.icon;
				this.modalName = null
			},
			SetColor(e) {
				this.color = e.currentTarget.dataset.color;
				this.modalName = null
			},
			save(){
				console.info(this.textareaValue)
			}
		}
	}
</script>

<style>
</style>
