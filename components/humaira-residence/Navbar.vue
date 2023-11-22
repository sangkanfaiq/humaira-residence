<template>
  <section class="navbar">
    <div class="container-nav">
      <div class="logo-wrapper">
        <NuxtLink to="/">
          <div class="text">
            <div class="title">HUMAIRA RESIDENCE</div>
          </div>
        </NuxtLink>
      </div>
      <div class="nav-content">
        <div class="content">
          <NuxtLink to="/">
            <div class="text">
              <div class="title">Introduction</div>
            </div>
          </NuxtLink>
        </div>
        <div class="content">
          <NuxtLink target="_blank" to="/unit-type">
            <div class="text">
              <div class="title">Unit Type</div>
            </div>
          </NuxtLink>
        </div>
        <div class="content">
          <div class="button" @click="triggerWhatsApp">
            <div class="text">
              <div class="title">Contact us</div>
            </div>
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
    this.shouldOpenWhatsApp = false;
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

  .container-nav {
    min-width: 90vw;
    max-width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mixin.media(mb) {
      justify-content: center;
    }
  }

  .logo-wrapper {

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

    @include mixin.media(mb) {
      display: none;
    }

    .content {
      a {
        text-decoration: none;
      }
      .title {
        @include g.fontStyle(AktivGroteskEx-Bold, 26px, 32px);
        background: #ece9e6;
        background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
        background: linear-gradient(to right, #ffffff, #ece9e6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
      }

      .button {
        border: 2px solid #fff;
        padding: 0.75em 1.5em;
        border-radius: func.toEm(5px);
        cursor: pointer;
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
