<template>
    <section class="section sec-particles">
        <div class="main-container">
            <div class="container content">
                <div class="parent">
                    <div class="radius div1">
                        <div class="text text-1">
                            <div class="title">Biopore</div>
                        </div>
                    </div>
                    <div class="radius div2">
                        <div class="img-address"></div>
                        <div class="text text-2">
                            <div class="title">Prime Address</div>
                        </div>
                    </div>
                    <div class="radius div3">
                        <div class="img-security"></div>
                        <div class="text text-2">
                            <div class="title">24 Hours Security</div>
                        </div>
                    </div>
                    <div class="radius div4">
                        <div class="img-mountain"></div>
                        <div class="text text-4">
                            <div class="title">Mountain View</div>
                        </div>
                    </div>
                    <div class="radius div5">
                        <div class="img-living"></div>
                        <div class="text text-5">
                            <div class="title">Comfortable Living</div>
                        </div>
                    </div>
                    <div class="radius div6">
                        <div class="img-road"></div>
                        <div class="text text-6">
                            <div class="title">7 Meters Width Road</div>
                        </div>
                    </div>
                    <div class="radius div7">
                        <div class="img-urban"></div>
                        <div class="text text-7">
                            <div class="title">Urban E-Living</div>
                        </div>
                    </div>
                    <div class="radius div8">
                        <div class="img-hq"></div>
                        <div class="text text-8">
                            <div class="title">High Quality<br>Institution Nearby</div>
                        </div>
                    </div>
                    <div class="radius div9">
                        <div class="img-gate"></div>
                        <div class="text text-9">
                            <div class="title">Single Gate System</div>
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
    props: {
    },
    watch: {
    },
    mounted() {
       this.startAnimationStep1();
    },
    methods: {
        startAnimationStep1() {
        const tl = new TimelineMax();

        const AnimationSec11 = this.$scrollmagic.scene({
            triggerElement: ".sec-particles",
            triggerHook: 0.3,
            duration: "100%",
        })
            .setTween(tl);

            this.$scrollmagic.addScene(AnimationSec11);

            this.$parent.animationPositionReset();
            tl.to(".sec-particles", 1, { onStart: Step1Start, onReverseComplete: Step1Reverse }, this.$parent.animationPosition());
            tl.to(".sec-particles", 1, { onStart: Step2Start, onReverseComplete: Step2Reverse }, this.$parent.animationPosition(0.3));
            tl.to(".sec-particles", 1, { onStart: Step3Start, onReverseComplete: Step3Reverse }, this.$parent.animationPosition(0.3));

            function Step1Start() {
                $('.sec-particles .div1').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div2').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div3').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div4').css('transform', 'unset').css('opacity', 1)
            }

            function Step1Reverse() {
                $('.sec-particles .div1').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div2').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div3').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div4').css('transform', 'translateY(30px)').css('opacity', 0)
            }

            function Step2Start() {
                $('.sec-particles .div5').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div6').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div7').css('transform', 'unset').css('opacity', 1)
            }

            function Step2Reverse() {
                $('.sec-particles .div5').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div6').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div7').css('transform', 'translateY(30px)').css('opacity', 0)
            }

            function Step3Start() {
                $('.sec-particles .div8').css('transform', 'unset').css('opacity', 1)
                $('.sec-particles .div9').css('transform', 'unset').css('opacity', 1)
            }

            function Step3Reverse() {
                $('.sec-particles .div8').css('transform', 'translateY(30px)').css('opacity', 0)
                $('.sec-particles .div9').css('transform', 'translateY(30px)').css('opacity', 0)
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


.sec-particles {
    height: 120vh;
    width: 100%;
    background-image: asset.furl(pc, sec11, bg-dark);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 30%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);

    }

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 30%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6867121848739496) 55%, rgba(0,0,0,0) 100%);

    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .content {
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .parent {
        display: grid;
        grid-template-columns: repeat(4, func.toEm(500px));
        grid-template-rows: repeat(3, func.toEm(350px));
        grid-column-gap: 8px;
        grid-row-gap: 8px;

        .radius {
            border-radius: 20px;
        }

        .div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .div9 {
            transform: translateY(30px);
            transition: transform .5s, opacity .5s;
            opacity: 0;
        }


        .div1 { 
            grid-area: 1 / 1 / 2 / 2;
            background: #11998e;  
            background: -webkit-linear-gradient(to right, #38ef7d, #11998e); 
            background: linear-gradient(to right, #38ef7d, #11998e);
            
            display: flex;
            justify-content: center;
            align-items: center;



            .text-1 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div2 { 
            grid-area: 1 / 2 / 2 / 3; 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3em;
            overflow: hidden;

            background: #F7F8F8;
            background: -webkit-linear-gradient(to right, #ACBB78, #F7F8F8); 
            background: linear-gradient(to right, #ACBB78, #F7F8F8); 

            &:hover {
                .img-address {
                    transform: scale(1.3);
                }
            }

           
            .img-address {
                background-image: asset.furl(pc, sec11, address);
                width: func.toEm(150px);
                height: func.toEm(150px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                transition: transform .5s;
            }

            .text-2 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #0f0c29;
                    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div3 { 
            grid-area: 1 / 3 / 2 / 4;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3em;

            background: #000000;
            background: -webkit-linear-gradient(to right, #434343, #000000); 
            background: linear-gradient(to right, #434343, #000000);

            &:hover {
                .img-security {
                    transform: scale(1.3);
                }
            }

           
            .img-security {
                background-image: asset.furl(pc, sec11, security);
                width: func.toEm(150px);
                height: func.toEm(150px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-2 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div4 { 
            grid-area: 1 / 4 / 3 / 5; 
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;

            background: #fceabb;
            background: -webkit-linear-gradient(to right, #f8b500, #fceabb);
            background: linear-gradient(to right, #f8b500, #fceabb); 

            &:hover {
                .img-mountain {
                    transform: scale(1.3);
                }
            }

            .img-mountain {
                background-image: asset.furl(pc, sec11, mountain);
                width: func.toEm(450px);
                height: func.toEm(450px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-4 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #0f0c29;
                    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div5 { 
            grid-area: 2 / 1 / 4 / 2; 
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;

            background: #360033;
            background: -webkit-linear-gradient(to right, #0b8793, #360033);
            background: linear-gradient(to right, #0b8793, #360033);

            &:hover {
                .img-living {
                    transform: scale(1.3);
                }
            }


            .img-living {
                background-image: asset.furl(pc, sec11, living);
                width: func.toEm(450px);
                height: func.toEm(450px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-5 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    text-align: center;
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div6 { 
            grid-area: 2 / 2 / 3 / 3;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3em;

            background: #141E30;
            background: -webkit-linear-gradient(to right, #243B55, #141E30);  
            background: linear-gradient(to right, #243B55, #141E30); 

            &:hover {
                .img-road {
                    transform: scale(1.3);
                }
            }

           
            .img-road {
                background-image: asset.furl(pc, sec11, road);
                width: func.toEm(150px);
                height: func.toEm(150px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-6 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div7 { 
            grid-area: 2 / 3 / 3 / 4; 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3em;

            background: #141E30;
            background: -webkit-linear-gradient(to right, #243B55, #141E30);  
            background: linear-gradient(to right, #243B55, #141E30); 

            &:hover {
                .img-urban {
                    transform: scale(1.3);
                }
            }

           
            .img-urban {
                background-image: asset.furl(pc, sec11, urban);
                width: func.toEm(150px);
                height: func.toEm(150px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-7 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div8 { 
            grid-area: 3 / 2 / 4 / 4;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: row-reverse;
            padding: 0 2em;

            background: #c31432; 
            background: -webkit-linear-gradient(to right, #240b36, #c31432); 
            background: linear-gradient(to right, #240b36, #c31432); 

            &:hover {
                .img-hq {
                    transform: scale(1.3);
                }
            }

            .img-hq {
                background-image: asset.furl(pc, sec11, hq);
                width: func.toEm(200px);
                height: func.toEm(200px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-8 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #ECE9E6;
                    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .div9 { 
            grid-area: 3 / 4 / 4 / 5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column; 
            gap: 3em;

            background: #A1FFCE; 
            background: -webkit-linear-gradient(to right, #FAFFD1, #A1FFCE);
            background: linear-gradient(to right, #FAFFD1, #A1FFCE); 

            &:hover {
                .img-gate {
                    transform: scale(1.3);
                }
            }

            .img-gate {
                background-image: asset.furl(pc, sec11, gate);
                width: func.toEm(150px);
                height: func.toEm(150px);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                transition: transform .5s;
            }

            .text-9 {
                .title {
                    @include g.fontStyle(HelveticaNowDisplay-ExtraBold, 46px, 56px);
                    background: #0f0c29;
                    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-align: center;
                }
            }
        }
    }
}


@include g.LastLoad();
@include asset.LastLoad();
</style>
