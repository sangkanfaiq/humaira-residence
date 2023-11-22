<template>
  <section class="section sec-72_105">
    <div class="container main-container">
      <div class="main-title">
        <div class="text">
          <div class="title">Unit Type 72/105</div>
        </div>
      </div>
      <div class="main-wrap">
        <div class="top">
          <div class="img img-1"></div>
          <div class="img img-2"></div>
        </div>
        <div class="bottom">
          <div class="main-text">
            <div class="text">
              <div class="desc d-2">
                <div class="content">
                  <div class="title-desc">Window Frame</div>
                  <span>:</span>
                  <div class="content-desc">Aluminium</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Door</div>
                  <span>:</span>
                  <div class="content-desc">Engineering Door / Equivalent</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Roof</div>
                  <span>:</span>
                  <div class="content-desc">
                    Frame, Lighsteel;<br />
                    Cover, Concrete Tiles
                  </div>
                </div>
                <div class="divider">
                  <div class="divider"></div>
                </div>
                <div class="content">
                  <div class="title-desc">Sanitary</div>
                  <span>:</span>
                  <div class="content-desc">Sitting Toilet, Shower</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Electrical Power</div>
                  <span>:</span>
                  <div class="content-desc">1300 watt</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Foundation</div>
                  <span>:</span>
                  <div class="content-desc">River stones</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Wall</div>
                  <span>:</span>
                  <div class="content-desc">
                    Pressed concrete blocks with plaster,<br />
                    Paint finishing
                  </div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Floor</div>
                  <span>:</span>
                  <div class="content-desc">
                    Homogeneous tiles of 60x60 cm for the<br />
                    main floor, toilet, and front terrace.
                  </div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Ceiling</div>
                  <span>:</span>
                  <div class="content-desc">
                    Hollow iron frame.<br />Gypsum cover with a paint finish.<br />Ceiling
                    height is 3.40 meters
                  </div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Water</div>
                  <span>:</span>
                  <div class="content-desc">Public Water Supply (PDAM)</div>
                </div>
                <div class="divider"></div>
                <div class="content">
                  <div class="title-desc">Carport</div>
                  <span>:</span>
                  <div class="content-desc">Concrete pavement / slab</div>
                </div>
              </div>
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

.sec-72_105 {
  width: 100%;
  margin-top: 15vh;
  height: 210vh;

  .divider {
    width: 100%;
    height: 1px;
    background-color: rgb(230, 230, 230);
    margin: 1em 0;
  }

  .main-container {
    display: flex;
    flex-direction: column;
  }

  .main-title {
    .text {
      .title {
        @include g.fontStyle(DINPro-Bold, 60px, 70px);
        
        text-align: center;
        width: 100%;
      }
    }
  }

  .main-wrap {
    width: 100%;
    height: 100%;
    margin-top: 10vh;
  }

  .top {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;

    .img {
      width: 100%;
      height: 90%;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .img-1 {
      background-image: asset.furl(pc, sec6, a2);
      position: relative;

      &::after {
        content: "1st Floor";
        display: block;
        position: absolute;
        color: gray;
        right: 15%;
        bottom: 50%;
        top: 50%;

        @include g.fontStyle(DINPro-Regular, 22px, 28px);
      }
    }

    .img-2 {
      background-image: asset.furl(pc, sec6, a3);

      &::after {
        content: "2nd Floor";
        display: block;
        position: absolute;
        color: gray;
        right: 15%;
        bottom: 50%;
        top: 50%;

        @include g.fontStyle(DINPro-Regular, 22px, 28px);
      }
    }
  }

  .bottom {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;

    .main-text {
      height: 100%;
      .text {
        .desc {
          @include g.fontStyle(DINPro-Regular, 28px, 46px);

          .content {
            display: flex;

            .title-desc {
              width: func.toEm(120px);
              color: gray;
            }

            span {
              width: func.toEm(30px);
            }
          }
        }
      }
    }
  }
}

@include g.LastLoad();
@include asset.LastLoad();
</style>
