<template>
  <section class="section sec-3">
    <div class="side-text">
      <div class="bullet-group">
        <div class="bullets"></div>
        <div class="bullets"></div>
      </div>
      <div class="text">
          <div class="title ts-1">Design Interiors</div>
      </div>
      <div class="outer-circle"></div>
      <div class="dots"></div>
    </div>
    <div class="main-container">
      <div class="main-1">
        <div class="container main-wrap-1">
          <div class="img-wrap-1">
            <div class="img-bg-1"></div>
          </div>
          <div class="content-1">
            <div class="text">
              <div class="title title-1">Designing for Comfort</div>
              <div class="desc desc-1">
                Step into a world of interior design where relaxation and
                comfort take center stage. Our designs are crafted with one goal
                in mind – to create spaces that offer a soothing sanctuary from
                the everyday hustle and bustle.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-2">
        <div class="container main-wrap-2">
          <div class="img-wrap-2">
            <div class="img-bg-1"></div>
            <div class="img-bg-2"></div>
          </div>
          <div class="content-2">
            <div class="text">
              <div class="title title-2">Feels Like Home</div>
              <div class="desc desc-2">
                Whether it's a cozy nook or an expansive living area, we prioritize your peace of mind. Every detail, every element is thoughtfully chosen to create an atmosphere that welcomes tranquility.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-3">
        <div class="img-bg-3"></div>
        <div class="container main-wrap-3">
            <div class="text content-3">
              <div class="title title-3">Where Memories Are Made</div>
              <div class="desc desc-3">It's the perfect place for your family to relax and spend quality time together. With comfy furnishings and a welcoming atmosphere, our living room is where you'll create special memories.
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

export default {
  props: {},
  watch: {},
  mounted() {
    if(this.$parent.isDevice() === "pc") {
      this.animationStep1()
      this.startAnimation();
    } else {
      this.animationMb()
    }
  },
  methods: {
    startAnimation() {
      const tl = new TimelineMax();

      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".sec-3",
          triggerHook: 0.0,
          duration: "200%",
        })
        .setTween(tl).setPin('.sec-3');

      this.$scrollmagic.addScene(scene);

      tl.to(".sec-3 .main-1", 1, { x: '-100vw' }, 0);
      tl.fromTo(".sec-3 .main-2", 1, { x: '100vw'}, { x: 0}, 0);

      tl.to(".sec-3 .main-2", 1, { x: '-100vw' }, 1);
      tl.fromTo(".sec-3 .main-3", 1, { x: '100vw'}, { x: 0}, 1);

    },
    animationStep1() {
      const tl = new TimelineMax();


      tl.to(".sec-3", .1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, 0);

      function Step1Start() {
        $('.sec-3 .img-wrap-1').css('transform', 'unset').css('opacity', 1)
        $('.sec-3 .content-1 .title-1').css('transform', 'unset').css('opacity', 1)
        $('.sec-3 .content-1 .desc-1').css('transform', 'unset').css('opacity', 1)
      }

      function Step1Reverse() {
        $('.sec-3 .img-wrap-1').css('transform', 'translateX(-30px)').css('opacity', 0)
        $('.sec-3 .content-1 .title-1').css('transform', 'translateX(30px)').css('opacity', 0)
        $('.sec-3 .content-1 .desc-1').css('transform', 'translateX(30px)').css('opacity', 0)
      }

      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".sec-3 .main-container",
          triggerHook: 0.7,
          duration: "50%",
        })
        .setTween(tl)

      this.$scrollmagic.addScene(scene);
    },
    animationMb() {
      const tl = new TimelineMax();

      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".sec-3",
          triggerHook: 0.0,
          duration: "100%",
        }).setTween(tl).setPin('.sec-3');

      this.$scrollmagic.addScene(scene);

      this.$parent.animationPositionReset()
      tl.to(".sec-3 .main-1", 1, { x: '-100vw' }, this.$parent.animationPosition());
      tl.fromTo(".sec-3 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());

      tl.to(".sec-3 .main-2", 1, { x: '-100vw' }, this.$parent.animationPosition(1));
      tl.fromTo(".sec-3 .main-3", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());
    }
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

.sec-3 {
  background-color: #fff;
  width: 100%;

  .side-text {
        position: absolute;
        left: -12em;
        display: flex;
        align-items: center;
        transform: rotate(-90deg);
        z-index: 1;

        @include mixin.media(mb) {
          left: -13.5em;
        }

        .dots {
          width: func.toEm(10px);  
          height: func.toEm(10px);
          border-radius: 50%;
          background-color: #000;
          margin: 0 2em;
        }

        .outer-circle {
          width: func.toEm(25px);  
          height: func.toEm(25px);
          border-radius: 50%;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 74%;
            height: 74%;
            position: absolute;
            background-color: #000;
            border-radius: 50%;
          }
        }

        .bullet-group {
          display: flex;
          align-items: center;
          gap: 2em;

          .bullets {
            width: func.toEm(8px);  
            height: func.toEm(8px);
            border-radius: 50%;
            background-color: #000;
          }
        }
        
        .title {
          @include g.fontStyle(AktivGroteskEx-Regular, 18px, 22px);
          color: #000;
          text-align: center;
          width: max-content;
          padding: 0 2em;
        }
    }

  .main-container {
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
    transition: .5s;

    @include mixin.media(mb) {
      display: unset;
    }


    .main-1 {
      display: flex;
      position: absolute;
      height: 100vh;
      width: 100vw;
      justify-content: center;

      .main-wrap-1 {
        gap: func.toEm(100px);
        display: flex;
        align-items: center;

        @include mixin.media(mb) {
          flex-direction: column;
          justify-content: space-evenly;
        }

        .img-wrap-1 {
          width: 50%;
          height: 85%;

          transition: transform .5s, opacity .5s;
          transform: translateX(-30px);
          opacity: 0;

          @include mixin.media(mb) {
            transform: unset;
            opacity: 1;
            width: 100%;
            height: 60%;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .img-bg-1 {
            background-image: asset.furl(pc, sec3, interior-1);
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        }

        .content-1 {
          width: 50%;
          
          @include mixin.media(mb) {
            width: 100%;
            height: 27%;
          }

          .text {
            color: #212529;

            .title-1, .desc-1 {
              transition: transform .5s, opacity .5s;
              transform: translateX(30px);
              opacity: 0;

              @include mixin.media(mb) {
                transform: unset;
                opacity: 1;
              }
            }

            .title {
              @include g.fontStyle(DINPro-Regular, 60px, 70px);

            }

            .desc {
              @include g.fontStyle(DINPro-Regular, 28px, 40px);
              width: 100%;
              margin-top: func.toEm(50px, 30px);
            }
          }
        }
      }
    }

    .main-2 {
      display: flex;
      position: absolute;
      height: 100vh;
      width: 100vw;
      justify-content: center;

      .main-wrap-2 {
        gap: func.toEm(40px);
        display: flex;
        align-items: center;

        @include mixin.media(mb) {
          flex-direction: column-reverse;
        }

        .img-wrap-2 {
          width: 50%;
          height: 90%;
          position: relative;

          @include mixin.media(mb) {
            width: 100%;
            height: 65%;
          }

          .img-bg-1 {
            background-image: asset.furl(pc, sec3, interior-2);
            background-repeat: no-repeat;
            background-size: cover;
            width: 80%;
            height: 60%;
            position: absolute;
            bottom: 0;
            left: 0;

            @include mixin.media(mb) {
              height: 60%;
            }
          }

          .img-bg-2 {
            background-image: asset.furl(pc, sec3, interior-3);
            background-repeat: no-repeat;
            background-size: cover;
            width: 55%;
            height: 70%;
            position: absolute;
            top: 0;
            right: 0;
            border: 3px solid #fff;
            z-index: 1;

            @include mixin.media(mb) {
              height: 60%;
              width: 60%;
            }
          }
        }

        .content-2 {
          width: 50%;

          @include mixin.media(mb) {
            width: 100%;
            height: 25%;
          }

          .text {
            color: #212529;

            .title {
              @include g.fontStyle(DINPro-Regular, 60px, 70px);

            }
            .desc {
              @include g.fontStyle(DINPro-Regular, 28px, 40px);
              width: 90%;
              margin-top: func.toEm(50px, 30px);
            }
          }
        }
      }
    }

    .main-3 {
      display: flex;
      position: absolute;
      height: 100vh;
      width: 100vw;
      justify-content: center;

      @include mixin.media(mb) {
        position: unset;
      }

      .img-bg-3 {
        background-image: asset.furl(pc, sec3, interior-4);
        width: 55%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        right: 0;

        @include mixin.media(mb) {
          width: 100%;
          height: 60%;
          bottom: unset;
          top: 0;
        }
      }

      .main-wrap-3 {
        display: flex;
        align-items: center;

        @include mixin.media(mb) {
          height: 40%;
          position: absolute;
          bottom: 0;
        }

        .content-3 {
            color: #000;

            .title {
              @include g.fontStyle(DINPro-Regular, 60px, 70px);

            }
            .desc {
              @include g.fontStyle(DINPro-Regular, 28px, 40px);
              margin-top: func.toEm(60px, 30px);
              width: 40%;

              @include mixin.media(mb) {
                width: 100%;
              }
            }
          }
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
