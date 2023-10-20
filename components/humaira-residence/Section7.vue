<template>
    <section class="section sec-7">
      <div class="bg"></div>
      <div class="img-black"></div>
      <div class="animate"></div>
      <div class="text text-1">
          <div class="title"><span>Unit Type 45/78</span></div>
      </div>
      <div class="container">
        <div class="main-wrapper">
          <div class="img-wrapper">
            <div class="text img-title">
              <div class="title">Type 45/78</div>
            </div>
            
            <div class="img-bg bg-2"></div>
          </div>
          <div class="text-section">
            <div class="text text-2">
                <div class="desc">
                    <div class="content">
                        <div class="title-desc">Window Frame</div>
                        <span>:</span>
                        <div class="content-desc">Aluminium</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Door</div>
                        <span>:</span>
                        <div class="content-desc">Engineering Door / Equivalent</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Roof</div>
                        <span>:</span>
                        <div class="content-desc">Frame, Lighsteel;<br> Cover, Concrete Tiles</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Sanitary</div>
                        <span>:</span>
                        <div class="content-desc">Sitting Toilet, Shower</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Electrical Power</div>
                        <span>:</span>
                        <div class="content-desc">1300 watt</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Foundation</div>
                        <span>:</span>
                        <div class="content-desc">River stones</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Wall</div>
                        <span>:</span>
                        <div class="content-desc">Pressed concrete blocks with plaster,<br> Paint finishing</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Floor</div>
                        <span>:</span>
                        <div class="content-desc">Homogeneous tiles of 60x60 cm for the<br> main floor, toilet, and front terrace.</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Ceiling</div>
                        <span>:</span>
                        <div class="content-desc">Hollow iron frame.<br>Gypsum cover with a paint finish.<br>Ceiling height is 3.40 meters</div>
                    </div>
                    <div class="content">
                        <div class="title-desc">Water</div>
                        <span>:</span>
                        <div class="content-desc">Public Water Supply (PDAM)</div>
                        </div>
                    <div class="content">
                        <div class="title-desc">Carport</div>
                        <span>:</span>
                        <div class="content-desc">Concrete pavement / slab</div>
                    </div>
                </div>
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
      this.startAnimationStep1()
      this.startAnimationStep2()
    },
    methods: {
      startAnimationStep1() {
              
        const tl = new TimelineMax();
  
        const AnimationSec5 = this.$scrollmagic
          .scene({
            triggerElement: ".sec-7 .container",
            triggerHook: 0.3,
            duration: "100%",
          })
          .setTween(tl);
  
        this.$scrollmagic.addScene(AnimationSec5);
  
        this.$parent.animationPositionReset();
        tl.to(".sec-7", 1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, this.$parent.animationPosition());
  
        function Step1Start() {
          $('.sec-7 .img-wrapper').css('transform', 'unset').css('opacity', 1)
          $('.sec-7 .text-1').css('transform', 'unset').css('opacity', 1)
        }
  
        function Step1Reverse() {
          $('.sec-7 .img-wrapper').css('transform', 'translateY(30px)').css('opacity', 0)
          $('.sec-7 .text-1').css('transform', 'translateY(30px)').css('opacity', 0)
        }
  
      },
      startAnimationStep2() {
        let stop_keyboard_mouse = false;
  
              function disableScroll(duration = 0) {
                  console.log('disableScroll: ', duration);
                  stop_keyboard_mouse = true;
                  if (duration !== 0) {
                      setTimeout(() => {
                          console.log('disableScroll: bypass');
                          stop_keyboard_mouse = false;
                      }, duration);
                  }
              }
              document.addEventListener("mousemove", function(event) {
                  if (stop_keyboard_mouse) {
                      event.stopPropagation();
                      event.preventDefault();
                  } else {
                      mouseX = event.clientX;
                      mouseY = event.clientY;
                  }
              },{ passive: false });
              document.addEventListener("keydown", function(event) {
                  if (stop_keyboard_mouse) {
                      event.stopPropagation();
                  }
                  event.preventDefault();
              },{ passive: false });
              document.addEventListener("mousewheel", function(event) {
                  if (stop_keyboard_mouse) {
                      event.stopPropagation();
                      event.preventDefault();
                  }
              }, { passive: false });
              
              let isScrollingTouchDisabled = false;
              let lastScrollTouchPosition = 0;
  
              function disableTouch(stopDuration) {
                  disableScroll(stopDuration)
                  stopSTouch(stopDuration);
              }
              function disableScrollingTouch() {
                  isScrollingTouchDisabled = true;
              }
              function enableScrollingTouch() {
                  isScrollingTouchDisabled = false;
              }
              function stopSTouch(duration) {
                  disableScrollingTouch();
                  setTimeout(enableScrollingTouch, duration);
              }
  
              window.addEventListener('scroll', function() {
                  if (isScrollingTouchDisabled) {
                      window.scrollTo(0, lastScrollTouchPosition);
                  } else {
                      lastScrollTouchPosition = window.pageYOffset;
                  }
              },{ passive: false });
              document.body.addEventListener('touchmove', function(event) {
                  if (isScrollingTouchDisabled) {
                      event.preventDefault();
                      window.scrollTo(0, lastScrollTouchPosition);
                  }
              }, { passive: false });
              document.body.addEventListener('touchend', function(event) {
                  if (isScrollingTouchDisabled) {
                      event.preventDefault();
                  }
              }, { passive: false });
  
        const tl = new TimelineMax();
  
        const AnimationSec5Step2 = this.$scrollmagic
          .scene({
            triggerElement: ".sec-7",
            triggerHook: 0.0,
            duration: "100%",
          })
          .setTween(tl).setPin('.sec-7')
  
        this.$scrollmagic.addScene(AnimationSec5Step2);
  
        this.$parent.animationPositionReset();
        tl.to(".sec-7", 1, {}, this.$parent.animationPosition());
        tl.to(".sec-7", .1, { onStart: Step2Start, onReverseComplete: Step2Reverse }, this.$parent.animationPosition(1));
  
        function Step2Start() {
          disableTouch(1000)
          $('.sec-7 .animate').css('transform', 'scale(100)').css('opacity', 1)
  
          setTimeout(()=> {
            $('.sec-7 .container').css('z-index', 3)
            $('.sec-7 .bg-main').css('opacity', 1)
            $('.sec-7 .bg-2').css('transform', 'unset').css('opacity', 1)
            $('.sec-7 .text-2').css('transform', 'unset').css('opacity', 1)
            $('.sec-7 .img-title').css('transform', 'unset').css('opacity', 1)
          }, 800)
        }
  
        function Step2Reverse() {
          disableTouch(2300)
            $('.sec-7 .animate').css('transform', 'scale(0)')
            $('.sec-7 .bg-2').css('transform', 'translateY(30px)').css('opacity', 0)
            $('.sec-7 .text-2').css('transform', 'translateY(30px)').css('opacity', 0)
            $('.sec-7 .img-title').css('transform', 'translateY(30px)').css('opacity', 0)
  
            setTimeout(()=> {
              $('.sec-7 .bg-1').css('transform', 'unset').css('opacity', 1)
              $('.sec-7 .text-1').css('transform', 'unset').css('opacity', 1)
              $('.sec-7 .animate').css('opacity', 0)
            }, 2000)
            
         
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
  
  .sec-7 {
    
    position: relative;
  
    .bg {
        background-image: asset.furl(pc, sec7, img1);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 1;
    }
  
    .img-black {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000, $alpha: 0.6);
    }  
  
    .animate {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: func.toEm(100px);
      height: func.toEm(100px);
      background-color: #fff;
      z-index: 2;
      border-radius: 50%;
      opacity: 0;
  
      transition: transform 2s;
    }
  
    .text-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
  
      transform: translateY(30px);
      transition: transform .5s, opacity .5s;
      opacity: 0;
      
      .title {
        @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 90px, 120px);
        color: #fff;
  
        span {
         
          color: #cac531;
        }
      }
    }
  
    .main-wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  
    .img-wrapper {
      width: 50%;
      height: func.toEm(980px);
      position: relative;
  
      transform: translateY(30px);
      transition: transform .5s, opacity .5s;
      opacity: 0;
  
      .img-title {
        position: absolute;
        top: 0;
        left: 0;
        background: #cac531; 
        background: -webkit-linear-gradient(to right, #f3ff52, #CAC531); 
        background: linear-gradient(to right, #f3ff52, #CAC531);
  
        padding: 1em 2em;
        border-radius: 10px;
  
        transform: translateY(30px);
        opacity: 0;
        transition: transform .5s, opacity .5s;
  
        .title {
          @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 32px, 40px);
          color: #03001c;
        }
      }
  
      .img-bg {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        background-position: center;
      }
  
     
  
      .bg-2 {
        background-image: asset.furl(pc, sec7, img2);
        transform: translateY(30px);
        transition: transform .5s, opacity .5s;
        opacity: 0;
      }
    }
  
    .text-section {
      width: 50%;
      height: func.toEm(980px);
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      justify-content: center;
    }
  
    .text-2 {
      position: absolute;
  
      opacity: 0;
      transform: translateY(30px);
      transition: transform .5s, opacity .5s;
  
      .desc {
        margin-top: func.toEm(20px);
  
        .content {
          display: flex;
          margin-top: .5em;
        }
  
        @include g.fontStyle(HelveticaNowDisplay-Regular, 24px, 36px);
  
        .title-desc {
          width: 200px;
          color: #706c6c;
        }
  
        span {
          width: 50px
        }
  
        .content-desc {
          color: #03001c;
        }
  
      }
    }
  }
  
  @include g.LastLoad();
  @include asset.LastLoad();
  </style>
  