<template>
  <section class="navbar">
    <div class="container-nav">
      <div class="logo-wrapper">
        <div class="img-logo"></div>
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

.navbar {
  /* background-color: #fff; */
  min-height: func.toEm(70px);
  display: flex;
  align-items: center;
  justify-content: center;


  .container-nav {
    min-width: 90vw;
    max-width: 90vw;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .img-logo {
      background-image: asset.furl(pc, logo, logo);
      width: func.toEm(100px);
      height: func.toEm(100px);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
