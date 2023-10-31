<template>
    <section class="section sec-1">
        <div class="img-bg"></div>
        <div class="img-bg-2"></div>
        <div class="container main-1">
            <div class="text">
                <div class="title">We help you find<br>your <span>Dream House</span></div>
                <div class="desc">The best time to buy a house is now.<br> We at Humaira Residence offer solutions, not promises.<br> To get a modern residence in the center of Cianjur, contact us soon.<br> Limited units available.</div>
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
        $( document ).ready(function() {
            setTimeout(()=> {
                $('.sec-1 .title').css('transform', 'unset').css('opacity', 1)
                setTimeout(()=> {
                    $('.sec-1 .desc').css('transform', 'unset').css('opacity', 1)
                }, 300)
            }, 500)
        });
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as asset;


.sec-1 {
    background-color: #f6f9f8;
    width: 100%;

    .img-bg {
        background-image: asset.furl(pc, sec1, img1);
        width: 100%;
        min-height: 100vh;
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        top: 0;
        right: 0;

        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            background-color: rgba($color: #000, $alpha: 0.5);
        }
    }
   

    .main-1 {
        align-items: center;

        .text {
            color: #f5feff;
            .title {
                @include g.fontStyle(HelveticaNowDisplay-Bold, 90px, 90px);

                transform: translateY(30px);
                opacity: 0;
                transition: transform .5s, opacity .5s;

                span {
                    color: #FFB000;
                }

            }

            .desc {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 32px, 45px);
                margin-top: func.toEm(50px, 32px);

                transform: translateY(30px);
                opacity: 0;
                transition: transform .5s, opacity .5s;
            }
        }
    }
}


@include g.LastLoad();
@include asset.LastLoad();
</style>
