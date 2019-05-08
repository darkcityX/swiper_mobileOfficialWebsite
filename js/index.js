function INDEX() {
    var self = this;

    self.init = init;

    function initDom(){

    }
    
    function pageEvent(){
        // 页面布局swiper控制器
        let mySwiper = new Swiper('.item-container',{
            direction : 'vertical',
            pagination: {
                el: '.swiper-pagination'
            },
            on: {
                init: function(){
                    swiperAnimateCache(this); //隐藏动画元素 
                    swiperAnimate(this); //初始化完成开始动画
                },
                slideChangeTransitionStart: function(){
                    let i = this.activeIndex;   // 索引下标
                    let b;                      // 第三方变量值
                    switch (i){
                        case 0:
                        case 1:
                            b = 1;      // 首页
                            break;
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            b = 2;      // WIFI方案
                            break;
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                            b = 3;      // 产品中心
                            break;
                        default:
                            break;
                    }
                    
                    i == 1 && $('#menu').prev().animate({
                        opacity: 0
                    },1000).next().animate({
                       'top': '-4.2rem',
                       'opacity': '1'
                    },1000);

                    // 导航定位active
                    switch (b){
                        case 1:
                            $("#menu").children("li").removeClass('active').eq(0).addClass('active');
                            break;
                        case 2:
                            $("#menu").children("li").removeClass('active').eq(1).addClass('active');
                            break;
                        default:
                            $("#menu").children("li").removeClass('active').eq(2).addClass('active');
                            break;
                    }
                },
                slideChangeTransitionEnd: function(){
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    let i = this.activeIndex;   // 索引下标  
                    0 == i && $('#menu').animate({
                        top: 0,
                        opacity: 0.8
                    },1000).prev().animate({
                        opacity: 1
                    },1000);
                },
            },
        });

        // 菜单导航单击跳转
        $("#menu").children("li").each(function(i){
            $(this).on('click',function(e){
                e.preventDefault();
                switch (i){
                    case 0:
                        $('#menu').animate({
                            top: 0,
                            opacity: 0.8
                        },1000).prev().animate({
                            opacity: 1
                        },1000);
                        $(this).addClass('active').siblings().removeClass('active');
                        mySwiper.slideTo(0, 1000, false);
                        break;
                    case 1:
                        $('#menu').prev().animate({
                            opacity: 0
                        },1000).next().animate({
                        'top': '-4.2rem',
                        'opacity': '1'
                        },1000);
                        $(this).addClass('active').siblings().removeClass('active');
                        mySwiper.slideTo(2, 1000, false);
                        break;
                    case 2:
                        $('#menu').prev().animate({
                            opacity: 0
                        },1000).next().animate({
                        'top': '-4.2rem',
                        'opacity': '1'
                        },1000);
                        $(this).addClass('active').siblings().removeClass('active');
                        mySwiper.slideTo(6, 1000, false);
                        break;
                    default:
                        break;
                }
            });
        });

    }

    function initEvent(){

        // swiper页面2 banner控制器
        let myBanner = new Swiper('.banner-container',{
            loop : true,
            effect : 'cube',
            pagination: {

            },
        });
    }

    function init(){
        initDom();
        pageEvent();
        initEvent();
    }
}

$(function(){
    new INDEX().init();
});