# swiper_mobileOfficialWebsite
swiper满屏滑动页面

## 1、引入swiper4.0.0
    满屏滚动 .swiper-container 设置高度即可满屏垂直滚动

## 2、rem 引用
    方式1： 
```css
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem; /* =16px */
    }
    /*  */
```
    方式2：
        使用js文件进行样式单位统一
```javascript
/** 字号调整 */ 
!function (window) {

    /* 设计图文档宽度 */
    var docWidth = 750;
  
    var doc = window.document,
      docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  
    var recalc = (function refreshRem () {
      var clientWidth = docEl.getBoundingClientRect().width;
  
      /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
      docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) + 'px';//20 * (clientWidth / docWidth) + 'px';//
  
      return refreshRem;
    })();
  
    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
  
    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
      /* 添加IOS标识 */
      doc.documentElement.classList.add('ios');
      /* IOS8以上给html添加hairline样式，以便特殊处理 */
      if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
        doc.documentElement.classList.add('hairline');
    }
  
    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  
  }(window);
  
```
