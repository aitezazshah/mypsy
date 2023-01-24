<template>
  <div class="container padding-y">
    <div class="text-center md-2-text text-bold q-mb-lg">NOS PRATICIENS</div>
    <div :class="$q.screen.lt.md ? 'q-mx-md' : ''">
      <swiper
        :slidesPerView="$q.screen.lt.md ? 3 : 6"
        :spaceBetween="30"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="$q.screen.xs ? false : true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img class="slide-image" src="/images/user1.png" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="slide-image" src="/images/user2.png" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="slide-image" src="/images/user3.png" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="slide-image" src="/images/user4.png" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="slide-image" src="/images/user5.png" alt />
        </swiper-slide>
      </swiper>
    </div>
    <div class="text-center q-mt-lg xs-text">
      <span>Join over</span>
      <span class="text-primary">&nbsp; 1 000 000 &nbsp;</span>
      <span>customers worldwide</span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss">
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 30px;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
  font-weight: bold;
  color: $primary;
}
.swiper-button-next:after {
  margin-right: -20px;
}
.swiper-button-prev:after {
  margin-left: -20px;
}
.swiper {
  width: 100%;
  height: 150px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: white;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-image {
  border-radius: 16px;
}
@media only screen and (max-width: 576px) {
  .swiper {
    width: 100%;
    height: 100px;
  }
}
</style>
