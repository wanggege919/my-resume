<template>
  <div class="portfolio" @touchstart="touchStart" @touchend="touchEnd">
    <h1 class="main-title animated bounceInRight">Portfolio</h1>
    <!-- <transition name="proslide"> -->
    <section class="section1 item-wrapper animated bounceInUp">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(0,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>Vue2.5 开发去哪儿网</h2>
                </div>
                <div class="desc">仿移动端去哪儿网，使用mock数据，支持根据不同城市选择不同景点的功能，首页多区域轮播，城市的展示搜索，城市左侧字母与右侧区块动画联动等等</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6</li>
                    <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
                    <li>使用 axios + promise 异步请求</li>
                    <li>使用 swiper + better-scroll + animate.css 插件</li>
                    <li>使用 stylus 语法：嵌套，混入，函数等</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wanggege919/travel-new"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href="https://wanggege919.github.io/travel-new/dist/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <!-- <transition name="rightMove">
            <div class="right" v-show="show(0,'showRight')">
              <div class="pic">
                <myswiper :lists="musicList"></myswiper>
              </div>
            </div>
          </transition> -->
        </div>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div> -->
    </section>
    <!-- </transition> -->
    <!-- <transition name="proslide"> -->
    <section class="section2 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(1,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>Vue.js搭建CNODE社区</h2>
                </div>
                <div class="desc">该项目是利用Vue.js以及CNODE社区API搭建的一个简易版CNODE社区</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>技术栈：vue + vue-cli + axios + vue-router + es6</li>
                    <li>项目内容：包括文章列表页，文章详情页，作者页面等</li>
                    <li>利用组件化开发，项目由Header,PostList,Artical,UserInfo,SlideBar,Pagination等组件组成</li>
                    <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wanggege919/cnode"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href=" https://wanggege919.github.io/cnode/dist/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <!-- <transition name="rightMove">
            <div class="right" v-show="show(1,'showRight')">
              <div class="pic">
                <myswiper :lists="mallList"></myswiper>
              </div>
            </div>
          </transition> -->
        </div>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div> -->
    </section>
    <!-- </transition> -->
    <!-- <transition name="proslide"> -->
    <section class="section3 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(2,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>Vue.js搭建音乐播放器</h2>
                </div>
                <div class="desc">该项目是利用Vue.js以及从QQ音乐的开放的接口抓来的数据完成的一款音乐播放器</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6 + jsonp</li>
                    <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
                    <li>使用 vuex 进行地址状态管理，支持增删改查</li>
                    <li>使用 axios + promise 异步请求</li>
                    <li>使用 组件化开发，整个项目由页面的基本组件，公用组件完成</li>
                    <li>使用 swiper + better-scroll + animate.css 插件</li>
                    <li>使用 stylus 语法：嵌套，混入，函数等</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wanggege919/vue-music"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href="https://wanggege919.github.io/vue-music/dist/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <!-- <transition name="rightMove">
            <div class="right" v-show="show(2,'showRight')">
              <div class="pic">
                <myswiper :lists="transList"></myswiper>
              </div>
            </div>
          </transition> -->
        </div>
      </div>
    </section>
    <section class="section3 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(2,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>文章电影小分享(小程序)</h2>
                </div>
                <div class="desc">该项目是通过 mock 数据中的文章音乐以及豆瓣接口抓取的电影资源组成的一个微信端小程序。</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>熟悉了小程序的模板以及组件的使用</li>
                    <li>学习了小程序内音乐播放前后台切换以及页面的显示和隐藏的同步</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wanggege919/movieShareApplet"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <!-- <button class>
                    <a
                      class="btn-default"
                      href="https://wuliguaiguaia.github.io/animation-Doraemon/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button> -->
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <!-- <transition name="rightMove">
            <div class="right" v-show="show(3,'showRight')">
              <div class="pic">
                <myswiper :lists="DoraemonList"></myswiper>
              </div>
            </div>
          </transition> -->
        </div>
      </div>
    </section>
    <!-- </transition> -->
  </div>
</template>
<script>
import myswiper from "@/components/myswiper";
import $ from "jquery";

export default {
  data() {
    return {
      len: 3,
      touchStartX: 0,
      touchDiffX: 0,
      page: 0,
      dir: "hor",
      status: "showLeft",
      media: "",
      // musicList: [
      //   { img: require("./music/page1.jpg") },
      //   { img: require("./music/page2.jpg") },
      //   { img: require("./music/page3.jpg") },
      //   { img: require("./music/page4.jpg") },
      //   { img: require("./music/page5.jpg") }
      // ],
      // transList: [
      //   { img: require("./translate/page1.jpg") },
      //   { img: require("./translate/page2.jpg") },
      //   { img: require("./translate/page3.jpg") },
      //   { img: require("./translate/page5.jpg") },
      //   { img: require("./translate/page4.jpg") }
      // ],
      // mallList: [
      //   { img: require("./mall/page1.jpg") },
      //   { img: require("./mall/page2.jpg") },
      //   { img: require("./mall/page3.jpg") },
      //   { img: require("./mall/page5.jpg") },
      //   { img: require("./mall/page4.jpg") }
      // ],
      DoraemonList: [
        { img: require("./Doraemon/1.jpg") },
        { img: require("./Doraemon/2.jpg") }
      ],
    };
  },
  mounted() {
    $(".container").animate({ scrollTop: 0 }, 500);
    this.init();
    this.onScroll();
  },
  components: { myswiper },
  watch: {
    touchDiffX(val) {
      if (val > 100) {
        this.status = "showLeft";
        this.dir = "hor";
      }
      if (val < -100) {
        this.status = "showRight";
        this.dir = "hor";
      }
    }
    // touchDiffY(val) {
    //   if (val > 100) {
    //     this.dir = "ver";
    //     if (this.page > 0) {
    //       this.page--;
    //     }
    //   } else if (val < -100) {
    //     this.dir = "ver";
    //     if (this.page < this.len - 1) {
    //       this.page++;
    //     }
    //   }
    // }
  },
  methods: {
    init() {
      this.media = this.resize();
      $(".portfolio section")
        .first()
        .css({ opaicty: 1 })
        .nextAll(".item-wrapper")
        .css({ opacity: 0 });
    },
    show(page, dir) {
      if (this.media === "pc") {
        return true;
      } else {
        if (!dir) {
        } else {
          if (dir == "showLeft") {
            if (this.dir !== "hor") {
              return true;
            } else {
              return this.status === dir ? true : false;
            }
          } else {
            return page === this.page && this.status === dir ? true : false;
          }
        }
      }
    },
    onScroll() {
      $(".container").on("scroll", () => {
        $(".portfolio .item-wrapper").each((i, el) => {
          if ($(el).offset().top < $(el).height() / 1.2) {
            this.page = i;
            if ($(el).css("opacity") == 0) {
              $(".portfolio section")
                .eq(i)
                .addClass("animated bounceInUp")
                .css({ opacity: 1 })
                .siblings()
                .removeClass("animated bounceInUp");
            }
          }
        });
      });
    },
    resize() {
      if ($(window).width() > 500) {
        return "pc";
      } else {
        return "phone";
      }
    },
    touchStart(e) {
      this.touchStartX = e.changedTouches[0].clientX;
      // this.touchStartY = e.changedTouches[0].clientY;
    },
    touchEnd(e) {
      if (this.media === "phone") {
        let endX = e.changedTouches[0].clientX;
        this.touchDiffX = endX - this.touchStartX;
      }
      // let endY = e.changedTouches[0].clientY;
      // this.touchDiffY = endY - this.touchStartY;
      // console.log("xxxxx");
    }
  }
};
</script>
<style lang="scss" scoped>

.content {
  justify-content: center
}

ol.showStyle{
  li::before{
    content: "*";
    margin-right:7px;
  }
}
.portfolio {
  color: #fff;
  width: 100%;
}
.item-wrapper {
  overflow: hidden;
  height: calc(100vh - 50px);
  transition: transform 0.5s;
  position:relative;
  .item {
    width: 100%;
  }
  &.offsetTop {
    transform: translateY(-100%);
  }
  
}

.item-wrapper .content {
  overflow: scroll;
  .left {
    width: calc(100% - 317px);
    min-width: 357px;
    height: 537px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    position: relative;
    .title {
      h2 {
        position: relative;
        font-size: 25px;
        color: rgba(255, 255, 255, 0.6);
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 80%;
          height: 2px;
          background-color: rgba(212, 59, 51, 1);
        }
      }
    }
    .desc {
      margin-top: 20px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    .info {
      width: 88%;
      border: 1px solid #fff;
      color: rgba(199, 187, 187, 1);
      margin: 14px;
      font-size: 13px;

      ol {
        padding: 10px;
        margin: 10px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .link {
      float: right;
      button {
        padding: 10px 20px;
        background-color: rgb(212, 59, 51);
        margin-right: 10px;
        a {
          color: #fff;
        }
      }
    }
    .slide-icon {
      position: absolute;
      bottom: 0px;
      right: -5px;
      display: none;
      .icon {
        width: 50px;
        height: 50px;
      }
    }
  }
  .right {
    .pic {
      width: 317px;
      height: 537px;
      overflow: hidden;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        z-index: 1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .item-wrapper .content .left .slide-icon {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .container .portfolio {
    padding: 0;
    overflow: hidden;
    font-size: 0;
  }
  .item-wrapper {
    height: calc(100vh - 50px);
    .item {
      height: 100%;
    }
    .content {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      .left {
        position: absolute;
        left: 0;
        background-color: transparent;
        height: 100%;
        width: 100%;
        min-width: 100%;
        padding: 35px;
        overflow: hidden;
        .title h2 {
          font-size: 15px;
          &:after {
            width: 80%;
          }
        }
        .tem {
          padding: 20px;
          background: rgba(0, 0, 0, 0.7);
          position: relative;
        }
        .info {
          margin: 16px 0;
          width: 100%;
          font-size: 14px;
          ol {
            margin: 5px;
          }
        }
        .desc {
          font-size: 12px;
        }
        .link {
          float: none;
          button {
          }
        }
      }
      .right {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        &:after {
          // content: "";
          // position: absolute;
          // left: 0;
          // top: 0;
          // width: 100%;
          // height: 100%;
          // background-color: transparent;
          // z-index: 2;
        }
        .pic {
          position: relative;
        }
      }
    }
  }
}
</style>


