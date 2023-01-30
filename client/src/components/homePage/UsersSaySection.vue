<template>
  <div class :class="$q.screen.lt.md ? 'q-mx-md q-py-xl' : 'container padding-y'">
    <div class="text-center">
      <div class="md-text text-dark-page">What our users say</div>
      <div class="q-mt-sm xs-text text-dark">
        <div>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem</div>
        <div>vitae sunt reiciendi</div>
      </div>
    </div>
    <div class="q-mt-md">
      <swiper
        :slidesPerView="$q.screen.lt.md ? 1 : 3"
        :spaceBetween="30"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
        :pagination="{
          clickable: true,
        }"
      >
        <swiper-slide>
          <div class="rounded-border bg-positive q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-auto">
                <q-avatar>
                  <img src="/images/user1.png" alt="img" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="sm-text text-left">
                  Gregory Jones
                  <q-avatar size="15px">
                    <img src="/images/verified.png" alt="icon" />
                  </q-avatar>
                </div>
                <div class="gray-text xs-text text-left">@twitter_nametag</div>
              </div>
            </div>
            <div
              class="xs-text text-left q-my-md text-dark"
            >It's exactly what I've been looking for. We have no regrets! We're loving it. Keep up the excellent work.</div>
            <div class="gray-text text-caption text-left">
              <i class="fa-regular fa-clock q-mr-xs"></i>8:21 PM / Dec 21, 2022
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rounded-border bg-positive q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-auto">
                <q-avatar>
                  <img src="/images/user2.png" alt="img" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="sm-text text-left">
                  Sylvia Taylor
                  <q-avatar size="15px">
                    <img src="/images/verified.png" alt="icon" />
                  </q-avatar>
                </div>
                <div class="gray-text xs-text text-left">@twitter_nametag</div>
              </div>
            </div>
            <div
              class="xs-text text-left q-my-md text-dark"
            >It's exactly what I've been looking for. We have no regrets! We're loving it. Keep up the excellent work.</div>
            <div class="gray-text text-caption text-left">
              <i class="fa-regular fa-clock q-mr-xs"></i>8:21 PM / Dec 21, 2022
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rounded-border bg-positive q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-auto">
                <q-avatar>
                  <img src="/images/user3.png" alt="img" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="sm-text text-left">
                  Maria Gutierrez
                  <q-avatar size="15px">
                    <img src="/images/verified.png" alt="icon" />
                  </q-avatar>
                </div>
                <div class="gray-text xs-text text-left">@twitter_nametag</div>
              </div>
            </div>
            <div
              class="xs-text text-left q-my-md text-dark"
            >It's exactly what I've been looking for. We have no regrets! We're loving it. Keep up the excellent work.</div>
            <div class="gray-text text-caption text-left">
              <i class="fa-regular fa-clock q-mr-xs"></i>8:21 PM / Dec 21, 2022
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rounded-border bg-positive q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-auto">
                <q-avatar>
                  <img src="/images/user1.png" alt="img" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="sm-text text-left">
                  Gregory Jones
                  <q-avatar size="15px">
                    <img src="/images/verified.png" alt="icon" />
                  </q-avatar>
                </div>
                <div class="gray-text xs-text text-left">@twitter_nametag</div>
              </div>
            </div>
            <div
              class="xs-text text-left q-my-md text-dark"
            >It's exactly what I've been looking for. We have no regrets! We're loving it. Keep up the excellent work.</div>
            <div class="gray-text text-caption text-left">
              <i class="fa-regular fa-clock q-mr-xs"></i>8:21 PM / Dec 21, 2022
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rounded-border bg-positive q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-auto">
                <q-avatar>
                  <img src="/images/user1.png" alt="img" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="sm-text text-left">
                  Gregory Jones
                  <q-avatar size="15px">
                    <img src="/images/verified.png" alt="icon" />
                  </q-avatar>
                </div>
                <div class="gray-text xs-text text-left">@twitter_nametag</div>
              </div>
            </div>
            <div
              class="xs-text text-left q-my-md text-dark"
            >It's exactly what I've been looking for. We have no regrets! We're loving it. Keep up the excellent work.</div>
            <div class="gray-text text-caption text-left">
              <i class="fa-regular fa-clock q-mr-xs"></i>8:21 PM / Dec 21, 2022
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
:deep() {
  .swiper-pagination-bullet-active {
    background: $primary;
  }
}
.swiper {
  width: 100%;
  height: 300px;
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
  height: 80%;
  object-fit: cover;
}
.slide-image {
  border-radius: 16px;
}
</style>
