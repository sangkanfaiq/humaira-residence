<template>
  <section class="navbar">
    <div class="container-nav">
      <div class="logo-wrapper">
        <a href="/">
          <div class="text">
            <div class="title">HUMAIRA RESIDENCE</div>
          </div>
        </a>
      </div>
      <div class="nav-content">
        <div class="content">
          <a href="/">
            <div class="text">
              <div class="title">Overview</div>
            </div>
          </a>
        </div>
        <div class="content">
          <a href="/specifications">
            <div class="text">
              <div class="title">Specifications</div>
            </div>
          </a>
        </div>

        <div class="content">
          <div class="button btn-mb" @click="triggerWhatsApp">
            <div class="text">
              <div class="title">Contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div class="button btn-pc" @click="triggerWhatsApp">
        <div class="text">
          <div class="title">Contact us</div>
        </div>
      </div>
      <div class="menu">
        <div class="img img-1" @click="openMenu()"></div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  props: {},
  watch: {},
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
    this.shouldOpenWhatsApp = false;
    this.openMenu;
  },
  methods: {
    openWhatsApp() {
      const phoneNumber = "+6282240176750";
      const message =
        "Hi, saya ingin mengetahui info tentang Humaira Residence";

      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      if (this.shouldOpenWhatsApp) {
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
      }
    },
    triggerWhatsApp() {
      this.shouldOpenWhatsApp = true;
      this.openWhatsApp();
    },
    openMenu() {
      $(".navbar .img").toggleClass("img-1 img-2");
      $(".nav-content").toggleClass("nav-active", !this.isMenuOpen);

      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped lang="scss">
@use "static/fileadmin/humaira-residence/style/modules/functions/functions" as
  func;
@use "static/fileadmin/humaira-residence/style/modules/mixins/mixins" as mixin;
@use "static/fileadmin/humaira-residence/style/modules/mixins/groups" as g;
@use "static/fileadmin/humaira-residence/style/modules/functions/assets" as
  asset;

.navbar {
  background-color: #000;
  top: 0;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;

  @include mixin.media(mb) {
    background-color: #000;
  }

  .btn-pc {
    @include mixin.media(mb) {
      display: none;
    }
  }

  .btn-mb {
    display: none;

    @include mixin.media(mb) {
      display: block;
    }
  }

  .button {
    border: 2px solid #fff;
    padding: 0.5em 1em;
    border-radius: func.toEm(5px);
    color: #fff;
    cursor: pointer;

    .text {
      .title {
        @include g.fontStyle(DINPro-Medium, 26px, 32px);
      }
    }
  }

  .menu {
    display: none;

    @include mixin.media(mb) {
      display: block;
      margin-right: 1em;

      .img {
        width: 1.5em;
        height: 1.5em;
        background-repeat: no-repeat;
        background-size: contain;
      }

      .img-1 {
        background-image: asset.furl(pc, logo, menu);
      }

      .img-2 {
        background-image: asset.furl(pc, logo, close);
      }
    }
  }

  .container-nav {
    min-width: 90vw;
    max-width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mixin.media(mb) {
      position: absolute;
      min-width: 100vw;
      max-width: 100vw;
    }
  }

  .logo-wrapper {
    @include mixin.media(mb) {
      margin-left: 1em;
    }

    a {
      text-decoration: none;
    }

    .img-logo {
      background-image: asset.furl(pc, logo, logo);
      width: func.toEm(50px);
      height: func.toEm(50px);
      background-repeat: no-repeat;
      background-size: contain;

      @include mixin.media(mb) {
        width: func.toEm(40px);
        height: func.toEm(40px);
        filter: brightness(120%);
      }
    }
    .title {
      @include g.fontStyle(AktivGroteskEx-Bold, 26px, 32px);
      background: #ece9e6;
      background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
      background: linear-gradient(to right, #ffffff, #ece9e6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include mixin.media(mb) {
        @include g.fontStyle(AktivGroteskEx-Bold, 26px, 32px);
      }
    }
  }

  .nav-content {
    display: flex;
    align-items: center;
    gap: 3em;

    .content {
        a {
          text-decoration: none;
        }

        .title {
          @include g.fontStyle(DINPro-Medium, 26px, 32px);
          color: #fff;
        }
      }

    @include mixin.media(mb) {
      /* display: none; */
      height: 100vh;
      background-color: #000;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      left: -100%;
      top: 5vh;
      padding-top: 10em;
      gap: 5em;
      display: flex;
      align-items: center;
      transition: .5s;
      opacity: 0;
    }
  }

  .nav-active {
    @include mixin.media(mb) {
      height: 100vh;
      background-color: #000;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      left: 0;
      top: 5vh;
      padding-top: 10em;
      gap: 5em;
      display: flex;
      align-items: center;
      transition: .5s;
      opacity: 1;

      .content {
        a {
          text-decoration: none;
        }

        .title {
          @include g.fontStyle(DINPro-Medium, 26px, 32px);
          color: #fff;
        }
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
