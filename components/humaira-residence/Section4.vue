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
                <div class="title title-1">Minimalist House</div>
                <div class="title title-2">Affordable Price</div>
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
            this.startAnimation();
        } else {
            this.AnimationMB();
        }
    },
    methods: {
        startAnimation() {
            const tl = new TimelineMax();

            const AnimationSec4 = this.$scrollmagic.scene({
                triggerElement: ".sec-4",
                triggerHook: 0.0,
                duration: "200%",
            }).setTween(tl).setPin('.sec-4');

            this.$scrollmagic.addScene(AnimationSec4);

            this.$parent.animationPositionReset()

            tl.fromTo(".sec-4 .top-content", 2, { x: '-5vw' }, { x: '-148vw' }, this.$parent.animationPosition(0.5));
            tl.fromTo(".sec-4 .bottom-content", 2, { x: '-148vw' }, { x: '-5vw' }, this.$parent.animationPosition());
        },
        AnimationMB() {
            const tl = new TimelineMax();

            const AnimationSec4_Mobile = this.$scrollmagic.scene({
                triggerElement: ".sec-4",
                triggerHook: 0.0,
                duration: "200%",
            }).setTween(tl).setPin('.sec-4');

            this.$scrollmagic.addScene(AnimationSec4_Mobile);

            this.$parent.animationPositionReset()

            tl.fromTo(".sec-4 .top-content", 2, { x: '-5vw' }, { x: '-669vw' }, this.$parent.animationPosition(0.5));
            tl.fromTo(".sec-4 .bottom-content", 2, { x: '-669vw' }, { x: '-5vw' }, this.$parent.animationPosition());
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
            @include g.fontStyle(AktivGroteskEx-Bold, 70px, 120px);

            background: #CAC531; 
            background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);
            background: linear-gradient(to right, #F3F9A7, #CAC531);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .title-1 {
            margin-left: -6em;

            @include mixin.media(mb) {
                margin-left: unset;
            }
        }
        .title-2 {
            margin-right: -6em;

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
