<template>
    <section class="section sec-4">
        <div class="img-bg"></div>
        <div class="content-wrapper">
            <div class="content top">
                <div class="text text-1">
                    <div class="title">Discovering Your Stride</div>
                </div>
            </div>
            <div class="content bottom">
                <div class="text text-2">
                    <div class="title">Run Your Way to <span>Better Health</span></div>
                </div>
            </div>
        </div>
        <div class="container main-1">
            <div class="content-inside">
                <div class="text">
                    <div class="title title-1">Transform Your Life with<br> the<span> Power of Jogging</span></div>
                    <div class="desc desc-1">Are you ready to take a step towards a healthier and more vibrant life?<br> Look no further than jogging, a simple yet effective way to make a profound<br> difference in your overall well-being. Jogging isn't just about getting fit,<br> it's a journey towards a happier, healthier you.</div>
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
        this.startAnimation()
    },
    methods: {
        startAnimation() {
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

            const tl = new TimelineMax()

            this.$parent.animationPositionReset()
            tl.to('.sec-4', 1, {}, this.$parent.animationPosition())
            tl.fromTo('.sec-4 .text-1', .1, {y: '-50px', opacity: 0}, {y: 0, opacity: 1}, this.$parent.animationPosition(1))
            tl.fromTo('.sec-4 .text-2', .1, {y: '50px', opacity: 0}, {y: 0, opacity: 1}, this.$parent.animationPosition())

            tl.to('.sec-4 .top', 2, {y: '-50vw'}, this.$parent.animationPosition(2))
            tl.to('.sec-4 .bottom', 2, {y: '50vw'}, this.$parent.animationPosition())

            tl.to('.sec-4', .1, {onStart: Step1Start, onReverseComplete: Step1Reverse}, this.$parent.animationPosition(1))
            tl.to('.sec-4', 1, {}, this.$parent.animationPosition(2))


            function Step1Start() {
                $('.sec-4 .title-1').css('transform', 'unset').css('opacity', 1)
                setTimeout(()=> {
                    $('.sec-4 .desc-1').css('transform', 'unset').css('opacity', 1)
                }, 300)
            }

            function Step1Reverse() {
                disableTouch(500)
                setTimeout(()=> {
                    $('.sec-4 .title-1').css('transform', 'translateY(30px)').css('opacity', 0)
                    $('.sec-4 .desc-1').css('transform', 'translateY(30px)').css('opacity', 0)
                }, 300)
            }



            const scene = this.$scrollmagic.scene({
                triggerElement: '.sec-4',
                triggerHook: 0.0,
                duration: '250%',
            }).setTween(tl).setPin('.sec-4')

            this.$scrollmagic.addScene(scene)
        }
    }
}
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;


.sec-4 {
    position: relative;
    
    .img-bg {
        background-image: asset.furl(pc, sec4, jog);
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: .2);
        }
    }

    .content {
        width: 100%;
        height: 50%;
        z-index: 1;
        color: #03001c;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .top {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-image: asset.furl(pc, sec4, top);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        filter: brightness(110%);
    }

    .bottom {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background-image: asset.furl(pc, sec4, bottom);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        filter: brightness(110%);
    }

    .text {
        .title {
            @include g.fontStyle(HelveticaNowDisplay-Regular, 115px, 130px);

            span {
                color: #ffb000;
                font-family: HelveticaNowDisplay-Bold;
            }
        }
    }

    .text-1 {
        margin-bottom: 2em;
        transition: transform .5s, opacity .5s;
    }
    .text-2 {
        margin-top: 2em;
        transition: transform .5s, opacity .5s;
    }

    .main-1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .content-inside {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        .text {
            color: #fff;

            .title-1, .desc-1 {
                transform: translateY(30px);
                opacity: 0;
                transition: transform .5s, opacity .5s;
            }


            .title {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 80px, 90px);

                span {
                    color: #ffb000;
                    font-family: HelveticaNowDisplay-Bold;
                }
            }

            .desc {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 32px, 44px);
                margin-top: func.toEm(50px, 30px);
            }
        }
    }
}


@include g.LastLoad();
@include asset.LastLoad();
</style>
