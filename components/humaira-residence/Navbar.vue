<template>
  <section class="navbar">
    <div class="container-nav">
      <div class="logo-wrapper">
        <div class="img-logo"></div>
      </div>
      <div class="nav-content">
        <div class="content">
          <div class="text">
            <div class="title">Home</div>
          </div>
        </div>
        <div class="content">
          <div class="text">
            <div class="title">Introduction</div>
          </div>
        </div>
        <div class="content">
          <div class="text">
            <div class="title">Unit Type</div>
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

.navbar {
  background-color: #fff;
  top: 0;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
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
  }

  .nav-content {
    display: flex;
    align-items: center;
    gap: 3em;

    @include mixin.media(mb) {
      display: none
    }

    .content {
      .title {
        @include g.fontStyle(DINPro-Medium, 28px, 45px);
        background: #0f0c29;
        background: -webkit-linear-gradient(
          to right,
          #24243e,
          #302b63,
          #0f0c29
        );
        background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
