<template>
    <section class="footer">
      <div class="container-footer main-1">
        <div class="contact-information space-top">
            <div class="text title-footer">Contact Information</div>
            <div class="text info-sec">
                <div class="info">We're thrilled that you're considering our residence<br> as your future home. If our property has caught your eye and<br> you're eager to learn more or take the next steps,<br> don't hesitate to get in touch with us.</div>
            </div>

            <div class="contact">
                <div class="text content">
                    <div class="label text-width">Email</div>
                    <div class="label divider">:</div>
                    <div class="label">demo@gmail.com</div>
                </div>
                <div class="text content">
                    <div class="label text-width">Phone</div>
                    <div class="label divider">:</div>
                    <div class="label">+62 812-3456-7890</div>
                </div>
            </div>

            <div class="logo-wrapper">
              <div class="img-logo"></div>
              
            </div>
        </div>

        <div class="social-section space-top">
            <div class="text title-footer">Follow us on</div>
            <div class="ig">
                <div class="img-ig"></div>
                <div class="text">
                    <div class="text-social">Instagram</div>
                </div>
            </div>
            <div class="fb">
                <div class="img-fb"></div>
                <div class="text">
                    <div class="text-social">Facebook</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {},
    watch: {},
    mounted() {
    },
    methods: {},
  };
  </script>
  
  <style scoped lang="scss">
  @use "static/fileadmin/humaira-residence/style/modules/functions/functions" as func;
  @use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
  @use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
  @use "static/fileadmin/humaira-residence/style/modules/functions/assets" as
    asset;
  
  .footer {
    background-image: linear-gradient(315deg, #130f40 0%, #000000 75%);
    min-height: func.toEm(250px);
    max-height: func.toEm(250px);
    width: 100%;
    display: flex;
    justify-content: center;

  
  
    .container-footer {
      min-width: 90vw;
      max-width: 90vw;
    }

    .main-1 {
        display: flex;
        justify-content: space-between;
    }

    .title-footer {
        @include g.fontStyle(HelveticaNowDisplay-Bold, 16px, 24px);
        color: #fff;
        /* margin-bottom: func.toEm(12px); */
    }

    .space-top {
        margin-top: func.toEm(50px);
    }

    .contact-information {
        display: flex;
        flex-direction: column;
        gap: 1em;

        .info-sec {
            color: #fff;

            .info {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 24px, 28px);
            }
        }

        .contact {
            margin: 1em 0;
            display: flex;
            flex-direction: column;
            gap: .5em;

            .label {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 24px, 28px);
                color: #fff;
            }

            .content {
                display: flex;
                flex-direction: row;
            }

            .text-width {
                width: func.toEm(50px);
            }
            .divider {
                width: func.toEm(20px);
            }
        }
    }

    
  
    .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
  
      .img-logo {
        background-image: asset.furl(pc, logo, logo);
        width: func.toEm(50px);
        height: func.toEm(50px);
        background-repeat: no-repeat;
        background-size: contain;
        filter: grayscale(50%);
      }
  
      
    }

    .social-section {
        display: flex;
        flex-direction: column;
        gap: 1em;

        .ig, .fb {
            display: flex;
            align-items: center;

            .img-ig {
                background-image: asset.furl(pc, logo, ig);
                width: func.toEm(12px);
                height: func.toEm(12px);
                background-repeat: no-repeat;
                background-size: contain
            }

            .img-fb {
                background-image: asset.furl(pc, logo, fb);
                width: func.toEm(12px);
                height: func.toEm(12px);
                background-repeat: no-repeat;
                background-size: contain
            }

            .text-social {
                @include g.fontStyle(HelveticaNowDisplay-Regular, 24px, 28px);
                color: #fff;
                margin-left: .5em;
            }
        }

    }
  }
  
  @include g.LastLoad();
  @include asset.LastLoad();
  </style>
  