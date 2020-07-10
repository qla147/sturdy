# CSS_学习三

## 十一、浮动（float）

1. ### 普通流（normal flow）

   前面我们说过，网页布局的核心，就是用css来摆放盒子位置，如何把盒子摆放到合适的位置？

   **css的定位机制有3种：普通流（标准流），浮动和定位。**

   HTML语言中另外一个重要的概念-----标准流或者文档流。普通流实际上就是一个网页内标签元素正常从上到下，从左到右排流顺序的意思

   比如块级元素会独占一行，行内元素会按照顺序依次前后排列，按照这种大前提的布局排列之下绝对不会出现例外的情况叫做普通流布局

   

2. 什么是浮动

   元素的浮动是指设置了浮动属性的元素会自动脱离原来标准普通流的控制，移动到其父级元素中指定位置的过程。

   在css中，通过float属性来定义浮动，其基本语法格式如下

   ```css
   		div{
   			float :left/right;
   		}
   ```

   | 属性值 | 描述                 |
   | ------ | -------------------- |
   | left   | 元素向左浮动         |
   | right  | 元素向右浮动         |
   | none   | 元素不浮动（默认值） |

    

3. ### 浮动详细内幕特性

   **浮动脱离标准流，不占位置，会影响标准流，浮动只有左右浮动**

   浮动首先创建包含块的概念。就是说，浮动的元素总是找离他最近的父级元素对齐，但是不会超出内边框的范围。

## 十二、版心和布局流程

1. ###  布局流程

   为了提供网页制作的效率，布局时通常需要遵守一定的布局流程：具体如下

   1. 确定页面的版心（可视区）

   2. 分页面中的行模块，以及每个行模块中的列模块

   3. 制作HTML页面，css文件

   4. css初始化，然后开始运用盒子模型的原理，通过div+css布局控制网页的各个模块。

      **普通版心布局**

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              *{
                  padding: 0 ;
                  margin: 0 ;
              }
              .top , .banner ,.main , .footer{
                  width: 960px;
                  margin-bottom: 10px;
                  margin: 0 auto;
                  text-align: center;
              }
      
              .top {
                  height: 80px;
                  background-color: pink;
              }
      
              .banner{
      
                  height: 120px;
                  background-color: purple;
              }
      
              .main{
                  height: 500px;
                  background-color: hotpink;
              }
      
              .footer{
                  height: 120px;
                  background-color: #666;
              }
      
      
      
          </style>
      </head>
      <body>
          <div class="top">top</div>
          <div class="banner">banner</div>
          <div class="main">main</div>
          <div class="footer">footer</div>
      </body>
      </html>
      ```

      

      **两栏布局 左窄右宽布局**

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              *{
                  padding: 0;
                  margin: 0;
              }
      
              .top,.banner,.main,.footer{
                  width: 960px;
                  margin: 0 auto;
                  border: 1px solid #000;
                  text-align: center;
                  margin-bottom: 10px;
              }
      
              .top{
                  height: 80px;
              }
              .banner{
                  height: 150px;
              }
              .main{
                  height: 500px;
              }
              .footer{
                  height: 120px;
              }
      
              .left{
                  width: 356px;
                  height: 500px;
                  background-color: pink;
                  float: left;
              }
              .right{
                  width: 596px;
                  height: 500px;
                  background-color: purple;
                  float: right;
              }
      
      
          </style>
      </head>
      <body>
      <div class="top">top</div>
      <div class="banner">banner</div>
      <div class="main">
          <div class="left">left</div>
          <div class="right">right</div>
      </div>
      <div class="footer">footer</div>
      </body>
      </html>
      ```

      **通栏布局**

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              * {
                  margin: 0 ;
                  padding: 0 ;
              }
              ul{
                  list-style: none;
              }
              .top{
                  height: 90px;
                  border: 1px solid #333;
                  background-color: #ccc;
                  text-align: center;
              }
      
              .banner{
                  width: 960px;
                  border: 1px solid #333;
                  height: 150px;
                  margin: 10px auto;
              }
              .small{
                  width: 960px;
                  height: 100px;
                  margin: 10px auto ;
                  border: 1px solid #222;
                  background-color: pink;
              }
      
      
              .small ul li {
                  height: 100px;
                  float: left;
                  width: 230px;
                  background-color: #999;
              }
              .small ul li:nth-child(2){
                  margin: 0 13px;
              }
              .small ul li:last-child{
                  float:right;
              }
              .big{
                  width: 960px;
                  margin: 10px auto;
                  height: 400px;
              }
              .big ul li {
                  height: 400px;
                  float: left;
                  width: 230px;
                  background-color: #999;
              }
      
              .big ul li:nth-child(2){
                  margin: 0 13px;
              }
              .big ul li:last-child{
                  float:right;
              }
      
              .footer{
                  height: 150px;
                  border: 1px solid black;
              }
      
          </style>
      </head>
      <body>
          <div class="top"></div>
          <div class="banner"></div>
          <div class="small">
              <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
              </ul>
          </div>
          <div class="small">
              <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
              </ul>
          </div>
          <div class="big">
              <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
              </ul>
          </div>
          <div class="footer"></div>
      </body>
      </html>
      ```

      
## 十三、清除浮动

清除浮动主要是为了解决父级元素因为子级元素浮动引起的内部高度为0的问题

1. ### clear清除浮动的方法

   清除浮动本质叫做闭合浮动更好一些，记住，清除浮动就是把浮动的盒子圈在里面，让父盒子闭合出口和入口，不让他们出来影响其他元素。

   在css中，clear属性用于清除浮动，其基本语法格式

   **选择器 { clear : 属性值;}**

   | 属性值 | 描述                                       |
   | ------ | ------------------------------------------ |
   | left   | 不容许左侧有浮动元素（清除左侧浮动的影响） |
   | right  | 不容许有则有浮动元素（清除右侧浮动的影响） |
   | both   | 同时清除左右两侧浮动的影响                 |

2. ### 额外标签法清除浮动

   是W3C推荐的做法，通过在浮动元素的尾部提交一个空标签例如<div style="clear:both"></div>，或者其他标签如br标签即可

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           .box1{
           }
           .son1{
               width: 200px;
               height: 100px;
               background-color: skyblue;
               float: left;
           }
           .son2{
               width: 300px;
               height: 100px;
               background-color: hotpink;
               float: left;
           }
   
           .box2{
               width: 600px;
               height: 100px;
               background-color: purple;
           }
           .clear{
               clear: both;
           }
       </style>
   </head>
   <body>
       <div class="box1">
           <div class="son1"></div>
           <div class="son2"></div>
           <div class="clear"></div>
       </div>
       <div class="box2"></div>
   </body>
   </html>
   ```

   

3. ### 父级元素添加overflow属性方法

   可以通过触发BFC的方式，可以实现清除浮动的效果

   可以个父级元素添加 overflow：hidden|auto|scroll 都可以实现

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           .box1{
               overflow: hidden;
   
           }
           .son1{
               width: 200px;
               height: 100px;
               background-color: skyblue;
               float: left;
           }
           .son2{
               width: 300px;
               height: 100px;
               background-color: hotpink;
               float: left;
           }
   
           .box2{
               width: 600px;
               height: 100px;
               background-color: purple;
           }
    
       </style>
   </head>
   <body>
       <div class="box1">
           <div class="son1"></div>
           <div class="son2"></div>
       </div>
       <div class="box2"></div>
   </body>
   </html>
   ```

4. ### 使用after伪元素清除浮动

   :after方式为空元素的升级版；好处是不用单独加标签了

   使用方法：

   ```css
   .clearfix:after{content:"";display:block;height:0 ;clear:both;visibility:hidden;}
   .clearfix{*zoom: 1;} 
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           .clearfix:after{
               display: block;
               content: ".";
               height: 0;
               visibility: hidden;
               clear: both;
           }
           .clearfix{*zoom: 1;} 
           .son1{
               width: 200px;
               height: 100px;
               background-color: skyblue;
               float: left;
           }
           .son2{
               width: 300px;
               height: 100px;
               background-color: hotpink;
               float: left;
           }
   
           .box2{
               width: 600px;
               height: 100px;
               background-color: purple;
           }
   
       </style>
   </head>
   <body>
   <div class="box1 clearfix">
       <div class="son1"></div>
       <div class="son2"></div>
   </div>
   <div class="box2"></div>
   </body>
   </html>
   ```

5. ### 使用before和after双伪元素清除浮动

   使用方法

   ```css
   .clearfix:before,.clearfix:after{
       content:".";
       display:table;
   }
   .clearfix:after{
       clear:both;
   }
   .clearfix{
       *zoom:1 ;
   }
   ```

## 十四、定位

1. ### 元素的定位属性

   **元素的定位属性主要包括定位模式和边偏移两部分**

   1. #### 边偏移

      | 边偏移属性 | 描述                                             |
      | ---------- | ------------------------------------------------ |
      | top        | 顶端偏移量，定义元素相对于其父元素上边线的距离   |
      | bottom     | 底部偏移量，定义元素相对于其父元素下边线的距离   |
      | left       | 左侧偏移量，定义元素相对于其父元素左边线的距离。 |
      | right      | 右侧偏移量，定义元素相对于其父元素右边线的距离。 |

      也就是说，以后定位要和这边偏移搭配使用了，比如top:100px;left:100px;等等

   2. #### 定位模式

      在css中。position属性用于定义元素的定位模式

      | 值       | 描述                                               |
      | -------- | -------------------------------------------------- |
      | static   | 自动定位（默认定位模式）                           |
      | relative | 相对定位，相对于其原文档流的位置进行定位           |
      | absolute | 绝对定位，相对于其上一个已经定位的父级元素进行定位 |
      | fixe     | 固定位置，相对于浏览器窗口进行定位                 |

      

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              div{
                  width: 100px;
                  height: 100px;
                  background-color: pink;
                  top: 100px;
                  left: 100px;
                  position: absolute;
              }
      
          </style>
      </head>
      <body>
          <div>
      
          </div>
      </body>
      </html>
      ```

2. ### 静态定位（static）

   静态定位是所有源于的默认定位方式，当position属性的取值为static时，可以将元素定位于静态位置，所谓的静态位置就是各个元素在HTML文档流中的默认位置

   静态定位无法通过边偏移属性（top,bottom ,left , right ）来改变元素的位置。

   

3. ### 相对定位（relative）

   相对定位是将元素相对于他在标准流中的位置进行定位，当position属性的取值为relative时，可以将元素定位于相对位置，

   对元素设置相对定位后，可以通过边偏移属性改变元素的位置，但是他在文档流中的位置任然保留。

   1.  相对定位最重要的一点是，他可以通过边偏移移动位置。但是原来的所占的位置，继续占有。
   2. 其次，每次移动的位置，是以自己的左上角为基点移动

   也就是说，相对定位的盒子任然在标准流中，他后面的盒子仍然以标准流的方式对待它。（相对定位不脱标）

   如果说浮动的主要目的是为了让多个块级元素一行显示。那么定位的主要价值就是移动位置，让盒子到我们想要的位置上去。

   ```html 
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 100px;
               height: 100px;
               background-color: hotpink;
           }
           div:nth-child(2){
               background-color: purple;
               position: relative;
               left: 20px;
           }
       </style>
   </head>
   <body>
   <div>1</div>
   <div>2</div>
   <div>3</div>
   </body>
   </html>
   ```

   

4. ### 绝对定位（absolute）

   如果文档可以滚动，绝对定位元素会随着他滚动，因为元素最终会相对于正常流的某一部分定位。

   当position属性的取值为absolute时，可以将元素的定位模式设置为绝对定位

   注意一点：绝对定位最重要一定是，它可以通过边偏移移动位置，但是它是完全脱标完全不占有位置的。

   *如果父级元素有定位：决定定位是将元素按照依据最近的已经定位（绝对，固定或者相对定位）的父元素进行定位*

   *如果父级元素没有定位：则以浏览器为准对齐（document）*

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style >
           .father{
               width: 800px;
               height: 400px;
               background-color: pink;
               margin: 40px auto;
               position: relative;
           }
   
           .son{
               width: 100px;
               height: 40px;
               background-color: purple;
               position: absolute;
               left: 50%;
               top:50%;
               margin-top: -20px;
               margin-left: -50px;
           }
   
   
       </style>
   </head>
   <body>
   <div class="father">
       <div class="son"></div>
   </div>
   </body>
   </html>
   ```

   

 5. ### 子绝父相定位

    这句话的意思是如果子级元素使用绝对定位，父亲元素要要用相对定位

    首先，我们说下，绝对定位是将元素依据最近的已经定位，固定定位或者相对定位的父级元素进行定位，就是子级是绝对定位，父亲只要是定位即可

     ```html 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            div{
                width: 310px;
                height: 190px;
                margin: 50px auto;
                padding: 10px;
                border: 1px solid #000;
                position: relative;
            }
            .top-icon{
                position: absolute;
                top: 0;
                left: 0;
            }
            .bottom-icon{
                position: absolute;
                bottom: 0;
                right: 0;
            }
        </style>
    </head>
    <body>
        <div >
            <img src="images/top_tu.gif" class="top-icon">
            <img src="images/adv.jpg" height="190" width="310">
            <img src="images/br.gif" class="bottom-icon">
    
        </div>
    </body>
    </html>
     ```

    

 6. ###   绝对定位的盒子水平/垂直居中

    普通盒子是左右margin改为auto就可以实现，但是对于绝对定位就无效了

    定位盒子也可以水平或者垂直居中：

    1. 首先left 50%

    2. 然后走自己外边距负一半值就可以啦

       ```html
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Title</title>
           <style>
               *{
                   margin: 0 ;
                   padding: 0 ;
               }
               ul{
                   list-style: none;
               }
               .slider{
                   height: 280px;
                   width: 520px;
                   background-color: pink;
                   margin: 50px auto;
                   position: relative;
               }
       
               .arrow-l , .arrow-r{
                   position: absolute;
                   width: 24px;
                   height: 36px;
                   display: block;
                   top: 50%;
                   margin-top: -18px;
               }
       
               .arrow-r{
                   right: 0;
               }
               .circle{
                   width: 65px;
                   height: 14px;
                   position: absolute;
                   background: rgba();
                   left: 50%;
                   margin-left: -32px;
                   bottom: 15px;
                   border-radius: 6px;
               }
               .circle li {
                   width: 9px;
                   height: 9px;
                   border-radius: 50%;
                   background-color: #b7b7b7;
                   float: left;
                   margin: 2px;
       
               }
               .circle .current{
                   background-color: #ff4400;
               }
           </style>
       </head>
       <body>
           <div class="slider">
               <img src="images/taobao.jpg">
               <a href="#" class="arrow-l"><img src="images/left.png"></a>
               <a href="#" class="arrow-r"><img src="images/right.png"> </a>
               <ul class="circle">
                   <li class="current"></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
               </ul>
           </div>
       </body>
       </html>
       ```

       

 7. ###   固定定位fixed

    固定定位是绝对定位的一种特殊形式，它以浏览器窗口作为参照物来定义网页元素，当position属性的取值为fixed时，即可将元素的定位模式设置为固定定位。

    当对元素设置固定定位之后，他将脱离标准文档流的控制，始终依据浏览器窗口来定义自己的显示位置，不管浏览器滚动条如何滚动也不管浏览器窗口位置和大小的变化，该元素都会始终显示在浏览器窗口的固定位置。

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            .top{
                height: 44px;
                width: 100%;
                background: url("images/top.png") no-repeat top center;
                position: fixed;
                top: 0px;
                left: 0px;
            }
    
            .box{
                width: 1002px;
                margin: 44px auto;
            }
        </style>
    </head>
    <body>
        <div class="top"></div>
    <div class="box">
        <img src="images/box.png">
    </div>
    </body>
    </html>
    ```

8. ### 叠放次序（z-index）

   当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。

   在css中，想要调整重叠元素的堆叠顺序，可以对定位元素应用-index层叠等级属性，其取值为正整数，负整数和0；

   注意：

   1.  z-index的默认属性值是0 ，取值越大，定位元素在层叠元素中越居上。
   2. 如果取值相同，则根据书写顺序，后来居上
   3. 后面数字一定不能加单位
   4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性

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
               background-color: pink;
               position: absolute;
               top: 0;
               left: 0;
           }
   
           div:first-child{
               z-index: 1;
           }
   
           div:nth-child(2){
               background-color: purple;
               top :30px ;
               left: 30px;
           }
   
           div:last-child{
               background-color: skyblue;
               top: 60px;
               left: 60px;
           }
   
       </style>
   </head>
   <body>
   <div></div>
   <div></div>
   <div></div>
   </body>
   </html>
   ```

9. ### 四种定位的总结

   | 定位模式          | 是否脱标占有位置     | 是否可以使用边偏移 | 移动位置基准               |
   | ----------------- | -------------------- | ------------------ | -------------------------- |
   | 静态 static       | 不脱标 正常模式      | 不可               | 正常模式                   |
   | 相对定位 relative | 不脱标，占有位置     | 可以               | 相对自身位置移动           |
   | 绝对定位absolute  | 完全脱标，不占位置   | 可以               | 相对于定位父级元素移动位置 |
   | 固定定位fixed     | 完全脱标，不占有位置 | 可以               | 相对于浏览器移动位置       |

   

   

   

   



















