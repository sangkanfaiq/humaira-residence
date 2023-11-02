<template>
    <section class="section sec-2">
       <div class="img-left"></div>
       <div class="img-right"></div>

        <div class="main-text-2">
            <div class="text text-2-wrap">
                <div class="subtext-1"><span>Humaira Residence</span>,<br> a residence with numerous<br> advantages located in the center of Cianjur city<br> with a <span>tropical minimalist concept</span></div>
                <div class="subtext-2">With a unique and <span>forward-facing facade design</span>,<br> it boasts an <span>easily accessible</span> and <span>strategic location</span>,<br> close to public amenities such as schools, shopping centers,<br> hospitals, sports facilities, and Cianjur Citimall.<br class="mb"><br class="mb"> Humaira Residence will be a unique dwelling with<br> promising investment value.</div>
            </div>
        </div>

        <div class="main-container">
            <div class="main-1">
                <div class="container main-wrap-1">
                    <div class="img-wrap-1-a">
                        <div class="img-bg-1"></div>
                        <div class="content-1">
                            <div class="text">
                                <div class="title">Memoirs in Motion</div>
                                <div class="desc">Embracing Life's Moments as a Family</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="img-wrap-1-b">
                        <div class="img-bg-1-b"></div>
                        <div class="content-1-b">
                            <div class="text">
                                <div class="title">Legacy Builders</div>
                                <div class="desc">Creating Treasured Moments<br> Among Loved Ones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-2">
                <div class="container main-wrap-2">
                    <div class="img-wrap-2-a">
                        <div class="img-bg-2"></div>
                        <div class="content-2">
                            <div class="text">
                                <div class="title">Happy Neighborhood</div>
                                <div class="desc">Where Smiles are Everywhere</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="img-wrap-2-b">
                        <div class="img-bg-2-b"></div>
                        <div class="content-2-b">
                            <div class="text">
                                <div class="title">Community Corner Chronicles</div>
                                <div class="desc">Spreading Happiness Near</div>
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
        } else {
            this.AnimationMb()
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
                duration: '500%',
            }).setTween(tl).setPin('.sec-2')

            this.$scrollmagic.addScene(animationSec2)


            this.$parent.animationPositionReset()
            tl.fromTo('.sec-2 .img-left', 2, { x: 0 }, { x: '-50vw' }, this.$parent.animationPosition())
            tl.fromTo('.sec-2 .img-right', 2, { x: 0 }, { x: '50vw' }, this.$parent.animationPosition())
            
            tl.to('.sec-2', .1, { onStart: Subtext1Start, onReverseComplete: Subtext1Reverse }, this.$parent.animationPosition(2))
            tl.to('.sec-2', .1, { onStart: Subtext2Start, onReverseComplete: Subtext2Reverse }, this.$parent.animationPosition(2))

            tl.to('.sec-2', .1, { onStart: Main1Start, onReverseComplete: Main1Reverse }, this.$parent.animationPosition(2))
            tl.to(".sec-2 .main-1", 1, { x: '-100vw' }, this.$parent.animationPosition(1));
            tl.fromTo(".sec-2 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());

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
                disableTouch(200)
                $('.sec-2 .subtext-2').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .main-1 .img-wrap-1-a').css('transform', 'unset').css('opacity', 1)
                    $('.sec-2 .main-1 .img-wrap-1-b').css('transform', 'unset').css('opacity', 1)
                }, 200)
                
            }

            function Main1Reverse() {
                disableTouch(200)
                $('.sec-2 .main-1 .img-wrap-1-a').css('transform', 'translateY(30px)').css('opacity', 0).css('transition', 'transform .2s, opacity .2')
                $('.sec-2 .main-1 .img-wrap-1-b').css('transform', 'translateY(-30px)').css('opacity', 0).css('transition', 'transform .2s, opacity .2')
                setTimeout(()=> {
                    $('.sec-2 .subtext-2').css('transform', 'unset').css('opacity', 1)
                }, 200)
            }
        },
        AnimationMb() {
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

            const animationSec2Mobile = this.$scrollmagic.scene({
                triggerElement: '.sec-2',
                triggerHook: 0.0,
                duration: '100%',
            }).setTween(tl).setPin('.sec-2')

            this.$scrollmagic.addScene(animationSec2Mobile)

            this.$parent.animationPositionReset()
            tl.to(".sec-2", 1, {}, this.$parent.animationPosition());
            tl.to(".sec-2", 1, {onStart: Step1, onReverseComplete: Step1Reverse}, this.$parent.animationPosition(1));
            tl.to(".sec-2", 1, {onStart: Step2, onReverseComplete: Step2Reverse}, this.$parent.animationPosition(1));
            tl.fromTo(".sec-2 .main-1", 1, { x: 0},  {x: '-100vw' }, this.$parent.animationPosition(1));
            tl.fromTo(".sec-2 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());

            function Step2() {
                disableTouch(300)
                $('.sec-2 .subtext-2').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .img-wrap-1-a').css('transform', 'unset').css('opacity', 1)
                    $('.sec-2 .img-wrap-1-b').css('transform', 'unset').css('opacity', 1)
                }, 200)
            }

            function Step2Reverse() {
                disableTouch(300)
                $('.sec-2 .img-wrap-1-a').css('transform', 'translateY(-30px)').css('opacity', 0)
                $('.sec-2 .img-wrap-1-b').css('transform', 'translateY(30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .subtext-2').css('transform', 'unset').css('opacity', 1)
                }, 200)
            }

            function Step1() {
                disableTouch(300)
                $('.sec-2 .subtext-1').css('transform', 'translateY(-30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .subtext-2').css('transform', 'unset').css('opacity', 1)
                }, 200)
            }

            function Step1Reverse() {
                disableTouch(300)
                $('.sec-2 .subtext-2').css('transform', 'translateY(30px)').css('opacity', 0)
                setTimeout(()=> {
                    $('.sec-2 .subtext-1').css('transform', 'unset').css('opacity', 1)
                }, 200)
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
    width: 100%;    

    .img-left {
        background-image: asset.furl(pc, sec2, left);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        @include mixin.media(mb) {
            display: none;
        }
    }

    .img-right {
        background-image: asset.furl(pc, sec2, right);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;

        @include mixin.media(mb) {
            display: none;
        }
    }

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
            @include g.fontStyle(AktivGroteskEx-Medium, 46px, 64px);
            color: #03001c;
            position: absolute;
            width: 100%;

            transform: translateY(30px);
            transition: transform .5s, opacity .5s;
            opacity: 0;

            @include mixin.media(mb) {
                transform: unset;
                opacity: 1;

                br {
                    display: none;
                }
            }

            span {
                color: #cac531;
            }
        }
        .subtext-2 {
            @include g.fontStyle(AktivGroteskEx-Medium, 46px, 64px);
            color: #03001c;
            position: absolute;
            width: 100%;

            transform: translateY(30px);
            transition: transform .5s, opacity .5s;
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
                color: #cac531;
            }
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
            align-items: flex-end;

            @include mixin.media(mb) {
                width: 0;
            }

            .main-wrap-1 {
                display: flex;
                height: 90%;
                width: 100%;
                gap: func.toEm(100px);

                @include mixin.media(mb) {
                    flex-direction: column;
                }

                .img-wrap-1-a {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: space-between;
                    gap: 5em;

                    transform: translateY(30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0;

                    @include mixin.media(mb) {
                        width: 100%;
                        /* transform: unset;
                        opacity: 1; */
                        justify-content: space-evenly;
                    }

                    .img-bg-1 {
                        background-image: asset.furl(pc, sec2, img1);
                        width: 100%;
                        height: 80%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;

                        @include mixin.media(mb) {
                            width: 100%;
                            height: 50%;
                        }
                    }

                    .content-1 {
                        .text {
                            background: #0f0c29;
                            background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                            background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;

                            .title {
                                @include g.fontStyle(AktivGroteskEx-Bold, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(AktivGroteskEx-Regular, 32px, 40px);
                                margin-top: func.toEm(30px, 32px);
                            }
                        }
                    }
                }
                
                .img-wrap-1-b {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 5em;

                    transform: translateY(-30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0;

                    @include mixin.media(mb) {
                        width: 100%;
                        /* transform: unset;
                        opacity: 1; */
                    }

                    .img-bg-1-b {
                        background-image: asset.furl(pc, sec2, img4);
                        width: 100%;
                        height: 65%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;

                        @include mixin.media(mb) {
                            width: 100%;
                            height: 50%;
                        }
                    }

                    .content-1-b {
                        width: 100%;

                        .text {
                            background: #0f0c29;
                            background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                            background: linear-gradient(to right, #24243e, #1f1b47, #0f0c29); 
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;

                            .title {
                                @include g.fontStyle(AktivGroteskEx-Bold, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(AktivGroteskEx-Regular, 32px, 40px);
                                margin-top: func.toEm(30px, 32px);
                            }
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
            align-items: flex-end;

            @include mixin.media(mb) {
                width: 0;

            }

            .main-wrap-2 {
                display: flex;
                height: 90%;
                width: 100%;
                gap: func.toEm(100px);

                @include mixin.media(mb) {
                    flex-direction: column;
                }

                .img-wrap-2-a {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: space-between;
                    gap: 5em;

                    @include mixin.media(mb) {
                        width: 100%;
                        justify-content: space-evenly;
                    }

                    .img-bg-2 {
                        background-image: asset.furl(pc, sec2, img2);
                        width: 100%;
                        height: 80%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;

                        @include mixin.media(mb) {
                            width: 100%;
                            height: 50%;
                        }
                    }

                    .content-2 {
                        .text {
                            background: #0f0c29;
                            background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                            background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;

                            .title {
                                @include g.fontStyle(AktivGroteskEx-Bold, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(AktivGroteskEx-Regular, 32px, 40px);
                                margin-top: func.toEm(30px, 32px);
                            }
                        }
                    }
                }
                
                .img-wrap-2-b {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 5em;

                    @include mixin.media(mb) {
                        width: 100%;
                        justify-content: space-evenly;
                        flex-direction: column-reverse;
                    }

                    .img-bg-2-b {
                        background-image: asset.furl(pc, sec2, img3);
                        width: 100%;
                        height: 65%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;

                        @include mixin.media(mb) {
                            width: 100%;
                            height: 50%;
                        }
                    }

                    .content-2-b {
                        width: 100%;

                        .text {
                            background: #0f0c29;
                            background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                            background: linear-gradient(to right, #24243e, #1f1b47, #0f0c29); 
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;

                            .title {
                                @include g.fontStyle(AktivGroteskEx-Bold, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(AktivGroteskEx-Regular, 32px, 40px);
                                margin-top: func.toEm(30px, 32px);
                            }
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
