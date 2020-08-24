

let itcast = {
    tap:function (dom, cb ){
        console.log("11111111111111")
        if(!dom || typeof dom != "object"){
            return ;
        }

        let startTime , startX , startY ;
        dom.addEventListener("touchstart",function (e){
            console.log("22222222222222")
            if(e.targetTouches.length > 1){
                return ;
            }
            startTime = Date.now() ;
            startX = e.targetTouches[0].clientX ;
            startY = e.targetTouches[0].clientY ;
        })

        dom.addEventListener("touchend",function (e){
            console.log("3333333333333")
            if(e.targetTouches.length > 1){
                return ;
            }
            if(Date.now()-startTime > 150){
                return ;
            }
            let endX = e.changedTouches[0].clientX ;
            let endY = e.changedTouches[0].clientY ;

            if(Math.abs(endX - startX) < 6 && Math.abs(endY - startY) < 6 ){
                cb&&cb(e);
            }


        })
    }




}