<template>
    <section class="section sec-2">
       <div class="img-left"></div>
       <div class="img-right"></div>

        <div class="main-text-2">
            <div class="text text-2-wrap">
                <div class="subtext-1"><span>Humaira Residence</span>,<br> a residence with numerous<br> advantages located in the center of Cianjur city<br> with a <span>tropical minimalist concept</span></div>
                <div class="subtext-2">With a unique and <span>forward-facing facade design</span>,<br> it boasts an <span>easily accessible</span> and <span>strategic location</span>,<br> close to public amenities such as schools, shopping centers,<br> hospitals, sports facilities, and Cianjur Citimall.<br><br> Humaira Residence will be a unique dwelling with promising investment value.</div>
            </div>
        </div>

        <div class="main-container">
            <div class="main-1">
                <div class="container main-wrap-1">
                    <div class="img-wrap-1">
                        <div class="img-bg-1"></div>
                        <div class="img-bg-2"></div>
                    </div>
                    <div class="content-1">
                        <div class="text">
                        <div class="title title-m-1">Making <span>Memories</span></div>
                        <div class="desc desc-m-1">
                            Our mission is to help you make memories that will warm your hearts<br> for generations to come. From fun family activities to heartwarming traditions,<br> we provide the tools and inspiration to create moments you'll cherish forever.
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-2">
                <div class="container main-wrap-2">
                    <div class="img-wrap-2">
                        <div class="img-bg bg-1"></div>
                        <div class="img-bc bc-1"></div>
                    </div>
                    <div class="content-2">
                        <div class="text">
                            <div class="title">Happy Neighborhood<br> Where <span>Smiles are Everywhere</span></div>
                            <div class="desc d-1">
                                We're not just a community; we're like a big, happy family.<br> We have fun events like festivals and block parties that bring everyone<br> together, and lifelong friendships are made here.
                            </div>
                            <div class="desc d-2">
                                In this happy place, you'll enjoy well-kept streets and beautiful<br> gardens. The atmosphere is warm, and the people are welcoming.<br> It's perfect for a leisurely walk, a neighborhood BBQ,<br> or just relaxing in the local parks.
                            </div>
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
    props: {
    },
    watch: {
    },
    mounted() {
        if(this.$parent.isDevice() === "pc") {
            this.Step1Animation()
        }
    },
    methods: {
        Step1Animation() {
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

            const animationSec2 = this.$scrollmagic.scene({
                triggerElement: '.sec-2',
                triggerHook: 0.0,
                duration: '700%',
            }).setTween(tl).setPin('.sec-2')

            this.$scrollmagic.addScene(animationSec2)


            this.$parent.animationPositionReset()
            tl.fromTo('.sec-2 .img-left', 2, { x: 0 }, { x: '-50vw' }, this.$parent.animationPosition(2))
            tl.fromTo('.sec-2 .img-right', 2, { x: 0 }, { x: '50vw' }, this.$parent.animationPosition())
            
            tl.to('.sec-2', .1, { onStart: Subtext1Start, onReverseComplete: Subtext1Reverse }, this.$parent.animationPosition(2))
            tl.to('.sec-2', .1, { onStart: Subtext2Start, onReverseComplete: Subtext2Reverse }, this.$parent.animationPosition(2))

            tl.to('.sec-2', .1, { onStart: Main1Start, onReverseComplete: Main1Reverse }, this.$parent.animationPosition(2))
            tl.to(".sec-2 .main-1", 1, { x: '-100vw' }, this.$parent.animationPosition(1));
            tl.fromTo(".sec-2 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());
            
            tl.to('.sec-2', .1, { onStart: Main2TextStart, onReverseComplete: Main2TextReverse }, this.$parent.animationPosition(0.3))
            tl.to('.sec-2', .1, { onStart: Main2Step1Start, onReverseComplete: Main2Step1Reverse }, this.$parent.animationPosition(2))

            tl.to('.sec-2', .1, {}, this.$parent.animationPosition(2))


            function Main2Step1Start() {
               disableTouch(1000)
                $('.sec-2 .main-2 .img-bc').css('transform', 'translateY(-20em)')
                $('.sec-2 .main-2 .d-1').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .main-2 .img-bg').css('transform', 'translateX(-10em)')
                    $('.sec-2 .main-2 .img-bc').css('transform', 'translateX(10em) translateY(-20em)').css('background-color', '#03001c')
                    $('.sec-2 .main-2 .d-2').css('transform', 'unset').css('opacity', 1)
                    setTimeout(()=> {
                        $('.sec-2 .main-2 .img-bg').removeClass('bg-1').addClass('bg-2')
                    }, 300)
                   
                }, 500)
                
            }

            function Main2Step1Reverse() {
               disableTouch(1000)
                $('.sec-2 .main-2 .img-bc').css('transform', 'translateX(0) translateY(-20em)')
                $('.sec-2 .main-2 .d-2').css('transform', 'translateY(30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .main-2 .img-bc').css('transform', 'translateY(0)').css('background-color', '#ffb000')
                    $('.sec-2 .main-2 .img-bg').css('transform', 'translateX(0)')
                    $('.sec-2 .main-2 .d-1').css('transform', 'unset').css('opacity', 1)
                    setTimeout(()=> {
                        $('.sec-2 .main-2 .img-bg').removeClass('bg-2').addClass('bg-1')
                    }, 300)
                }, 500)
            }

            function Main2TextStart() {
                $('.sec-2 .main-2 .content-2').css('transform', 'unset').css('opacity', 1)
            }

            function Main2TextReverse() {
                $('.sec-2 .main-2 .content-2').css('transform', 'translateX(30px)').css('opacity', 0)
            }

            function Subtext1Start() {
                $('.sec-2 .subtext-1').css('transform', 'unset').css('opacity', 1)
            }

            function Subtext1Reverse() {
                $('.sec-2 .subtext-1').css('transform', 'translateY(30px)').css('opacity', 0)
            }

            function Subtext2Start() {
                disableTouch(400)
                $('.sec-2 .subtext-1').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .subtext-2').css('transform', 'unset').css('opacity', 1)
                }, 300)
            }

            function Subtext2Reverse() {
                disableTouch(400)
                $('.sec-2 .subtext-2').css('transform', 'translateY(30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .subtext-1').css('transform', 'unset').css('opacity', 1)
                }, 300)
            }



            function Main1Start() {
                disableTouch(1500)
                $('.sec-2 .subtext-2').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .main-1 .img-wrap-1').css('transform', 'unset').css('opacity', 1)
                    setTimeout(()=> {
                        $('.sec-2 .main-1 .title-m-1').css('transform', 'unset').css('opacity', 1)
                        setTimeout(()=> {
                            $('.sec-2 .main-1 .desc-m-1').css('transform', 'unset').css('opacity', 1)
                        }, 200)
                    }, 400)
                }, 600)
                
            }

            function Main1Reverse() {
                disableTouch(400)
                $('.sec-2 .main-1 .img-wrap-1').css('transform', 'translateY(30px)').css('opacity', 0).css('transition', 'transform .2s, opacity .2')
                $('.sec-2 .main-1 .title-m-1').css('transform', 'translateX(30px)').css('opacity', 0).css('transition', 'transform .2s, opacity .2')
                $('.sec-2 .main-1 .desc-m-1').css('transform', 'translateX(30px)').css('opacity', 0).css('transition', 'transform .2s, opacity .2')
                setTimeout(()=> {
                    $('.sec-2 .subtext-2').css('transform', 'unset').css('opacity', 1)
                }, 400)
            }
        }
    }
}
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;


.sec-2 {
    position: relative;
    

    .img-left {
        background-image: asset.furl(pc, sec2, left);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0
    }

    .img-right {
        background-image: asset.furl(pc, sec2, right);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0
    }

    .main-text-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;

        .text-2-wrap {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .subtext-1 {
            @include g.fontStyle(HelveticaNowDisplay-Bold, 48px, 64px);
            color: #03001c;
            position: absolute;
            width: 100%;

            transform: translateY(30px);
            transition: transform .5s, opacity .5s;
            opacity: 0;

            span {
                color: #ffb000;
            }
        }
        .subtext-2 {
            @include g.fontStyle(HelveticaNowDisplay-Bold, 48px, 64px);
            color: #03001c;
            position: absolute;
            width: 100%;

            transform: translateY(30px);
            transition: transform .5s, opacity .5s;
            opacity: 0;

            span {
                color: #ffb000;
            }
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
                display: flex;
                justify-content: center;

                .img-wrap-1 {
                    width: 50%;
                    height: 60%;
                    position: relative;
                    margin-top: 10em;

                    transform: translateY(30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0;

                    .img-bg-1 {
                        background-color: #ffb000;
                        width: 90%;
                        height: 100%;
                        position: absolute;
                        bottom: -10em;
                        left: 0;
                        border-radius: 20px;
                    }

                    .img-bg-2 {
                        background-image: asset.furl(pc, sec2, img1);
                        width: 90%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: 1;
                        background-repeat: no-repeat;
                        background-size: cover;
                        border-radius: 20px;
                    }
                }

                .content-1 {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
                

                    .text {
                        color: #03001c;

                        .title-m-1, .desc-m-1 {
                            transition: transform .5s, opacity .5s;
                            transform: translateX(30px);
                            opacity: 0;
                        }
                        .title {
                            @include g.fontStyle(HelveticaNowDisplay-Bold, 46px, 60px);

                            span {
                                color: #ffb000;
                            }
                        }
                        .desc {
                            @include g.fontStyle(HelveticaNowDisplay-Regular, 28px, 40px);
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
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5em;
                flex-direction: row-reverse;

                .img-wrap-2 {
                    width: 50%;
                    height: 65%;
                    position: relative;
                    display: flex;
                    align-items: center;

                    .img-bg {
                        width: 100%;
                        height: 100%;
                        position: absolute;

                        transition: .5s;
                    }

                    .bg-1 {
                        background-image: asset.furl(pc, sec2, img2);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        border-radius: 20px;
                        
                    }

                    .bg-2 {
                        background-image: asset.furl(pc, sec2, img3);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        border-radius: 20px;
                    }

                    .img-bc {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        bottom: -10em;
                        left: -10em;
                        z-index: -1;
                        border-radius: 20px;

                        transition: transform .5s, background-color .5s;
                    
                    }

                    .bc-1 {
                        background-color: #ffb000;
                       
                    }

                    .bc-2 {
                        background-color: #03001c;
                    }
                    
                }
                
                .content-2 {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;

                    transform: translateX(30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0;

                    .text {
                        color: #03001c;

                        .title {
                            @include g.fontStyle(HelveticaNowDisplay-Bold, 46px, 60px);
                            width: 100%;
                            left: 0;
                            top: 10em;
                            position: absolute;

                            span {
                                color: #ffb000;
                            }
                        }

                        .desc {
                            @include g.fontStyle(HelveticaNowDisplay-Regular, 28px, 40px);
                            margin-top: func.toEm(80px, 30px);
                            position: absolute;
                            left: 0;
                        }

                        .d-1 {
                            opacity: 1;
                            transition: transform .5s, opacity .5s;
                        }

                        .d-2 {
                            opacity: 0;
                            transition: transform .5s, opacity .5s;
                            transform: translateY(30px);
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
