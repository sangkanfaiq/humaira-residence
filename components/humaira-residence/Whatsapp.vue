<template>
  <section class="sec-wa">
    <div class="img-wrapper" @click="triggerWhatsApp">
      <div class="img"></div>
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
      const phoneNumber = '+6282240176750';
      const message = 'Hi, saya ingin mengetahui info tentang Humaira Residence';

      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      if (this.shouldOpenWhatsApp) {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
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

.sec-wa {
  z-index: 999;
  position: fixed;

  bottom: 2em;
  right: 2em;

  @include mixin.media(mb) {
    bottom: 1em;
    right: 1em;
  }

  .img-wrapper {
    background-image: asset.furl(pc, logo, wa);
    width: func.toEm(40px);
    height: func.toEm(40px);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;

    @include mixin.media(mb) {
      width: func.toEm(20px);
      height: func.toEm(20px);
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
