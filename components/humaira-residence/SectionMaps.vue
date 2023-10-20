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
              <div class="title">
                Find us
                in our<br /> ideal location
              </div>
              <div class="desc">ADDRESS</div>
              <div class="desc-2">5489+W49, Nagrak,<br> Kec. Cianjur, Kabupaten Cianjur,<br> Jawa Barat 43215</div>
            </div>
            <div class="text text-2">
                <div class="title">Nestled in the heart of Humaira Residence, we are the perfect destination for all your needs. Our prime location makes us easily accessible, and we're ready to welcome you with open arms. Whether you're seeking adventure, relaxation, or the perfect spot to gather with friends and family, you can find us right here. Come and experience the best of Humaira Residence with us. Your journey starts here!</div>
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
    // this.startAnimationStep1();
    // this.startAnimationStep2();
  },
  methods: {
    // startAnimationStep1() {
    //   const tl = new TimelineMax();

    //   const AnimationSec5 = this.$scrollmagic
    //     .scene({
    //       triggerElement: ".sec-maps .text-bg",
    //       triggerHook: 0.3,
    //       duration: "100%",
    //     })
    //     .setTween(tl);

    //   this.$scrollmagic.addScene(AnimationSec5);

    //   this.$parent.animationPositionReset();
    //   tl.to(".sec-maps", 1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, this.$parent.animationPosition());

    //   function Step1Start() {
    //     $('.sec-maps .text-1 .title').css('transform', 'unset').css('opacity', 1)
    //   }

    //   function Step1Reverse() {
    //     $('.sec-maps .text-1 .title').css('transform', 'translateY(30px)').css('opacity', 0)
    //   }

    // },
    // startAnimationStep2() {
    //   const tl = new TimelineMax();

    //   const AnimationSec5 = this.$scrollmagic
    //     .scene({
    //       triggerElement: ".sec-maps",
    //       triggerHook: 0.0,
    //       duration: "100%",
    //     })
    //     .setTween(tl).setPin('.sec-maps');

    //   this.$scrollmagic.addScene(AnimationSec5);

    //   this.$parent.animationPositionReset();
    //   tl.to(".sec-maps", .1, { onStart: Step2Start, onReverseComplete: Step2Reverse }, this.$parent.animationPosition());
    //   tl.to(".sec-maps", .1, { onStart: Step3Start, onReverseComplete: Step3Reverse }, this.$parent.animationPosition(1));
    //   tl.to(".sec-maps", .1, {}, this.$parent.animationPosition(3));

    //   function Step3Start() {
    //     $('.sec-maps .text-1 .title').css('transform', 'translateY(-30px)').css('opacity', 0)
    //     $('.sec-maps .maps-bg').css('transform', 'unset').css('opacity', 1)
    //   }

    //   function Step3Reverse() {
    //     $('.sec-maps .text-1 .title').css('transform', 'unset').css('opacity', 1)
    //     $('.sec-maps .maps-bg').css('transform', 'translateY(30px)').css('opacity', 0)
    //   }

    //   function Step2Start() {
    //     $('.sec-maps .text-1 .title').css('transform', 'translateY(-30px)').css('opacity', 0)
    //   }

    //   function Step2Reverse() {
    //     $('.sec-maps .text-1 .title').css('transform', 'unset').css('opacity', 1)
    //   }

    // },
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
  flex-direction: column;
  height: 150vh;

  .main-container {
    height: 70vh;
  }

  .main-1 {
    margin-top: 15em;
  }

  .text-1 {
    width: 40%;

    .title {
      @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 72px, 90px);
      color: #03001c;
    }
    .desc {
        @include g.fontStyle(HelveticaNowDisplay-Regular, 28px, 32px);
        color: #878a8f;
        letter-spacing: .3em;
        margin-top: func.toEm(60px, 28px);
    }
    .desc-2 {
        @include g.fontStyle(HelveticaNowDisplay-Regular, 32px, 46px);
        color: #03001c;
        margin-top: func.toEm(20px, 32px);
    }
  }

  .text-2 {
    width: 60%;
        .title {
            @include g.fontStyle(HelveticaNowDisplay-Medium, 32px, 40px);
            color: #03001c;
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
