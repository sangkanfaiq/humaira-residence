<template>
    <section class="section sec-5">

        <div class="side-text">
            <div class="bullet-group">
                <div class="bullets"></div>
                <div class="bullets"></div>
            </div>
            <div class="text">
                <div class="title ts-1">Perspective</div>
            </div>
            <div class="outer-circle"></div>
            <div class="dots"></div>
        </div>

        <div class="container main-container">
            <div class="left">
                <div class="text main-text">
                    <div class="title title-1 title-selected">72/105</div>
                    <div class="title title-2">48/84</div>
                    <div class="title title-3">45/78</div>
                    <div class="title title-4">36/72</div>
                    <div class="title title-5">36/66</div>
                    <div class="title title-6">36/60</div>
                    <div class="title title-7">36/60 Special</div>
                </div>
            </div>
            <div class="right">
                <div class="main-display">
                    <div class="md-img md-1"></div>
                </div>
                <div class="children">
                    <div class="cd-img box-1 c-1"></div>
                    <div class="cd-img box-2 c-2"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery';

export default {
    props: {
    },
    watch: {
    },
    mounted() {
        if(this.$parent.isDevice() === "pc") {
            this.startAnimationPC();
        } else {
            this.startAnimationPC();
        }
    },
    methods: {
        startAnimationPC() {
            const tl = new TimelineMax();
            const AnimationSec5 = this.$scrollmagic
                .scene({
                    triggerElement: ".sec-5",
                    triggerHook: 0.0,
                    duration: "300%",
                }).setTween(tl).setPin('.sec-5');

            this.$scrollmagic.addScene(AnimationSec5);

            this.$parent.animationPositionReset();

            tl.to(".sec-5", .1, {}, this.$parent.animationPosition());
            tl.to(".sec-5", .1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, { onStart: Step2Start, onReverseComplete: Step2Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, { onStart: Step3Start, onReverseComplete: Step3Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, { onStart: Step4Start, onReverseComplete: Step4Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, { onStart: Step5Start, onReverseComplete: Step5Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, { onStart: Step6Start, onReverseComplete: Step6Reverse }, this.$parent.animationPosition(3));
            tl.to(".sec-5", .1, {}, this.$parent.animationPosition(3));

            function Step1Start() {
                $('.sec-5 .title-1').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-2').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-1").addClass("md-2").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-1").addClass("c-3").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-2").addClass("c-4").css('transition', '.5s')

            }

            function Step1Reverse() {
                $('.sec-5 .title-1').addClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-2').removeClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-2").addClass("md-1").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-3").addClass("c-1").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-4").addClass("c-2").css('transition', '.5s')
            }

            function Step2Start() {
                $('.sec-5 .title-2').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-3').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-2").addClass("md-3").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-3").addClass("c-5").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-4").addClass("c-6").css('transition', '.5s')

            }

            function Step2Reverse() {
                $('.sec-5 .title-3').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-2').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-3").addClass("md-2").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-5").addClass("c-3").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-6").addClass("c-4").css('transition', '.5s')
            }

            function Step3Start() {
                $('.sec-5 .title-3').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-4').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-3").addClass("md-4").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-5").addClass("c-7").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-6").addClass("c-8").css('transition', '.5s')

            }

            function Step3Reverse() {
                $('.sec-5 .title-4').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-3').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-4").addClass("md-3").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-7").addClass("c-5").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-8").addClass("c-6").css('transition', '.5s')
            }

            function Step4Start() {
                $('.sec-5 .title-4').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-5').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-4").addClass("md-5").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-7").addClass("c-9").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-8").addClass("c-10").css('transition', '.5s')

            }

            function Step4Reverse() {
                $('.sec-5 .title-5').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-4').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-5").addClass("md-4").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-9").addClass("c-7").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-10").addClass("c-8").css('transition', '.5s')
            }

            function Step5Start() {
                $('.sec-5 .title-5').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-6').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-5").addClass("md-6").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-9").addClass("c-11").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-10").addClass("c-12").css('transition', '.5s')

            }

            function Step5Reverse() {
                $('.sec-5 .title-6').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-5').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-6").addClass("md-5").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-11").addClass("c-9").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-12").addClass("c-10").css('transition', '.5s')
            }

            function Step6Start() {
                $('.sec-5 .title-6').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-7').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-6").addClass("md-7").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-11").addClass("c-13").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-12").addClass("c-14").css('transition', '.5s')

            }

            function Step6Reverse() {
                $('.sec-5 .title-7').removeClass("title-selected").css('transition', '.3s')
                $('.sec-5 .title-6').addClass("title-selected").css('transition', '.3s')

                $('.sec-5 .md-img').removeClass("md-7").addClass("md-6").css('transition', '.5s')

                $('.sec-5 .box-1').removeClass("c-13").addClass("c-11").css('transition', '.5s')
                $('.sec-5 .box-2').removeClass("c-14").addClass("c-12").css('transition', '.5s')
            }
        },
    }
}
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;


.sec-5 {
    background-color: #000;
    width: 100%;

    .side-text {
        position: absolute;
        left: -10em;
        display: flex;
        align-items: center;
        transform: rotate(-90deg);

        @include mixin.media(mb) {
          left: -11.5em;
        }

        .dots {
          width: func.toEm(10px);  
          height: func.toEm(10px);
          border-radius: 50%;
          background-color: #fff;
          margin: 0 2em;
        }

        .outer-circle {
          width: func.toEm(25px);  
          height: func.toEm(25px);
          border-radius: 50%;
          border: 1px solid #fff;
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
            background-color: #fff;
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
            background-color: #fff;
          }
        }
        
        .title {
          @include g.fontStyle(AktivGroteskEx-Regular, 18px, 22px);
          color: #fff;
          text-align: center;
          width: max-content;
          padding: 0 2em;
        }
    }

    .main-container {
        @include mixin.media(mb) {
            display: flex;
            flex-direction: column-reverse;
        }
    }

    .left {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;

        @include mixin.media(mb) {
           width: 100%;
           height: 40%;
        }

        .main-text {
            @include mixin.media(mb) {
                
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 5em;
                justify-content: center;
                align-items: center;
            }

        }

        .text {
            margin-left: 5em;

            .title {
                @include g.fontStyle(DINPro-Regular, 80px, 130px);
                color: #FFF;
            }

            .title-selected {
                background: #CAC531; 
                background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);
                background: linear-gradient(to right, #F3F9A7, #CAC531);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: DINPro-Bold !important;

                &::before {
                    content: "— ";
                }
            }
        }
    }

    .right {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2em;

        @include mixin.media(mb) {
           width: 100%;
           height: 60%;
        }

        .main-display {
            width: 100%;
            height: 65%;
            
            .md-img {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
            }

            .md-1 {
                background-image: asset.furl(pc, sec5, 72_105_1);
            }

            .md-2 {
                background-image: asset.furl(pc, sec5, 48_84_1);
            }

            .md-3 {
                background-image: asset.furl(pc, sec5, 45_78_1);
            }

            .md-4 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .md-5 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .md-6 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .md-7 {
                background-image: asset.furl(pc, sec5, 36_1);
            }
        }

        .children {
            display: flex;
            height: 25%;
            gap: 2em;

            .cd-img {
                width: 50%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
            }

            .c-1 {
                background-image: asset.furl(pc, sec5, 72_105_2);
            }

            .c-2 {
                background-image: asset.furl(pc, sec5, 72_105_3);
            }

            .c-3 {
                background-image: asset.furl(pc, sec5, 48_84_2);
            }

            .c-4 {
                background-image: asset.furl(pc, sec5, 48_84_3);
            }
            
            .c-5 {
                background-image: asset.furl(pc, sec5, 45_78_2);
            }

            .c-6 {
                background-image: asset.furl(pc, sec5, 45_78_3);
            }

            .c-7 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-8 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-9 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-10 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-11 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-12 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-13 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

            .c-14 {
                background-image: asset.furl(pc, sec5, 36_1);
            }

        }
    }


}


@include g.LastLoad();
@include asset.LastLoad();
</style>
