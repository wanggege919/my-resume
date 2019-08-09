<template>
  <div class="blog">
    <h1 class="main-title animated bounceInRight">Blog</h1>
    <div class="card card1 animated bounceInUp">
      <h2 class="title">
        <a href="https://www.jianshu.com/p/153e30559c8a" target="_blank" rel="noopener noreferrer">
          Vue.js学习总结
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>Vue指令</li>
        <li>Vue组件</li>
        <li>生命周期</li>
        <li>Vue动画</li>
        <li>Vue-router</li>
        <li>Vuex</li>
      </ul>
      <div class="link">
        <a href="https://www.jianshu.com/p/153e30559c8a" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div>-->
    </div>
    <div class="card card2 animated bounceInUp">
      <h2 class="title">
        <a href="https://www.jianshu.com/p/f7e56e3b2f73" target="_blank" rel="noopener noreferrer">
          学会正则表达式
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>修饰符</li>
        <li>元字符</li>
        <li>前瞻</li>
        <li>常用属性、方法</li>
      </ul>
      <div class="link">
        <a href="https://www.jianshu.com/p/f7e56e3b2f73" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div>-->
    </div>
    <div class="card card3 animated bounceInUp">
      <h2 class="title">
        <a href="https://www.jianshu.com/p/1eee289337d7" target="_blank" rel="noopener noreferrer">
          数组与伪数组(jQuery初探)
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>arguments</li>
        <li>数组与伪数组对比</li>
      </ul>
      <div class="link">
        <a href="https://www.jianshu.com/p/1eee289337d7" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
    <div class="card card4 animated bounceInUp">
      <h2 class="title">
        <a href="https://www.jianshu.com/p/cc0300067462" target="_blank" rel="noopener noreferrer">
          html和css概括总结
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>html常见元素的理解</li>,
        <li>css非布局样式</li>,
        <li>css布局</li>
        <li>css动画</li>
      </ul>
      <div class="link">
        <a href="https://www.jianshu.com/p/cc0300067462" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
    <div class="card card5 animated bounceInUp">
      <h2 class="title">
        <a href="https://www.jianshu.com/p/b52861616919" target="_blank" rel="noopener noreferrer">
          了解一些常见的排序算法
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>冒泡排序</li>,
        <li>选择排序</li>,
        <li>计数排序</li>,
        <li>桶排序</li>
      </ul>
      <div class="link">
        <a href="https://www.jianshu.com/p/b52861616919" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
};
</script>
<style lang="scss" scoped>
.blog {
  color: #fff;
  // margin: 50px;
}

.card {
  padding: 20px 20px 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  position: relative;

  .title {
    cursor: pointer;
    font-size: 19px;
    margin-bottom: 5px;
    a {
      color: inherit;
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }
  article {
    color: #c1c1c1;
    font-size: 14px;
    .prev {
      h4 {
        margin: 3px 0;
      }
      ul {
        margin-left: 14px;
      }
      margin-bottom: 10px;
    }
    pre {
      font-family: "微软雅黑";
      font-size: 12px;
      font-size: 12px;
      border: 1px solid #696969;
      box-sizing: content-box;
      padding: 5px;
      margin-top: 5px;
      width: 100%;
      overflow: hidden;
    }
    h4 {
      margin: 5px 0;
    }
    ul {
      margin-left: 14px;
    }
  }
  .keyword {
    font-size: 12px;
    margin-bottom: 10px;
    color: #ada5a5;

    li {
      margin-right: 10px;
    }
  }
  .link {
    margin-top: 15px;
    a {
      color: #fff;
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .card .title {
    font-size: 16px;
  }
}
</style>


