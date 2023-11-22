<template>
  <section class="section sec-intro">
    <div class="main-text-2">
      <div class="text text-2-wrap">
        <div class="subtext-1">
          <span>Humaira Residence</span>,<br />
          a residence with numerous<br />
          advantages located in the center of Cianjur city<br />
          with a <span>tropical minimalist concept</span>
        </div>
        <div class="subtext-2">
          With a unique and <span>forward-facing facade design</span>,<br />
          it boasts an <span>easily accessible</span> and
          <span>strategic location</span>,<br />
          close to public amenities such as schools, shopping centers,<br />
          hospitals, sports facilities, and Cianjur Citimall.<br
            class="mb"
          /><br class="mb" />
          Humaira Residence will be a unique dwelling with<br />
          promising investment value.
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
      const AnimationSecIntro = this.$scrollmagic
        .scene({
          triggerElement: ".sec-intro",
          triggerHook: 0.0,
          duration: "100%",
        })
        .setTween(tl)
        .setPin(".sec-intro");

      this.$scrollmagic.addScene(AnimationSecIntro);

      this.$parent.animationPositionReset();

      tl.to(".sec-intro", 1, {}, this.$parent.animationPosition());
      tl.to(
        ".sec-intro",
        0.1,
        { onStart: Subtext2Start, onReverseComplete: Subtext2Reverse },
        this.$parent.animationPosition(1)
      );
      tl.to(".sec-intro", 1, {}, this.$parent.animationPosition(2));

      function Subtext2Start() {
        $(".sec-intro .subtext-1")
          .css("transform", "translateY(-30px)")
          .css("opacity", 0);
        setTimeout(() => {
          $(".sec-intro .subtext-2")
            .css("transform", "unset")
            .css("opacity", 1);
        }, 100);
      }

      function Subtext2Reverse() {
        $(".sec-intro .subtext-2")
          .css("transform", "translateY(30px)")
          .css("opacity", 0);
        setTimeout(() => {
          $(".sec-intro .subtext-1")
            .css("transform", "unset")
            .css("opacity", 1);
        }, 100);
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

.sec-intro {
  width: 100%;
  background-color: #000;

  .main-text-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;

    @include mixin.media(mb) {
      text-align: unset;
      width: 90vw;
    }

    .text-2-wrap {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .subtext-1 {
      @include g.fontStyle(DINPro-Regular, 46px, 64px);
      color: #fff;
      position: absolute;
      width: 100%;

      transition: transform 0.5s, opacity 0.5s;

      @include mixin.media(mb) {
        transform: unset;
        opacity: 1;

        br {
          display: none;
        }
      }

      span {
        background: #cac531;
        background: -webkit-linear-gradient(to right, #f3f9a7, #cac531);
        background: linear-gradient(to right, #f3f9a7, #cac531);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .subtext-2 {
      @include g.fontStyle(DINPro-Regular, 46px, 64px);
      color: #fff;
      position: absolute;
      width: 100%;

      transform: translateY(30px);
      transition: transform 0.5s, opacity 0.5s;
      opacity: 0;

      br {
        display: block;
      }

      @include mixin.media(mb) {
        br {
          display: none;
        }

        .mb {
          display: block;
        }
      }

      span {
        background: #cac531;
        background: -webkit-linear-gradient(to right, #f3f9a7, #cac531);
        background: linear-gradient(to right, #f3f9a7, #cac531);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
