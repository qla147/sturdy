# CSS_学习四



## 十五、元素的显示与隐藏

在css中有三个显示和隐藏的单词比较常见，我们要区分开来，他们分别是display，visibility和overflow。

他们 主要目的是让一个元素在页面中消失，但是不在文档流源码中删除。

1. ###  display显示

   display设置或者检索对象是否及如何显示。

   display:none隐藏对象与它相反的是display:block除了转换为块级元素之外，同时还有显示元素的意思。

   特点 隐藏之后，不再保留位置。

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
           }
   
           div:first-child{
               display: none;
           }
           div:last-child{
               background-color: purple;
           }
       </style>
   </head>
   <body>
   <div></div>
   <div></div>
   </body>
   </html>
   ```

   

2. ### visibility 可见性

   设置或者检索是否显示对象。

   visible:对象可视

   hidden：对象隐藏

   特点：隐藏之后，继续保留原有位置

   ```HTML
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
           }
   
           div:first-child{
               visibility: hidden;
           }
           div:last-child{
               background-color: purple;
           }
       </style>
   </head>
   <body>
   <div></div>
   <div></div>
   </body>
   </html>
   ```

   

3. ### overflow溢出

   检索或设置当对象的内容超过其指定高度及宽度时如何管理内容

   visible: 不剪切内容也不添加滚动条

   auto：超出部分自动显示滚动条，不超出不显示滚动条

   hidden： 不显示超过对象尺寸的内容，超出的部分隐藏掉

   scroll: 不管超出内容是否，总是有滚动条

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 150px;
               height: 200px;
               border: 1px solid red;
               overflow: auto;
               /*overflow: visible;*/
               /*overflow: scroll;*/
               /*overflow: hidden;*/
           }
   
       </style>
   </head>
   <body>
       <div>
           When you fetch an individual resource, the response typically includes all attributes for that resource. This is the "detailed" representation of the resource. (Note that authorization sometimes influences the amount of detail included in the representation.)
           When you fetch an individual resource, the response typically includes all attributes for that resource. This is the "detailed" representation of the resource. (Note that authorization sometimes influences the amount of detail included in the representation.)
           When you fetch an individual resource, the response typically includes all attributes for that resource. This is the "detailed" representation of the resource. (Note that authorization sometimes influences the amount of detail included in the representation.)
       </div>
   </body>
   </html>
   ```



## 十六、CSS用户界面样式

所谓的界面样式，就是更改一些用户操作样式：比如更改用户的鼠标样式，表单轮廓灯，但是比如滚动条的样式改动受到了很多浏览器的抵制。

1. ###  鼠标样式cursor

   设置或者检索在对象上移动的鼠标指针采用何种系统预定义的光标形状

| 属性值	 | 含义           |
| ------- | ------------------ |
| default | 默认指针           |
| pointer | 小手形指针         |
| move    | 十字坐标方向指针   |
| text    | 文本输入时刻的指针 |
|         |                    |

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
        }
        div:first-child{
            cursor: default;
        }
        div:nth-child(2){
            background-color: purple;
            cursor: pointer;
        }
        div:nth-child(3){
            background-color: skyblue;
            cursor: move;
        }
        div:nth-child(4){
            background-color: orange;
            cursor: text;
        }
    </style>
</head>
<body>
<div>小白</div>
<div>小手</div>
<div>移动</div>
<div>文本</div>
</body>
</html>
```



2. ### 轮廓outline

   轮廓是绘制元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

   ```css
   div{
       outline: outline-color || outline-style || outline-width;
   }
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           input{
               border: 1px solid red;
               outline: 1px solid blue;
           }
   
       </style>
   </head>
   <body>
   <input type="text" >
   </body>
   </html>
   ```

   

3. ### 防止拖拽文本resize

   resize:none；z这个单词可以防止火狐 谷歌等浏览器随意的拖动文本域

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
   
       </style>
   </head>
   <body>
   <textarea name="" id="" cols="30" rows="10" style="resize: none; outline: none;">
       aaa
   </textarea>
   
   <br>
   <textarea name="" id="bb" cols="30" rows="10"></textarea>
   </body>
   </html>
   ```

   

4. ###  文字溢出隐藏部分

   1. #### word-break；自动换行

      normal 使用浏览器默认的换行规则

      break-all 容许在单词内换行

      keep-all 只能在半角空格或者连字符处换行

      

   2. #### white-space

      white-space设置或检索对象内文本显示方式，通常我们使用与强制一行显示内容

      normal：默认处理方式

      nowrap： 强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行

      

   3. #### text-overflow 文字溢出

      text-overflow:clip |ellipis ;设置或者检索是否使用一个省略标记（...）表示对象内的文本溢出

      clip:不显示省略标记（...），而是简单的裁切

      ellipsis：当对象内文本溢出时显示省略标记（...）

      **注意：一定要强制一行内显示，再次和text-overflow属性搭配使用**
      
      

## 十七、滑动门技术

​	为了使各种特殊形状的背景能够自适应元素中文本内容的多少。出现了css滑动门技术，它从新的角度构建页面，是各种特殊形状的背景能够自由拉伸滑动，以适应内部文本内容，可用性更强。最常见于各种导航栏的滑动门

**核心技术**

核心技术是利用了css精灵图和盒子padding撑开宽度，以便能实现适应不同字数的导航栏

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            padding: 0 ;
            margin: 0;
        }
        a{
            color: #f3f5f7;
            display: inline-block;
            height: 33px;
            background: url("images/ao.png") no-repeat;
            padding-left: 15px;
            margin: 100px;
            line-height: 33px;
        }

        a span{
            display: inline-block;
            height: 33px;
            background: url("images/ao.png") no-repeat bottom right;
            padding-right: 15px;
        }
    </style>
</head>
<body>
    <a href="#">
        <span>首页</span>
    </a>
</body>
</html>
```

**总结**

1. a设置背景左侧，padding撑开合适的宽度

2. span设置背景右侧，padding撑开合适的宽度，剩下的由文字继续撑开宽度

3. 之所以a包含span就是因为整个导航都可以点击。

   
## 十八、before和after伪元素

之所以被称为伪元素，是因为他们不是真正的页面元素，HTML没有对应的元素，但是其所有的用法和表现行为与真正的页面元素一样，可以对其使用诸如页面元素一样的css样式，表面上看上去貌似是页面的某些元素来展现。实际上是css样式展现的行为，因此被称为伪元素。是伪元素在HTML代码机构中的展现，可以看出伪元素的机构审查

**注意：**

1.  伪元素：before和after添加的内容默认是inline元素，这两个伪元素content属性，表示伪元素的内容，设置：before和after时必须设置其content属性，否则伪元素就不起作用

2. 伪元素不占位置

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 296px;
               height: 180px;
               margin: 100px auto;
               position: relative;
           }
           div:hover::before{
               content: "";
               width: 100%;
               height: 100%;
               border: 5px solid rgba(255,255,255,.4);
               position: absolute;
               top: 0;
               left: 0;
               box-sizing: border-box;
           }
   
       </style>
   </head>
   <body>
       <div>
           <img src="images/mi.jpg">
       </div>
   </body>
   </html>
   ```

## 十九、CSS3过渡效果

过渡效果（transition）是css3中具有颠覆性的特征之一，我们可以在不适用flash动画或者Javascript的情况下，当元素从一种样式变换为另一种样式时为元素添加效果

**格式：**

transition：要过渡的属性 花费时间 运动曲线 何时开始

| 属性                       | 描述                                         | css  |
| -------------------------- | -------------------------------------------- | ---- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 | css3 |
| transition-property        | 规定用于过渡的css属性名称                    | css3 |
| transition-duration        | 定义过渡效果话费的时间，默认是0              | css3 |
| transition-timing-function | 规定过渡效果的时间曲线，默认是ease           | css3 |
| transition-delay           | 规定过渡效果何时开始，默认是0                | css3 |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            height: 100px;
            width: 200px;
            background-color: pink;
            transition: width 1s ease-in-out 0s ,height 1s ease-in 0s;
        }

        div:hover{
            width: 400px;
            height: 200px;
        }

    </style>
</head>
<body>
    <div></div>
</body>
</html>
```



## 二十、Transform 变形


1. ### Translate变形

   使用translate方法将文字或者图片在水平方向上和垂直方向上分别垂直移动50px

    ```css
    translate(50px ,50px);
    ```

    ​		translate如果移动距离是%结尾的，不是以父级元素宽度为准，以自己的宽度为准，transform：translate（50%）;的意思div盒子移动自己宽度200px一半，走100px

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
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%); 
            }

        </style>
    </head>
    <body>
        <div></div>
    </body>
    </html>
    ```
   
2. ### transform-origin 可以调整元素转变变形的原点

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           img{
               margin: 100px;
               transition: all 1s;
               /*transform-origin: center center ;*/
               transform-origin: 60px 30px;
           }
           img:hover{
               transform: rotate(180deg);
           }
           
       </style>
   </head>
   <body>
   <img src="images/pk1.png" alt="">
   </body>
   </html>
   ```

   

3. transform:rotate

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           div{
               width: 250px;
               height: 170px;
               border: 1px solid pink;
               margin: 200px auto;
               position: relative;
           }
           div img{
               width: 100%;
               position: absolute;
               top: 0px;
               left: 0px;
               z-index: 0;
               transition: all 2s;
               transform-origin: top left;
           }
   
           div:hover img:first-child{
               transform: rotate(60deg);
   
           }
   
           div:hover img:nth-child(2){
               transform: rotate(120deg);
           }
           div:hover img:nth-child(3){
               transform: rotate(180deg);
           }
           div:hover img:nth-child(4){
               transform: rotate(240deg);
           }
           div:hover img:nth-child(5){
               transform: rotate(300deg);
           }
           div:hover img:nth-child(6){
               transform: rotate(360deg);
           }
   
       </style>
   </head>
   <body>
   <div>
       <img src="images/1.jpg" alt="">
       <img src="images/2.jpg" alt="">
       <img src="images/3.jpg" alt="">
       <img src="images/4.jpg" alt="">
       <img src="images/5.jpg" alt="">
       <img src="images/6.jpg" alt="">
   </div>
   </body>
   </html>
   ```

   

4. 3D变形

   1. rotateX()沿着X轴旋转
   2. rotateY()沿着Y轴旋转
   3. rotateZ()沿着Z轴旋转

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           img:first-child{
               margin: 100px;
               transition: all 1s ;
           }
           img:first-child:hover{
               transform: rotateX(180deg);
           }
   
           img:last-child{
               margin: 500px;
               transition: all 1s ;
               
           }
           img:last-child:hover{
               transform: rotateY(180deg);
           }
   
       </style>
   </head>
   <body>
   <img src="images/x.jpg" alt="">
   
   <img src="images/1498446043198.png" alt="">
   </body>
   </html>
   ```



## 二十一、伸缩布局

css3在布局方面做了非常大的改进，使得我们对块级元素的布局排列变得非常灵活，适应性非常强。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section{
            width: 80%;
            height: 200px;
            border: 1px solid black;
            display: flex;
            min-width: 400px;
            margin: 100px auto;
            max-width: 1280px;
            flex-direction: column;
        }
        section div{
            height: 100%;
        }
        div:nth-child(1){
            background-color: pink;
            flex: 1;
        }

        div:nth-child(2){
            background-color: purple;
            /*width: 200px;*/
            flex: 1;
        }
        div:nth-child(3){
            background-color: skyblue;
            flex: 1;
        }

    </style>
</head>
<body>
<section>
    <div></div>
    <div></div>
    <div></div>
</section>
</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        ul{
            list-style: none;
        }

        body{
            min-width: 320px;
            max-width: 540px;
            margin: 0 auto ;
        }
        header{
            width: 100%;
            height: 100px;
        }

        header img{
            width: 100%;
        }

        nav{
            padding: 5px;
        }
        .row{
            width: 100%;
            height: 90px;
            background-color: pink;
            border-radius: 8px;
            display: flex;
            margin-bottom: 5px;
        }

        nav .row:nth-child(2){
            background-color: #3d98ff;
        }

        nav .row:nth-child(3){
            background-color: #44c522;
        }
        nav .row:nth-child(4){
            background-color: #fc9720;
        }

        .row3{
            flex: 1;
            border-left: 1px solid white;
        }

        .row div:first-child{
            border: 0;
        }

        .hotel {
            display: flex;
            flex-direction: column;
        }

        .hotel a{
            flex: 1;
            font-size: 16px;
            text-align: center;
            line-height: 45px;
            text-decoration: none;
            text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
            color: white;
        }
        .hotel a:first-child{
            border-bottom: 1px solid white;
        }
    </style>
</head>
<body>
    <header>
        <img src="images/ctrip.jpg">
    </header>
    <nav>
        <div class="row">
            <div class="row3"></div>
            <div class="row3 hotel">
                <a href="">海外酒店</a>
                <a href="">特价酒店</a>
            </div>
            <div class="row3 hotel">
                <a href="">团购</a>
                <a href="">民宿客栈</a>
            </div>
        </div>
        <div class="row">
            <div class="row3"></div>
            <div class="row3 hotel">
                <a href="">海外酒店</a>
                <a href="">特价酒店</a>
            </div>
            <div class="row3 hotel">
                <a href="">团购</a>
                <a href="">民宿客栈</a>
            </div>
        </div>
        <div class="row">
        <div class="row3"></div>
        <div class="row3 hotel">
            <a href="">海外酒店</a>
            <a href="">特价酒店</a>
        </div>
        <div class="row3 hotel">
            <a href="">团购</a>
            <a href="">民宿客栈</a>
        </div>
    </div>
        <div class="row">
            <div class="row3 hotel">
                <a href="">海外酒店</a>
                <a href="">特价酒店</a>
            </div>
            <div class="row3 hotel">
                <a href="">海外酒店</a>
                <a href="">特价酒店</a>
            </div>
            <div class="row3 hotel">
                <a href="">团购</a>
                <a href="">民宿客栈</a>
            </div>
        </div>
    </nav>
</body>
</html>
```

