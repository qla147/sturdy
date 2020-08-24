html5API

1.  网络状态

   我们可以通过window.navigator.onLine来检测用户当前的网络状态，返回一个布尔值，但是不同浏览器会存在差异所以HTML5给我们提供了两个事件 online 和offline

   online用户网络连接时被调用

   offline用户网络断开时候被调用

   ```html
   <script>
       //使用最原始的方法检测网络
       let flag = window.navigator.onLine;
       console.log(flag);
       
       window.addEventListener("online",function (){
           $(".tip").text("网络已经链接").fadeIn(500).delay(1000).fadeOut()
       })
       window.addEventListener("offline",function (){
           $(".tip").text("网络已经断开").fadeIn(500).delay(1000).fadeOut()
       })
   </script>
   ```

   

2. 全屏

   HTML5规范容许用户自定义网页上任一元素的全屏显示

   1.  Node.requestFullScreen()开启全屏显示
   2. Node.cancelFullScreen()关闭全屏显示

   由于兼容性问题，不同浏览器需要添加不同的前缀

   webKit内核浏览器：webkitRequestFullScreen,webkitCancelFullScreen

   Gecko内核浏览器： mozRequestFullScreen,mozCancelFullScreen

    3. document.fullScreen检查当前标签是否处于全屏

       不同浏览器需要添加不同的前缀

       document.webkitIsFullScreen, document.mozFullScreen

   	4. 全屏伪类选择器

       :full-screen .box{},:-webkit-full-screen{},:moz-full-screen{}

   ```html
   
   <body>
   <div>
       <img src="img/微信图片_20200810202801.png" alt="" height="300">
       <button id="full">全屏显示</button>
       <button id="cancelFull">取消全屏显示</button>
       <button id="isFull">是否全屏</button>
   </div>
   
   </body>
   <script>
       //全屏显示可以使任意元素
       //h5 API 存在兼容性问题
       //即使高版本浏览器有兼容性问题
       let div = document.querySelector("div");
       let full = document.querySelector("#full");
       full.onclick = function (){
           if(div.requestFullscreen){
               div.requestFullscreen();
           }else if(div.webkitRequestFullScreen){
               div.webkitRequestFullScreen();
           }else if(div.mozRequestFullScreen){
               div.mozRequestFullScreen();
           }else{
               div.msRequestFullscreen();
           }
       }
   
       let cancelFull = document.querySelector("#cancelFull");
       //取消全屏跟元素没有关系
       cancelFull.onclick = function (){
           document.webkitCancelFullScreen();
       }
   
       let isFull = document.querySelector("#isFull");
       isFull.onclick= function (){
           console.log(document.webkitIsFullScreen);
       }
       
   </script>
   ```

   

3. 文件读取

   通过FileReader对象我们可以读取本地存储的文件，使用file对象来指定所要读取的文件或者数据，其中File对象可以使来自用户在一个元素上选择文件后返回的File List对象，也可以来自由拖放操作生成的DataTransfer

   

4. 地理定位

   在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即基于位置服务

   1. API详解

      1. 获取当前地理信息

          Navigator.geolocation.getCurrentPosition(successCallBack,ErrorCallBack)

      2.  重复获取当前地理信息

         Navigator.geolocation.watchPosition(successCallBack, errorCallBack)

         当成功获取地理信息以后，会调用successCallback，并返回一个包含位置信息的对象position。

         1. position.coords.latitude纬度
         2. position.coords.longitude经度
         3. position.coords.accurency精度
         4. position.coords.altitude 海拔高度

5. 拖拽

   在HTML5中，拖放是标准的一部分，任何元素都能够拖放。

   1. 拖拽 ：Drag

   2. 释放： Drop

      拖拽指的是鼠标点击源对象后一直移动不松手，一但松手就释放了

   3. 设置元素是否可以拖放

      draggable属性：就是标签元素要设置draggable=true，否则不会有效果

      注意：链接和图片默认是可以拖动的，不需要添加draggable属性

   4. 拖拽API相关事件

      被拖拽的源对象可以触发的事件

      1.  ondragstart: 源对象开始被拖动
      2. ondrag: 源对象被拖动过程中（鼠标可能移动也可能未移动）
      3. ondragend:源对象被拖动结束

      拖动源对象可以进入到上方目标对象可以触发的事件

      1. ondragenter：目标对象被源对象拖动着进入
      2. ondragover: 目标对象被源对象拖动这悬停在上方
      3. ondragleave: 源对象拖动着离开了目标对象
      4. ondrop: 源对象拖动在目标对象上方释放

6.  本地存储

    1. 特性

       1. 设置，读取方便
       2. 容量较大 sessionStorage===>5M , localStorage===>20M
       3. 只能存储字符串，可以将对象JSON.stringify()编码后存储

    2. window.sessionStrorage

       1. 生命周期为关闭浏览器窗口
       2. 在同一个窗口下数据可以共享

    3. window。localStorage

       1. 永久生效，除非手动删除（服务器方式访问然后清楚缓存）
       2. 可以多窗口（页面）页面共享

    4. 方法详解

       1. setItem(key,value)设置存储内容

       2. getItem(key)读取存储内容

       3. removeItem(key)删除键值为key的存储内容

       4. clear()清空所有存储内容

          ```html
          <body>
          <input type="text" id="username">
          <br>
          <br>
          <button id="setData">setData</button>
          <button id="getData">getData</button>
          <button id="delData">delData</button>
          </body>
          
          <script>
              let username = document.querySelector("#username");
          
              document.querySelector("#setData").onclick= function (){
                  let val = username.value ;
                  window.sessionStorage.setItem("username",val);
              }
              document.querySelector("#getData").onclick= function (){
                  let val= window.sessionStorage.getItem("username");
                  username.value = val ;
              }
          
              document.querySelector("#delData").onclick= function (){
                  let val= window.sessionStorage.removeItem("username");
                  // username.value = val ;
              }
          
          
          </script>
          ```

          

    5. 其他

       1. webSql 

       2. indexDb

          

