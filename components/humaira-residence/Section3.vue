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
              <div class="title title-1">
                Designing for <span>Comfort</span><br />Interiors That Embrace
                <span>Relaxation.</span>
              </div>
              <div class="desc desc-1">
                Step into a world of interior design where <b>relaxation</b> and
                <b>comfort</b> take center stage. Our designs are crafted with one goal
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
              <div class="title title-2">Creating <span>Comfort</span><br> That <span>Feels Like Home</span></div>
              <div class="desc desc-2">
                Whether it's a cozy nook or an expansive living area, we prioritize your <b>peace of mind</b>. Every detail, every element is thoughtfully chosen to create an atmosphere that welcomes tranquility.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-3">
        <div class="img-bg-3"></div>
        <div class="container main-wrap-3">
            <div class="text content-3">
              <div class="title title-3">The <span>Family</span> Living Room<br> Where <span>Memories</span> Are Made</div>
              <div class="desc desc-3">It's the perfect place for your family to relax and spend quality time together. With comfy furnishings and a welcoming atmosphere, our living room is where you'll <b>create special memories.</b>
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
    }
  },
  methods: {
    startAnimation() {
      const tl = new TimelineMax();

      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".sec-3",
          triggerHook: 0.0,
          duration: "250%",
        })
        .setTween(tl).setPin('.sec-3');

      this.$scrollmagic.addScene(scene);

      tl.to(".sec-3", 1, {}, 0);
      tl.to(".sec-3 .main-1", 1, { x: '-100vw' }, 0.5);
      tl.fromTo(".sec-3 .main-2", 1, { x: '100vw'}, { x: 0}, 0.5);

      tl.to(".sec-3", .3, { onStart: Step2Start, onReverseComplete: Step2Reverse }, 0.8);

      tl.to(".sec-3", .1, { onStart: Step2TextStart, onReverseComplete: Step2TextReverse }, 1);

      tl.to(".sec-3 .main-2", 1, { x: '-100vw' }, 1.5);
      tl.fromTo(".sec-3 .main-3", 1, { x: '100vw'}, { x: 0}, 1.5);
      tl.to(".sec-3", .1, { onStart: Step3Start, onReverseComplete: Step3Reverse }, 1.8);


      function Step2Start() {
        $('.sec-3 .main-2 .img-bg-1').css('transform', 'unset').css('opacity', 1)
        $('.sec-3 .main-2 .img-bg-2').css('transform', 'unset').css('opacity', 1)
      }

      function Step2Reverse() {
        $('.sec-3 .main-2 .img-bg-1').css('transform', 'translateY(50px)').css('opacity', 0)
        $('.sec-3 .main-2 .img-bg-2').css('transform', 'translateY(-50px)').css('opacity', 0)
      }

      function Step2TextStart() {
        $('.sec-3 .main-2 .title-2').css('transform', 'unset').css('opacity', 1)
        setTimeout(()=> {
          $('.sec-3 .main-2 .desc-2').css('transform', 'unset').css('opacity', 1)
        }, 300)
      }

      function Step2TextReverse() {
        $('.sec-3 .main-2 .title-2').css('transform', 'translateX(30px)').css('opacity', 0)
        $('.sec-3 .main-2 .desc-2').css('transform', 'translateX(30px)').css('opacity', 0)
      }

      function Step3Start() {
        $('.sec-3 .main-3 .title-3').css('transform', 'unset').css('opacity', 1)
        setTimeout(()=> {
          $('.sec-3 .main-3 .desc-3').css('transform', 'unset').css('opacity', 1)
        }, 300)
      }

      function Step3Reverse() {
          $('.sec-3 .main-3 .title-3').css('transform', 'translateX(30px)').css('opacity', 0)
          $('.sec-3 .main-3 .desc-3').css('transform', 'translateX(30px)').css('opacity', 0)
      }

      
    },
    animationStep1() {
      const tl = new TimelineMax();


      tl.to(".sec-3", .1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, 0);

      function Step1Start() {
        $('.sec-3 .img-wrap-1').css('transform', 'unset').css('opacity', 1)
        $('.sec-3 .content-1 .title-1').css('transform', 'unset').css('opacity', 1)
        setTimeout(()=> {
          $('.sec-3 .content-1 .desc-1').css('transform', 'unset').css('opacity', 1)
        }, 300)
      }

      function Step1Reverse() {
        $('.sec-3 .img-wrap-1').css('transform', 'translateX(-30px)').css('opacity', 0)
        $('.sec-3 .content-1 .title-1').css('transform', 'translateX(30px)').css('opacity', 0)
        $('.sec-3 .content-1 .desc-1').css('transform', 'translateX(30px)').css('opacity', 0)
      }

      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".sec-3 .main-container",
          triggerHook: 0.4,
          duration: "40%",
        })
        .setTween(tl)

      this.$scrollmagic.addScene(scene);
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

        .img-wrap-1 {
          width: 50%;
          height: 85%;
          transition: transform .5s, opacity .5s;

          transform: translateX(-30px);
          opacity: 0;

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
          

          .text {
            color: #03001c;
            .title-1, .desc-1 {
              transition: transform .5s, opacity .5s;
              transform: translateX(30px);
              opacity: 0;
            }
            .title {
              @include g.fontStyle(AktivGroteskEx-Medium, 46px, 60px);

              span {
                color: #ffb000;
              }
            }
            .desc {
              @include g.fontStyle(AktivGroteskEx-Regular, 28px, 40px);
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


        .img-wrap-2 {
          width: 50%;
          height: 90%;
          position: relative;

          .img-bg-1 {
            background-image: asset.furl(pc, sec3, interior-2);
            background-repeat: no-repeat;
            background-size: cover;
            width: 80%;
            height: 60%;
            position: absolute;
            bottom: 0;
            left: 0;

            transition: opacity 0.5s, transform 0.5s;
            transform: translateY(50px);
            opacity: 0;
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

            transition: opacity 0.5s, transform 0.5s;
            transform: translateY(-50px);
            opacity: 0;
          }
        }

        .content-2 {
          width: 50%;
          .text {
            color: #03001c;

            .title-2, .desc-2 {
              transform: translateX(30px);
              opacity: 0;
              transition: opacity 0.5s, transform 0.5s;
            }

            .title {
              @include g.fontStyle(AktivGroteskEx-Medium, 46px, 60px);

              span {
                color: #ffb000;
              }
            }
            .desc {
              @include g.fontStyle(AktivGroteskEx-Regular, 28px, 40px);
              width: 95%;
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

      .img-bg-3 {
        background-image: asset.furl(pc, sec3, interior-4);
        width: 55%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        right: 0;
      }

      .main-wrap-3 {
        display: flex;
        align-items: center;

        .content-3 {
            color: #03001c;

            .title {
              @include g.fontStyle(AktivGroteskEx-Medium, 46px, 60px);
              
              transform: translateX(30px);
              opacity: 0;
              transition: transform .5s, opacity .5s;

              span {
                color: #ffb000;
              }
            }
            .desc {
              @include g.fontStyle(AktivGroteskEx-Regular, 28px, 40px);
              margin-top: func.toEm(60px, 30px);
              width: 40%;

              transform: translateX(30px);
              opacity: 0;
              transition: transform .5s, opacity .5s;
            }
          }
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
