window.onload = function (){
    if("addEventListener" in document){
        document.addEventListener("DOMContentLoaded",function (){
            FastClick.attach(document.body);
        })
    }
    let ct_left = document.querySelector(".ct_left");
    let leftHeight = ct_left.offsetHeight ;

    let ulBox = ct_left.querySelector("ul:first-of-type");
    let ulBoxHeight = ulBox.offsetHeight ;

    //静止状态下最大top值
    let  maxTop = 0;
    let minTop = leftHeight - ulBoxHeight ;
    let maxBounceTop = maxTop + 100 ;
    let minBounceTop = minTop - 100;

    let lis = ulBox.querySelectorAll("li");

    //实现滑动
    let startY =0, moveY=0 ,distanceY=0 ,currentY = 0 ;
    ulBox.addEventListener("touchstart",function (e){
        startY = e.targetTouches[0].clientY ;

    })

    ulBox.addEventListener("touchmove",function (e){
        moveY= e.targetTouches[0].clientY;
        distanceY = moveY - startY ;
        console.log(maxBounceTop,minBounceTop,currentY , distanceY)
        console.log(currentY + distanceY > maxBounceTop || currentY + distanceY < minBounceTop )
        if(currentY + distanceY > maxBounceTop , currentY + distanceY < minBounceTop  ){
            console.log("超出范围");
            return ;
        }
        ulBox.style.transition = "none"
        ulBox.style.top = (distanceY + currentY)+"px";

    })

    ulBox.addEventListener("touchend",function (e){
        if(currentY+ distanceY < minTop){
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = minTop +"px";
            currentY = minTop ;
        }else if(currentY+ distanceY > maxTop){
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = maxTop+"px"
            currentY = maxTop
        }else{
            currentY = distanceY + currentY ;
        }
    })
    for(let i = 0 ; i< lis.length ;i++){
        lis[i].index = i ;
    }
    // itcast.tap(ulBox,function (e){
    //     for(let i = 0 ; i< lis.length ;i++){
    //         lis[i].classList.remove("active");
    //     }
    //
    //     let li = e.target.parentNode ;
    //     li.classList.add("active");
    //     let liHeight = li.offsetHeight
    //
    //     let index = li.index;
    //     ulBox.style.transition = "top 0.5";
    //     // console.info(li.id)
    //     if(-index * liHeight < minTop){
    //         ulBox.style.top = minTop + "px";
    //         currentY = minTop
    //     }else{
    //         currentY = -index * liHeight ;
    //         ulBox.style.top = -index * liHeight +"px";
    //     }
    // })

    // $(ulBox).on("tap",function (e){
    //     for(let i = 0 ; i< lis.length ;i++){
    //         lis[i].classList.remove("active");
    //     }
    //
    //     let li = e.target.parentNode ;
    //     li.classList.add("active");
    //     let liHeight = li.offsetHeight
    //
    //     let index = li.index;
    //     ulBox.style.transition = "top 0.5";
    //             // console.info(li.id)
    //     if(-index * liHeight < minTop){
    //         ulBox.style.top = minTop + "px";
    //         currentY = minTop
    //     }else{
    //         currentY = -index * liHeight ;
    //         ulBox.style.top = -index * liHeight +"px";
    //     }
    // })

    ulBox.addEventListener("click",function (){
            for(let i = 0 ; i< lis.length ;i++){
                lis[i].classList.remove("active");
            }

            let li = e.target.parentNode ;
            li.classList.add("active");
            let liHeight = li.offsetHeight

            let index = li.index;
            ulBox.style.transition = "top 0.5";
                    // console.info(li.id)
            if(-index * liHeight < minTop){
                ulBox.style.top = minTop + "px";
                currentY = minTop
            }else{
                currentY = -index * liHeight ;
                ulBox.style.top = -index * liHeight +"px";
            }
    })
}