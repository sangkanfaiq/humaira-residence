<template>
    <section class="section sec-2">
        <div class="side-text">
            <div class="bullet-group">
                <div class="bullets"></div>
                <div class="bullets"></div>
            </div>
            <div class="text">
                <div class="title ts-1">Family & Neighborhood</div>
            </div>
            <div class="outer-circle"></div>
            <div class="dots"></div>
        </div>

        <div class="main-container">
            <div class="main-1">
                <div class="container main-wrap-1">
                    <div class="img-wrap-1-a">
                        <div class="img-bg-1"></div>
                        <div class="content-1">
                            <div class="text">
                                <div class="title">MEMOIRS IN MOTION</div>
                                <div class="desc">Embracing Life's Moments as a Family</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="img-wrap-1-b">
                        <div class="img-bg-1-b"></div>
                        <div class="content-1-b">
                            <div class="text">
                                <div class="title">LEGACY BUILDERS</div>
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
                                <div class="title">HAPPY NEIGHBORHOOD</div>
                                <div class="desc">Where Smiles are Everywhere</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="img-wrap-2-b">
                        <div class="img-bg-2-b"></div>
                        <div class="content-2-b">
                            <div class="text">
                                <div class="title">COMMUNITY CORNER CHRONICLES</div>
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
            const tl = new TimelineMax()

            const animationSec2 = this.$scrollmagic.scene({
                triggerElement: '.sec-2',
                triggerHook: 0.0,
                duration: '100%',
            }).setTween(tl).setPin('.sec-2')

            this.$scrollmagic.addScene(animationSec2)


            this.$parent.animationPositionReset()

            tl.to(".sec-2 .main-1", 1, { x: '-100vw' }, this.$parent.animationPosition());
            tl.fromTo(".sec-2 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());
        },
        AnimationMb() {
            const tl = new TimelineMax()

            const animationSec2Mobile = this.$scrollmagic.scene({
                triggerElement: '.sec-2',
                triggerHook: 0.0,
                duration: '100%',
            }).setTween(tl).setPin('.sec-2')

            this.$scrollmagic.addScene(animationSec2Mobile)

            this.$parent.animationPositionReset()
            tl.to(".sec-2 .main-1", 1, { x: '-100vw' }, this.$parent.animationPosition());
            tl.fromTo(".sec-2 .main-2", 1, { x: '100vw'}, { x: 0}, this.$parent.animationPosition());
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

    .side-text {
        position: absolute;
        left: -15em;
        display: flex;
        align-items: center;
        transform: rotate(-90deg);
        z-index: 10;

        @include mixin.media(mb) {
          left: -17em;
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
            align-items: flex-end;

            @include mixin.media(mb) {
                width: 0;
            }

            .main-wrap-1 {
                display: flex;
                height: 88%;
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

                    /* transform: translateY(30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0; */

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
                           color: #212529;

                            .title {
                                @include g.fontStyle(DINPro-Regular, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(DINPro-Regular, 32px, 40px);
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

                    /* transform: translateY(-30px);
                    transition: transform .5s, opacity .5s;
                    opacity: 0; */

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
                            color: #212529;

                            .title {
                                @include g.fontStyle(DINPro-Regular, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(DINPro-Regular, 32px, 40px);
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
                height: 88%;
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
                            color: #212529;

                            .title {
                                @include g.fontStyle(DINPro-Regular, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(DINPro-Regular, 32px, 40px);
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
                            color: #212529;

                            .title {
                                @include g.fontStyle(DINPro-Regular, 46px, 56px);
                            }
                            .desc {
                                @include g.fontStyle(DINPro-Regular, 32px, 40px);
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
