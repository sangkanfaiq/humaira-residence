<template>
  <section class="sec-wa">
    <div class="img-wrapper" onclick="openWhatsApp()">
      <div class="img"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  watch: {},
  mounted() {},
  methods: {
    openWhatsApp() {
      const phoneNumber = '+6287836297476';
      const message = 'Pesan-Anda';

      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      window.open(whatsappURL);
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

.sec-wa {
  z-index: 999;
  position: fixed;

  bottom: 2em;
  right: 2em;

  .img-wrapper {
    background-image: asset.furl(pc, logo, wa);
    width: func.toEm(50px);
    height: func.toEm(50px);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
