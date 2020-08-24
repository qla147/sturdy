$(function (){
    //初始化工具提示
    $('[data-toggle="tooltip"]').tooltip()
    $(window).on("resize",function (){
        let items = $(".carousel-inner .item");
        let width = $("window").width() ;
        if(width >= 768){
            $(items).each(function (index,value){
                let item = $(this);
                let imgSrc = item.data("largeImage")
                let html = $("<a href='#' class='pcImg'></a>").css("backgroundImage","url('"+imgSrc+"')");
                item.html(html);
            })
        }else{
            $(items).each(function (index,value){
                let item = $(this);
                let imgSrc = item.data("smallImage");
                item.html("<a href='#' class='mobileImg'><img src='"+imgSrc+"'></a>")
            })
        }
    }).trigger("resize");

    let startX , endX ;
    let carousel_inner = $(".carousel-inner")[0];
    let carousel = $(".carousel");

    carousel_inner.addEventListener("touchstart",function (e){
        console.log(e);
        startX = e.targetTouches[0].clientX ;
    });

    carousel_inner.addEventListener("touchend",function (e){
        console.log(e)
        endX = e.targetTouches[0].clientX ;
        if(endX- startX > 0 ){
            carousel.carousel("prev");
        }else if(endX- startX < 0 ){
            carousel.carousel("next");
        }
    })


    // 计算导航项原始宽度
    let  ul = $(".wjs_product .nav-tabs");
    let lis = ul.find("li");
    let totalWidth = 0 ;
    lis.each(function (index, value){
        console.log( $(value).outerWidth(true));
        totalWidth= totalWidth + $(value).outerWidth(true);
    })
    ul.width(totalWidth)

    let scroll = new IScroll(".tabs_parent",{scrollX: true , scrollY: false })
})