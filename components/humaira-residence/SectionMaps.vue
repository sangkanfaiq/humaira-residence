<template>
  <section class="section sec-maps">
    <iframe
      class="maps-bg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.7408058359892!2d107.11560634442749!3d-6.832712499999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6853bd91c8664b%3A0xf92401437bf3f612!2sHumaira%20Residence!5e0!3m2!1sid!2sid!4v1697773051318!5m2!1sid!2sid"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="main-container">
      <div class="container main-1">
        <div class="text text-1">
          <div class="title">Find Us In Our Ideal Location</div>
          <div class="desc">ADDRESS</div>
          <div class="desc-2">
            5489+W49, Nagrak,<br />
            Kec. Cianjur, Kabupaten Cianjur,<br />
            Jawa Barat 43215
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  props: {},
  watch: {},
  mounted() {
    this.startAnimationStep1();
  },
  methods: {
    startAnimationStep1() {
      const tl = new TimelineMax();
      const AnimationSecMaps = this.$scrollmagic
        .scene({
          triggerElement: ".sec-maps",
          triggerHook: 0.3,
          duration: "100%",
        })
        .setTween(tl);

      this.$scrollmagic.addScene(AnimationSecMaps);

      this.$parent.animationPositionReset();

      tl.to(".sec-maps", .1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, this.$parent.animationPosition());

      function Step1Start() {
        $('.sec-maps .main-1').css('transform', 'unset').css('opacity', 1)
      }

      function Step1Reverse() {
        $('.sec-maps .main-1').css('transform', 'translateY(30px)').css('opacity', 0)
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as
  func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as
  asset;

.sec-maps {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 150vh;

  .main-container {
    height: 70vh;
  }

  .main-1 {
    transform: translateY(30px);
    transition: transform .5s, opacity .5s;
    opacity: 0;
  }

  .text-1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title {
      @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 72px, 90px);
      background: #0f0c29;
      background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
      background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .desc {
      @include g.fontStyle(HelveticaNowDisplay-Regular, 28px, 32px);
      color: #878a8f;
      letter-spacing: 0.3em;
      margin-top: func.toEm(60px, 28px);
    }
    .desc-2 {
      @include g.fontStyle(HelveticaNowDisplay-Regular, 32px, 46px);
      color: #03001c;
      margin-top: func.toEm(20px, 32px);
    }
  }

  .maps-bg {
    width: 100%;
    height: 80vh;
    filter: grayscale(0%) invert(100%) contrast(100%) hue-rotate(180deg);
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
