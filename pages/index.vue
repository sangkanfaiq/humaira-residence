<template>
  <fragment>
    <Navbar />
    <Whatsapp />
    <div class="main-content">
      <Section1 />
      <SectionParticles />
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionUnits />
      <SectionMaps />
    </div>
    <Footer />
  </fragment>
</template>

<script>
import Navbar from '../components/humaira-residence/Navbar.vue';
import Footer from '../components/humaira-residence/Footer.vue';
import Whatsapp from '../components/humaira-residence/Whatsapp.vue';
import SectionMaps from '../components/humaira-residence/SectionMaps.vue';
import SectionUnits from '../components/humaira-residence/SectionUnits.vue';
import SectionParticles from '../components/humaira-residence/SectionParticles.vue';
import Section1 from '../components/humaira-residence/Section1.vue';
import Section2 from '../components/humaira-residence/Section2.vue';
import Section3 from '../components/humaira-residence/Section3.vue';
import Section4 from '../components/humaira-residence/Section4.vue';

export default {
  components: {
    Navbar,
    Footer,
    Whatsapp,
    SectionMaps,
    Section1,
    Section2,
    Section3,
    Section4,
    SectionUnits,
    SectionParticles,
},
  head() {
        return {
            script: [],
            meta: [
                { name: 'viewport', content: 'initial-scale=1, width=device-width, user-scalable=no, shrink-to-fit=no, maximum-scale=1.0' }
            ],
        };
    },
    layout: "publicity",
    mounted: function () {
        this.$nextTick(function () {
            window.addEventListener('resize', () => {
                this.fontSize();
            });
            this.fontSize();
            this.is_device = this.isDevice();
        });
    },
    methods: {
        fontSize() {
            const width = this.getWidth();
            const height = this.getHeight();
            // Get vmin
            let view_min = height;
            let subtraction = 0;
            if (width <= height) {
                view_min = width;
            }
            if (view_min > 1080) {
                view_min = 1080;
            }

            const _subtraction = 21;
            if (height >= 750 && width < 1920 && window.innerWidth > 720) {
                subtraction = (19.2 - (width / 100)) * _subtraction;
            }

            console.log(`subtraction: ${subtraction}`);
            view_min -= subtraction;
            console.log(`view_min: ${view_min}`);
            this.font_size = view_min / 100;
            console.log(`rs: ${this.font_size}`);
            const root = document.documentElement;
            root.style.setProperty("--js-view-min", this.font_size + "px");
        },
        refreshPage() {
            // ! debug
            console.log('refreshPage');
            // ! end debug
            location.reload();
        },
        isDevice() {
            if (this.getWidth() > 720) {
                return 'pc';
            }
            return 'mb';
        },
        getHeight() {
            return window.innerHeight;
        },
        getWidth() {
            return window.innerWidth;
        },
        vhToPx(numVh, isReturnNum=false) {
            const result = this.getHeight() / 100 * numVh;
            if (isReturnNum) return result
            return (result).toString() + "px";
        },
        vwToPx(numVw, isReturnNum=false) {
            const result = this.getWidth() / 100 * numVw;
            if (isReturnNum) return result
            return (result).toString() + "px";
        },
        pxToEm(numPx, isReturnNum=false) {
            const result = numPx / (((this.is_device === "pc") ? 1920 : 720) / 100) ;
            if (isReturnNum) return result
            return (result).toString() + "em";
        },
        animationPositionReset(isDebug= false) {
            this.animation_position = 0;
            this.debug_animation_position = isDebug;
            if (this.debug_animation_position) {
                console.log('------------------------');
            }
        },
        animationPosition(counter = 0) {
            this.animation_position += counter;
            if (this.debug_animation_position) {
                console.log('_animation_position: ', this.animation_position);
            }
            return this.animation_position;
        },
        animationDuration(ratio = 10) {
            // animation_position / ratio = 100%
            const num = this.animationPosition();
            this.animationPositionReset();
            console.log('animation_duration: ', num / ratio * this.getHeight());
            return num / ratio * this.getHeight();
        },
        testerFunc() {
            console.log('Fungsi saya dipanggil');
        },

        videoGet(id) {
            return document.getElementById(id);
        },
        videoIsReady(video) {
            return video.readyState === 4;
        },
        videoPause(video) {
            if (!this.videoIsReady(video)) return;
            video.pause();
        },
        videoReset(video) {
            if (!this.videoIsReady(video)) return;
            video.currentTime = 0;
            this.videoPause(video);
        },
        videoPlay(video, is_reset = false) {
            if (!this.videoIsReady(video)) return;
            if (is_reset === true) {
                this.videoReset(video);
            }
            video.play();
        }
    },
};
</script>
<style lang="scss">
@use 'sass:math';
@use "static/fileadmin/humaira-residence/style/modules/config";
@use "static/fileadmin/humaira-residence/style/modules/typography" as typography;
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;

// Font Family
@include g.fontFamily("HelveticaNowDisplay-Thin");
@include g.fontFamily("HelveticaNowDisplay-Light");
@include g.fontFamily("HelveticaNowDisplay-Regular");
@include g.fontFamily("HelveticaNowDisplay-Medium");
@include g.fontFamily("HelveticaNowDisplay-Bold");
@include g.fontFamily("HelveticaNowDisplay-Black");
@include g.fontFamily("HelveticaNowDisplay-ExtraBold");
@include g.fontFamily("HelveticaNowDisplay-ExtraBlack");

@include g.fontFamily("InfinixDisplay");
@include g.fontFamily("InfinixDisplay-AR");
@include g.fontFamily("InfinixDisplay-TH");

@include g.fontFamily("AktivGroteskEx-Bold");
@include g.fontFamily("AktivGroteskEx-Medium");
@include g.fontFamily("AktivGroteskEx-Regular");

@include g.fontFamily("GreatVibes-Regular");

@include g.fontFamily("RedRose-Medium");
@include g.fontFamily("RedRose-Light");

@include g.fontFamily("DINPro-Light");
@include g.fontFamily("DINPro-Regular");
@include g.fontFamily("DINPro-Medium");
@include g.fontFamily("DINPro-Bold");

// Basic Css
:root {
    --js-view-min: 10.8px;
}

* {
  padding: 0;
  margin: 0;
}

.main-content {
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden !important;
}
.text {
    font-size: var(--js-view-min);
    display: flex;
    flex-direction: column;
    z-index: 1;
}
.section {
    font-size: var(--js-view-min);
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    // ! debug
    //border: 1px solid #0035ec;
    //background-color: rgba(217, 149, 101, 0.55);
    // ! end debug

    .main {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        //justify-content: center;
        align-items: center;
    }
    .container {
        z-index: 1;
        max-width: 90vw;
        min-width: 90vw;
        height: 100%;
        display: flex;
        flex-grow: 1;

        //justify-content: center;
        //align-items: center;
        //background-color: aqua;

        @include mixin.media(mb) {
            max-width: 90vw;
            min-width: 90vw;
        }
    }
    &.my-preload {
        position:absolute;
        width:0;
        height:0;
        overflow:hidden;
        z-index:-1;
        content: asset.fPreload();
    }
    .bg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}
.img {
    position: relative;
    background-size: cover;
    background-position: center;
    img {
        position: absolute;
        height: 100%;
        width: 100%;
        display: none;
        object-fit: fill;
        &.loaded {
            display: unset;
        }
    }

    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        &.loaded {
            opacity: 0;
            transition: opacity 0.5s;
        }
    }
}

br.mb {
    display: none;
}
@include mixin.media(mb) {
    br.pc {
        display: none;
    }
    br.mb {
        display: block;
    }
}

// End Css
@include g.LastLoad();
@include asset.LastLoad();
@include typography.LastLoad();
</style>
