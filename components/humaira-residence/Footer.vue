<template>
  <section class="footer">
    <div class="logo-wrapper">
      <div class="img-logo"></div>
    </div>
    <div class="main-container">
        <div class="container-footer main-1">
          <div class="contact-information space-top">
            <div class="text title-footer">Contact Information</div>
            <div class="text info-sec">
              <div class="info">
                We're thrilled that you're considering our residence<br />
                as your future home. If our property has caught your eye and<br />
                you're eager to learn more or take the next steps,<br />
                don't hesitate to get in touch with us.
              </div>
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
          </div>
    
          <div class="social-section">
            <div class="text title-footer">Unit Type</div>
            <div class="units">
              <div class="text">
                <div class="text-units">72/105</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">48/84</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">45/78</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">36/72</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">36/66</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">36/60</div>
              </div>
            </div>
            <div class="units">
              <div class="text">
                <div class="text-units">36/60 Special</div>
              </div>
            </div>
          </div>
    
          <div class="social-section">
            <div class="text title-footer">Follow us on</div>
            <div class="ig">
              <div class="img-ig"></div>
              <div class="text">
                <a href="https://www.instagram.com/humaira.residence/" target="_blank" class="text-social">Instagram</a>
              </div>
            </div>
            <div class="fb">
              <div class="img-fb"></div>
              <div class="text">
                <div class="text-social">Facebook</div>
              </div>
            </div>
            <div class="twt">
              <div class="img-twt"></div>
              <div class="text">
                <div class="text-social">Twitter</div>
              </div>
            </div>
            <div class="tt">
              <div class="img-tt"></div>
              <div class="text">
                <div class="text-social">Tiktok</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="bottom">
      <div class="text">
        <div class="desc">Copyright © 2023 Humaira Residence. All Right Reserved</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as
  func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as
  asset;

.footer {
  background-color: #000;
  width: 100%;

  .main-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

  }

  .bottom {
    margin-top: 3em;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
        .desc {
            @include g.fontStyle(DINPro-Regular, 22px, 28px);
            color: gray;
        }
    }
  }


  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .img-logo {
      background-image: asset.furl(pc, logo, logo);
      width: func.toEm(150px);
      height: func.toEm(150px);
      background-repeat: no-repeat;
      background-size: contain;
      filter: brightness(130%);
    }
  }

  .container-footer {
    min-width: 90vw;
    max-width: 90vw;
  }

  .main-1 {
    display: flex;
    justify-content: space-between;

    @include mixin.media(mb) {
      flex-direction: column;
    }
  }

  .title-footer {
    @include g.fontStyle(DINPro-Bold, 16px, 24px);
    color: #fff;

    @include mixin.media(mb) {
      margin-top: 2em;
    }
  }

  .contact-information {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .info-sec {
      color: #fff;

      @include mixin.media(mb) {
        br {
          display: none;
        }
      }

      .info {
        @include g.fontStyle(DINPro-Regular, 24px, 28px);
      }
    }

    .contact {
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      gap: 1em;

      .label {
        @include g.fontStyle(DINPro-Regular, 24px, 28px);
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

  

  .social-section {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .units {
      .text-units {
        @include g.fontStyle(DINPro-Regular, 24px, 28px);
        color: #fff;
      }
    }

    a {
        text-decoration: none;
    }

    .ig,
    .fb,
    .twt,
    .tt {
      display: flex;
      align-items: center;

      .img-ig {
        background-image: asset.furl(pc, logo, ig);
        width: func.toEm(12px);
        height: func.toEm(12px);
        background-repeat: no-repeat;
        background-size: contain;
      }

      .img-fb {
        background-image: asset.furl(pc, logo, fb);
        width: func.toEm(12px);
        height: func.toEm(12px);
        background-repeat: no-repeat;
        background-size: contain;
      }

      .img-twt {
        background-image: asset.furl(pc, logo, twt);
        width: func.toEm(12px);
        height: func.toEm(12px);
        background-repeat: no-repeat;
        background-size: contain;
      }

      .img-tt {
        background-image: asset.furl(pc, logo, tt);
        width: func.toEm(12px);
        height: func.toEm(12px);
        background-repeat: no-repeat;
        background-size: contain;
      }

      .text-social {
        @include g.fontStyle(DINPro-Regular, 24px, 28px);
        color: #fff;
        margin-left: 0.5em;
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
