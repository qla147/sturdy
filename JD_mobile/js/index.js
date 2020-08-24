window.onload = function (){
    searchEffect();
    timeBack()
    bannerEffect()
}


function searchEffect(){
    //头部搜索块的JS 效果
    // 1. 获取当前banner的高度
    let banner = document.querySelector(".jd_banner");
    let bannerHeight = banner.offsetHeight;
    let jd_search = document.querySelector(".jd_search");
    window.onscroll = function(){
        // 2. 获取当前屏幕滚动时，banner滚动出屏幕的距离
        let offsetTop = window.scrollY;
        //3. 计算比例值，获取透明度，设置背景颜色的样式
        let opacity = 0;
        opacity = offsetTop/bannerHeight ;
        if(opacity<1){
            jd_search.style.backgroundColor = "rgba(233,35,34,"+opacity+")" ;
        }else{
            jd_search.style.backgroundColor = "rgba(233,35,34,1)" ;
        }

    }

}

function timeBack(){
    //1. 获取用于展示事件的span
    let spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
    //2. 设置初始化的倒计时时间
    let totalTime = 1*60*60+100 ;
    let internalId = setInterval(function (){

        totalTime--;
        if(totalTime===0){
            clearInterval(internalId);
            return ;
        }
        let hour = Math.floor(totalTime/3600);
        let minute = Math.floor(totalTime%3600/60);
        let second = totalTime%60 ;
        spans[0].innerText = Math.floor(hour/10);
        spans[1].innerText = Math.floor(hour%10);
        spans[3].innerText= Math.floor(minute/10);
        spans[4].innerText= Math.floor(minute%10);

        spans[6].innerText= Math.floor(second/10);
        spans[7].innerText= Math.floor(minute%10);
    },1000)
}




function bannerEffect(){
    // 1.设置修改轮播图的页面结构
    // 在开始位置添加原始的最后一张图片
    // 在结束位置添加原始的第一张图片

    // 获取图片容器
    let banner = document.querySelector(".jd_banner");

    let imgBox = banner.querySelector("ul:first-of-type");

    let first = imgBox.querySelector("li:first-of-type");

    let last = imgBox.querySelector("li:last-of-type");

    imgBox.appendChild(first.cloneNode(true));
    imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);
    let lis = imgBox.querySelectorAll("li");
    let count = lis.length ;
    let bannerWidth = banner.offsetWidth;
    imgBox.style.width = count*bannerWidth +"px";
    for(let i = 0 ;  i < lis.length ; i++){
        lis[i].style.width = bannerWidth +"px";
    }

    let index = 1 ;

    imgBox.style.left = -bannerWidth +"px" ;

    window.onresize = function(){
        bannerWidth = banner.offsetWidth;
        imgBox.style.width = count*bannerWidth +"px";
        for(let i = 0 ;  i < lis.length ; i++){
            lis[i].style.width = bannerWidth +"px";
        }
        imgBox.style.left = -index*bannerWidth +"px" ;
    }

    //顶标记

    function setIndector(index){
        let indectors = banner.querySelector("ul:last-of-type").querySelectorAll("li");

        for(let i = 0 ; i< indectors.length ;i++){
            indectors[index-1].classList.remove("active");
        }
        indectors[index].classList.add("active")

    }



    // 实现自动轮播
    let times ;


    setTime();


    function setTime (){
        times = setInterval(function(){
            //图片索引
            index++ ;
            //过度效果
            imgBox.style.transition = "left 0.5s ease-in-out ";
            imgBox.style.left = (-index)*bannerWidth +"px";
            setTimeout(function (){
                if(index == count-1){
                    index = 1 ;
                    imgBox.style.transition = "none";
                    imgBox.style.left =  (-index)*bannerWidth +"px";
                }
            },500)
        },1500)
    }

    //实现手动轮播
    let startX , moveX ,distanceX ;
    //标记动作是否完毕
    let isEnd = true ;
    imgBox.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX ;
        clearInterval(times);
    })

    imgBox.addEventListener("touchmove",function (e){
        if(isEnd){
            moveX = e.targetTouches[0].clientX ;
            distanceX = moveX- startX ;
            imgBox.style.transition = "none";
            imgBox.style.left = (-index*bannerWidth)+distanceX +"px"
        }

    })


    imgBox.addEventListener("touchend",function (e){
        isEnd = false ;
        if(Math.abs(distanceX) > 100 ){
            if(distanceX > 0 ){
                index--;
            }else{
                index++;
            }
            imgBox.style.transition = "left 0.5s ease-in-out ";
            imgBox.style.left = (-index)*bannerWidth + "px"
        }else if(Math.abs(distanceX) > 0  ){
            imgBox.style.transition = "left 0.5s ease-in-out ";
            imgBox.style.left = (-index)*bannerWidth + "px"
        }
        startX =moveX = distanceX = 0 ;
        setTime();
    })


    imgBox.addEventListener("webkitTransitionEnd",function (){
        if(index == count -1 ){
            index= 1 ;
            imgBox.style.transition = "none";
            imgBox.style.left = (-index)*bannerWidth + "px";
        }else  if(index == 0 ){
            index = count - 2 ;
            imgBox.style.transition = "none";
            imgBox.style.left = (-index)*bannerWidth + "px";
        }

        setIndector(index-1);

        setTimeout(function (){
            isEnd = true ;
            clearInterval(times);
            setTime();
        },500);
    })
}
