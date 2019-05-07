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
                slideChangeTransitionStart: function(){
                    let i = this.activeIndex;   // 索引下标
                    console.log( i );
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
                    // console.log( b == 1 );
                    i == 1 && $('#menu').prev().animate({
                        'opactiy': '0'
                    },200).next().animate({
                        'top': '-4.2rem',
                        'opacity': '1'
                    },1000).css({'background':'rgba(255,255,255,1)'});

                    // 导航定位active
                    // b == 1 && function(){
                    //     $("#menu").children("li").removeClass('active').eq(0).addClass('active');
                    // }();
                    // b == 2 && function(){
                    //     $("#menu").children("li").removeClass('active').eq(1).addClass('active');
                    // }();
                    // b == 3 && function(){
                    //     $("#menu").children("li").removeClass('active').eq(2).addClass('active');
                    // }();
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
                    let i = this.activeIndex;   // 索引下标
                    console.log("触发 end");
                    0 == i && $('#menu').css({'background':'rgba(255,255,255,0.8)'}).animate({
                        'top': '0',
                        'opacity': '0.8'
                    },1000).prev().animate({
                        'opactiy': '1'
                    },200);
                    //.css({'top':'0','background':'rgba(255,255,255,0.8)'});
                },
            },
        });
    }

    function initEvent(){
        // swiper页面2 banner控制器
        let myBanner = new Swiper('.banner-container',{
            loop : true,
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