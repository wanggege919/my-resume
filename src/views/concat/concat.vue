<template>
  <div class="concat">
    <h1 class="main-title animated bounceInRight">Concat me</h1>
    <div class="wrapper flex-wrap animated bounceInUp">
      <div class="item">
        <div class="content tel">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-call"></use>
            </svg>
          </div>
          <div>18848956986</div>
        </div>
      </div>

      <div class="item">
        <div class="content wei">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </div>
          <div>
            <a href="https://i.loli.net/2019/08/09/qirdQAxPE3fTkBc.jpg" target="_blank">活在当下</a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content email">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-email"></use>
            </svg>
          </div>
          <div>1914161290@qq.com</div>
        </div>
      </div>
      <div class="item uniq">
        <div class="content zhihu">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhihu"></use>
            </svg>
          </div>
          <div>
            <a href="https://www.jianshu.com/u/6806081fb1cd" target="_blank">在路上919</a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content git">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </div>
          <div>
            <a href="https://github.com/wanggege919" target="_blank">wanggege919</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
import $ from "jquery";
export default {
  mounted() {
    this.initVanilaTilt();
    this.fixHeight();
  },
  methods: {
    initVanilaTilt() {
      VanillaTilt.init(document.querySelectorAll(".concat dl"), {
        max: 50,
        speed: 400
      });
    },
    fixHeight() {
      $(".concat .item .content").each((i, el) => {
        $(el).height($(el).width());
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.concat {
  color: #fff;
}
.wrapper {
  width: 70%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.item {
  margin: 5px 16px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  // animation: float 2s ease-out  infinite  ;
  animation-iteration-count: infinite;
}
.uniq {
  width: 80px;
  height: 80px;
  padding: 0;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fdfdfd;
  padding: 10px;
  font-size: 12px;
  &.zhihu .icon {
    width: 30px;
    height: 30px;
  }
  .icon {
    width: 40px;
    height: 40px;
  }
  a {
    color:#fdfdfd;
    text-decoration: underline;
  }

  .wei {
    a {
      color: rgb(202, 201, 201);
      padding-bottom: 1px;
      border-bottom: 1px solid rgb(202, 201, 201);
    }
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    width: 100%;
  }
  .item {
    padding: 5px;
  }
  .content {
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

@keyframes float {
  0% {
    transform: translate(0px, 0px);
  }
  50%{
    transform: translate(0px, 50px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>


