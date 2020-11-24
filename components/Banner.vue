<template>
	<swiper class="i-swiper" :style="{'width':config.width+'rpx','height':config.height+'rpx'}" circular="true"
	 :indicator-dots="indicatorDots" :autoplay="autoplay" :indicator-active-color="indicatorActiveColor" :interval="interval"
	 :duration="duration">
		<swiper-item :key="index" v-for="(item, index) in items" class="swiper-item">
			<image :src="item.photoPath" @click="pressImage(item)" :style="{'width':config.width+'rpx','height':config.height+'rpx'}" />
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			config: Object
		},
		watch: {
			config(val) {
				this.config.items.forEach((e, index) => {
                    
					//e.image = this.$common.getDownloadUrl(e.image)
				})
				this.items = this.config.items
				// console.log(val)
			}
		},
		methods: {
			pressImage(msg) {
				console.log(msg.photoConType);
				switch (msg.photoConType) {
					case 0:
						break;
					case 1:
					     // if(msg.photoLink.indexOf("https:")==-1){
					     // 	msg.photoLink="https:"+msg.photoLink;
					     // }
						 // @click='$common.redirect("/pages/tickets/ticketVr?src="+content.vrLink)'
					    this.$common.redirect(`/pages/tickets/ticketVr?src=${msg.photoLink}`);
						break;
					case 2:
						break;
					case 3:
					    this.$common.redirect(`/pages/specialty/detail?id=${msg.photoLink}&type=2`);
						break;
					case 4:
						break;
					case 6:
						break;
					case 7:
					  this.$common.redirect(`/pages/tickets/ticketDetail?id=${msg.photoLink}`);
					
						break;
				}
			}
		},
		data() {
			return {
				items: [],
				indicatorDots: true,
				indicatorActiveColor: '#8dd4bd',
				autoplay: true,
				interval: 5000,
				duration: 1000,
			}
			
		},
		created() {
			// console.log("created")
			// this.config.items.forEach((e, index) => {
			// 	//e.image = this.$common.getDownloadUrl(e.image)
			// })
			// this.items = this.config.items
		}
	}
</script>

<style lang="scss">
	.i-swiper {
		margin: 0 auto;
	}
	.i-swiper image {
		border-radius: 8rpx;
	}
</style>
