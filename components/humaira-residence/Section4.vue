<template>
    <section class="section sec-4">
        <div class="main-container">
            <div class="top-content">
                <div class="box radius img-1"></div>
                <div class="box radius img-2"></div>
                <div class="box radius img-3"></div>
                <div class="box radius img-4"></div>
                <div class="box radius img-5"></div>
                <div class="box radius img-6"></div>
                <div class="box radius img-7"></div>
                <div class="box radius img-8"></div>
                <div class="box radius img-9"></div>
            </div>

            <div class="text main-text">
                <div class="title title-1">"Minimalist House</div>
                <div class="title title-2">Affordable Price"</div>
            </div>

            <div class="bottom-content">
                <div class="box radius img-9"></div>
                <div class="box radius img-8"></div>
                <div class="box radius img-7"></div>
                <div class="box radius img-6"></div>
                <div class="box radius img-5"></div>
                <div class="box radius img-4"></div>
                <div class="box radius img-3"></div>
                <div class="box radius img-2"></div>
                <div class="box radius img-1"></div>
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
            this.Step1Animation();
            this.startAnimation();
        } else {
            this.Step1Animation();
            this.AnimationMB();
        }
    },
    methods: {
        Step1Animation() {
            const tl = new TimelineMax();

            const AnimationSec4 = this.$scrollmagic.scene({
                triggerElement: ".sec-4",
                triggerHook: 0.3,
                duration: "50%",
            }).setTween(tl)

            this.$scrollmagic.addScene(AnimationSec4);

            tl.to(".sec-4", .1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, 0);

            function Step1Start() {
                $('.sec-4 .title-1').css('transform', 'unset').css('opacity', 1)
                $('.sec-4 .title-2').css('transform', 'unset').css('opacity', 1)
            }

            function Step1Reverse() {
                $('.sec-4 .title-1').css('transform', 'translateY(50px)').css('opacity', 0)
                $('.sec-4 .title-2').css('transform', 'translateY(50px)').css('opacity', 0)
            }
        },
        startAnimation() {
            const tl = new TimelineMax();

            const AnimationSec4 = this.$scrollmagic.scene({
                triggerElement: ".sec-4",
                triggerHook: 0.0,
                duration: "200%",
            }).setTween(tl).setPin('.sec-4');

            this.$scrollmagic.addScene(AnimationSec4);

            $(document).ready(function() {
                const contentTop = $('.sec-4 .top-content');
                const contentBottom = $('.sec-4 .bottom-content');

                const offsetWidthTop = contentTop[0].offsetWidth;
                const offsetWidthBottom = contentBottom[0].offsetWidth;

                const innerWidth = window.innerWidth

                const totalTopWidth = offsetWidthTop - innerWidth
                const totalBottomWidth = offsetWidthBottom - innerWidth

                tl.fromTo(".sec-4 .top-content", 2, { x: '-5vw' }, { x: (totalTopWidth * -1) + -40 }, 0);
                tl.fromTo(".sec-4 .bottom-content", 2, { x: (totalBottomWidth * -1) + -40 }, { x: '-5vw' }, 0);
            });
        },
        AnimationMB() {
            const tl = new TimelineMax();

            const AnimationSec4 = this.$scrollmagic.scene({
                triggerElement: ".sec-4",
                triggerHook: 0.0,
                duration: "200%",
            }).setTween(tl).setPin('.sec-4');

            this.$scrollmagic.addScene(AnimationSec4);

            $(document).ready(function() {
                const contentTop = $('.sec-4 .top-content');
                const contentBottom = $('.sec-4 .bottom-content');

                const offsetWidthTop = contentTop[0].offsetWidth;
                const offsetWidthBottom = contentBottom[0].offsetWidth;

                const innerWidth = window.innerWidth

                const totalTopWidth = offsetWidthTop - innerWidth
                const totalBottomWidth = offsetWidthBottom - innerWidth

                tl.fromTo(".sec-4 .top-content", 2, { x: '-5vw' }, { x: (totalTopWidth * -1) + -40 }, 0);
                tl.fromTo(".sec-4 .bottom-content", 2, { x: (totalBottomWidth * -1) + -40 }, { x: '-5vw' }, 0);
            });
        },
    }
}
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;


.sec-4 {
    background-color: #000;
    width: 100%;
   

    .main-container {
        position: relative;
        width: 100%;
        height: 95%;
    }

    .main-text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;


        .title {
            @include g.fontStyle(DINPro-Bold, 80px, 120px);
            text-transform: uppercase;

            background: #CAC531; 
            background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);
            background: linear-gradient(to right, #F3F9A7, #CAC531);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .title-1 {
            margin-left: -6em;

            transform: translateY(50px);
            opacity: 0;
            transition: transform .5s, opacity .5s;

            @include mixin.media(mb) {
                margin-left: unset;
            }
        }
        .title-2 {
            margin-right: -7em;

            transform: translateY(50px);
            opacity: 0;
            transition: transform .5s, opacity .5s;

            @include mixin.media(mb) {
                margin-right: unset;
            }
        }
    }

    .radius {
        border-radius: func.toEm(20px);
    }

    .box {
        width: func.toEm(600px);
        height: func.toEm(300px);
        background-color: antiquewhite;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @include mixin.media(mb) {
            width: func.toEm(600px);
            height: func.toEm(350px);
        }
    }

    .top-content {
        position: absolute;
        top: 0;
        display: flex;
        gap: func.toEm(20px);
    }

    .bottom-content {
        position: absolute;
        bottom: 0;
        display: flex;
        gap: func.toEm(20px);
    }

    .img-1 {
        background-image: asset.furl(pc, sec4, img1);
    }
    .img-2 {
        background-image: asset.furl(pc, sec4, img2);
    }
    .img-3 {
        background-image: asset.furl(pc, sec4, img3);
    }
    .img-4 {
        background-image: asset.furl(pc, sec4, img4);
    }
    .img-5 {
        background-image: asset.furl(pc, sec4, img5);
    }
    .img-6 {
        background-image: asset.furl(pc, sec4, img6);
    }
    .img-7 {
        background-image: asset.furl(pc, sec4, img7);
    }
    .img-8 {
        background-image: asset.furl(pc, sec4, img8);
    }
    .img-9 {
        background-image: asset.furl(pc, sec4, img9);
    }
}


@include g.LastLoad();
@include asset.LastLoad();
</style>
