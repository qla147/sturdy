# CSS_学习二

------

## 八、CSS背景

css可以添加背景颜色和背景图片，以及来进行图片设置。

| 属性                  | 含义                                                       |
| --------------------- | ---------------------------------------------------------- |
| background-color      | 背景颜色                                                   |
| background-image      | 背景图片地址和设置                                         |
| background-repeat     | 是否平铺                                                   |
| background-position   | 背景位置                                                   |
| background-attachment | 背景固定还是浮动                                           |
| background            | backgroud:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置 |
|                       |                                                            |

1. ### 背景图片（image）

   语法：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           .liu{
               width: 400px;
               height: 400px;
               background-color: pink;
               background-image: url(images/l.jpg);
               background-repeat: no-repeat;
               background-position: 10px center;
               background-attachment: scroll;
           }
   
           .de{
               width: 500px;
               height: 600px;
               background: skyblue url("images/l.jpg") no-repeat fixed 50px 0px ;
           }
   
       </style>
   </head>
   <body>
       <div class="liu"></div>
       <div class="de"></div>
   </body>
   </html>
   ```

## 九、CSS三大特性

层叠 继承 优先级是CSS三大特性

1. ###  css层叠性

   所谓层叠性是指多种css样式的叠加

   比如先给某个标签指定内部文字指定为红色，接着又指定了该颜色为懒散，此时出现了相同的样式不同的值，就这是样式冲突

   **一般情况下，如果出现样式冲突，则会按照css书写的顺序，以最后的样式为准。**

2. ### css继承性

   所谓继承性是指书写css样式的时候，子标签会自动继承父标签的某些样式，如文本颜色和字号，想要设置一个可继承的属性，只需要将它应用于父元素即可。

   恰当使用继承可以简化代码，降低css样式的复杂性，但是如果在网页中所有的元素都大量继承样式，那么判断样式的来源就会很困难，所以对于字体和文本属性等网页中的通用样式可以使用继承。

   并不是所有的css属性都可以继承，例如下面的属性级不具有继承性，边框，外边距， 内边距，背景，定位，元素高属性。

3. ### css优先级

   定义css样式时，经常出现两个或更多规则应用在同一元素上，这时就会出现优先级的问题。

   在考虑权重时，初学者还需要注意一些特殊的情况，

   继承样式的权重为0 ，即在嵌套结构中，不管父元素样式权重多大，被子元素继承时，他的权重都是0，也就是说子元素定义的样式会覆盖来继承样式。

   行内样式优先，应用style属性元素，其行内样式的权重非常高，可以理解为远大于100，总之，它拥有比上面提高的选择都大的优先级。

   权重相同时，css遵循就近原则，也就是靠近元素的样式具有最大优先级，或者说排在最后的样式优先级最大；

   css定义了一个！important命令，该命令被赋予最大的优先级，也就是说不管权重如何以及样式位置的远近，！important都具有最大的优先级

## 十、盒子模型

css就三大模块，盒子模型，浮动和定位，其余的都是细节。

所谓的盒子模型就是把HTML页面中的元素看做一个矩形的盒子，也就是一个盛装内容的容器，每个矩形都由元素的内容，内边距，边框和外边距组成

1. ### 盒子边框（border）

   语法格式：

   ```css
   border: border-width| border-style| border-color
   ```

   边框属性---border-style

   边框样式用于定义页面中边框的风格，常用属性值如下：

   | 属性值 | 含义                                   |
   | ------ | -------------------------------------- |
   | none   | 没有边框即忽略所有的边框宽度（默认值） |
   | solid  | 边框为单实线（最为常用）               |
   | dashed | 边框为虚线                             |
   | dotted | 边框为点线                             |
   | double | 边框为双实线                           |

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 200px;
               height: 200px;
               border-style: double;
               border-width: 1px;
               border-color: black;
           }
   
       </style>
   </head>
   <body>
       <div></div>
       <hr>
       <section></section>
   </body>
   </html>
   ```

   

2. ### 盒子边框写法总结表

   | 设置内容     | 样式属性                                                     | 常用属性值                                |
   | ------------ | ------------------------------------------------------------ | ----------------------------------------- |
   | 上边框       | border-top-style，border-top-width,border-top-color,border-top |                                           |
   | 下边框       | border-bottom-style,border-bottom-width,border-bottom-color,border-bottom |                                           |
   | 左边框       | border-left-style，border-left-width，border-left-color，border-left; |                                           |
   | 右边框       | border-right-style，border-right-width，border-right-color， border-right |                                           |
   | 样式综合设置 | border-style ：top [right bottom  left ]，如果只有一个值即所有 | 默认none ,solid ,dotted , double , dashed |
   | 宽度综合     | border-width：top[right bottom  left ] 如果只有一个值即所有  | 像素值                                    |
   | 颜色综合设置 | border-color: top [right bottom left] 如果只有值即所有       | 颜色值 #十六进制 rbg, rgba                |
   | 边控综合设置 | border：width style color；                                  |                                           |
   |              |                                                              |                                           |

3. ### 表格的细线边框

   以前学过HTML表格边框很粗，这里只需要css一句话就可以美观起来，让我们真的相信，css就是我们的白马王子

   border-collapse：collapse;表示边框合并在一起

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           table {
               width: 700px;
               height: 300px;
               border:1px solid black;
               border-collapse:collapse ;
           }
           td {
               border: 1px solid red ;
               border-collapse:collapse ;
           }
   
       </style>
   </head>
   <body>
       <table>
           <tr>
               <td>123</td>
               <td>123</td>
               <td>123</td>
               <td>123</td>
           </tr>
           <tr>
               <td>123</td>
               <td>123</td>
               <td>123</td>
               <td>123</td>
           </tr>
           <tr>
               <td>123</td>
               <td>123</td>
               <td>123</td>
               <td>123</td>
           </tr>
           <tr>
               <td>123</td>
               <td>123</td>
               <td>123</td>
               <td>123</td>
           </tr>
   
       </table>
   </body>
   </html>
   ```

4. ### 圆角边框（CSS3）

   语法格式：

   ```css
   border-radius: 左上角 右上角 右下角 左下角;
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 200px;
               height: 200px;
               border: 1px solid black;
           }
           div:first-child{
               border-radius: 20px;
           }
           div:nth-child(2){
               border-radius: 50%;
           }
           div:nth-child(3){
               border-radius: 10px 40px;
           }
           div:nth-child(4){
               border-radius: 10px 40px 80px;
           }
           div:nth-child(5){
               border-radius: 10px 40px 80px  100px;
           }
       </style>
   </head>
   <body>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
   </body>
   </html>
   ```

5. ### 内边距

   padding属性用于设置内边距，是指边框与内容之间的距离。

   padding-top：上内边距；

   padding-right：右边距边距；

   padding-left：左内边距；

   padding-bottom：下内边距；

   注意后面跟几个数值 表示的意义不一样：

   | 数值个数 | 表达的意思                                                   |
   | -------- | ------------------------------------------------------------ |
   | 1个值    | padding；上下左右边距；比如paddding:3px;表示上下左右内边距均是3px |
   | 2个值    | padding：上下内边距 左右内边距；比如padding:3px 5px;表示上下内边距为3px 左右内边距为5px |
   | 3个值    | padding：上内边距 左右内边距 下内边距；比如 padding：3px 4px 5px ;表示上内边距为3px ,左右内边距为4px，下内边距为5px |
   | 4个值    | padding：上内边距，右内边距，下内边距 左内边距；比如padding：3px 4px 5px 6px;表示上内边距3px右内边距为4px 下内边距为5px 左内边距； |

   

6. ### 外边距（margin）

   margin属性用于设置外边距。设置外边距会在元素之间创建“空白”，这段空白通常不能放置其他内容。

   margin-top:上外边距；

   margin-bottom：下外边距；

   margin-left：左外边距；

   margin-right：右外边距；

   margin：边距 | 上外边距 | 右外边距 |下外边距|左外边距；

   取值顺序跟内边距相同；

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 200px;
               height: 200px;
               background-color: skyblue;
               margin: 30px auto;
           }
   
       </style>
   </head>
   <body>
       <div></div>
   </body>
   </html>
   ```

   

7. ### 外边距实现盒子居中对齐

   可以让一个盒子实现水平居中，需要满足下列两个条件：

    1. 必须是块级元素

    2. 盒子必须指定了宽度（width）

    3. 然后就可以给左右外边距设置为auto，就可以使块级元素水平居中

       

8. ### 清除元素的默认内外边距

   为了更加方便的控制网页中的元素，制作网页时，可以使用如下代码清除元素的默认内外边距；

   ```css
   *{
   	padding : 0 ;
       margin:0 ;
   }
   ```

9. ### 外边距合并

   使用margin定义块级元素的垂直外边距时，可能会出现外边距合并。

   **相邻块元素垂直外边距的合并**

   当上下相邻的两个块级元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top。则他们之间的垂直间距是不是margin-bottom与margin-top之和，而是两者之中较大者，这种现象被称为相邻块级元素垂直外边距的合并（也称外边距塌陷）；

   **嵌套块级元素垂直外边距的合并**

   对于两个嵌套关系的块级元素，如果父元素没有上内边距及边框，则父元素的上边距会与子元素的上外边距发生合并。合并后的外边距为两者中较大者，即使父级元素上外边距为0，也会发生合并；

10. ###  content宽度和高度

    使用宽度属性width和高度属性height可以对盒子的大小进行控制

    width和height的属性值可以为不同单位的数据值或相对于父级元素的百分比%，实际工作中最为常用的是像素值。

    大多数浏览器，都采用W3C规范，符合css规范的盒子模型的总宽度和总高度的计算原则是：

    ```
    //外盒子尺寸计算（元素控件尺寸）
    Element空间高度= content height + padding + margin ;
    Element空间宽度 = content width + padding + margin ；
    //内盒子尺寸计算（元素大小）
    Element Height = content height + padding + border ;(height 为内容高度)
    Element Width = content width + padding + border ;(width为内容宽度)
    ```

    主语：

    1.  宽度属性width和高度属性height仅适用于块级元素，对行内元素无效（img标签和input除外）。

    2. 计算盒子模型的总高度时，还应该考虑上下两个盒子的垂直外边边距塌陷问题

    3.  **如果一个盒子没有给定宽度/高度或者继承父亲的高度/宽度，则padding不会影响本盒子大小**

       ```html
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Title</title>
           <style>
       
               * {
                   margin: 0 ;
                   padding: 0;
               }
       
               ul{
                   list-style: none;
               }
               .searchPic{
                   width: 238px;
                   height: 294px;
                   border: 1px solid #d9e0ee;
                   margin: 100px;
                   border-top: 3px solid #ff8400;
               }
               .searchPic h3{
                   height: 35px;
                   line-height: 35px;
                   background-color: pink;
                   border-bottom: 1px solid #d9e0ee;
                   font-size: 16px;
                   font-weight: normal;
                   padding-left: 12px;
               }
               .searchPic img{
                   margin: 7px 0 0 8px;
               }
       
       
               .searchPic ul li a{
                   font-size: 12px;
                   color: #666;
                   text-decoration: none;
               }
       
               .searchPic ul {
                   margin-left: 8px;
               }
               .searchPic li{
                   padding-left: 10px;
                   line-height: 26px;
                   height: 26px;
                   background: url("images/square.png") no-repeat left center ;
               }
       
               .searchPic ul li  a:hover{
                   text-decoration: underline;
                   color: #ff8400;
               }
       
           </style>
       </head>
       <body>
           <div class="searchPic">
               <h3 >搜索趣图</h3>
               <img src="images/happy.gif">
               <ul>
                   <li><a href="#">GIF:小胖子游泳被卡，被救后一脸懵逼</a></li>
                   <li><a href="#">GIF:小胖子游泳被卡，被救后一脸懵逼</a></li>
                   <li><a href="#">GIF:小胖子游泳被卡，被救后一脸懵逼</a></li>
               </ul>
           </div>
       </body>
       </html>
       ```

       

11. ###  盒子模型布局稳定性

    开始学习盒子模型，同学们最大的困惑就是，分不清内外边距的使用，什么情况下使用内边距，什么情况下使用外边距；大部分情况下是可以混用的，也就是说，你用内边距也可以，外边距也可以，那个方便使用那个，

    但是建议如下

    优先使用 宽度（width） 其次使用内边距（padding） 再次外边距 margin

    原因：

    1.  margin 会有外边距合并的问题，还有就是IE6的情况下margin加倍的bug，所以最后使用

    2. padding会影响盒子的大小，需要进行加减计算

    3. width 他好像没有什么问题

       

12. ### CSS3盒模型

    css3中可以通过box-sizing来指定盒子模型，即可指定为content-box，border-box，这样我们计算盒子大小的方式就发生了变化。可以分为两种模式：

    1. box-sizing：content-box 盒子大小为width+padding+border ；content-box：此值为默认值，其让元素维持W3C的标准box mode 

    2. box-sizing：border-box 盒子大小为width；就是padding和border是包含到width里面去的

       注意： 上面的标注的width指的是css属性里设置的width：length，content的是会自动调整。

13. 盒子阴影

    语法格式：

    ```css
    box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色 内外阴影；
    ```

    | 值       | 描述                               |
    | -------- | ---------------------------------- |
    | h-shadow | 必须的。水平阴影的位置。容许负值。 |
    | v-shadow | 必须的。垂直阴影的位置，容许负值。 |
    | blur     | 可选。模糊距离。                   |
    | spread   | 可选。阴影的尺寸。                 |
    | color    | 可选。阴影的颜色。                 |
    | inset    | 可选。将外部阴影改为内部阴影。     |

    1. 前两个属性是必须写的，其余可以省略。
    2. 外阴影（outset）但是不能写 默认，想内阴影 inset 。

