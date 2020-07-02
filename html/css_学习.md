# CSS基础

------

## 一、CSS字体样式属性

1. ###  font-size 字体字号大小

   font-size属性用于设置字号，该属性的值可以使用相对长度单位，也可以使用绝对长度单位，其中长度单位比较常用，推荐使用像素单位px，绝对长度单位使用较少

   | 长度单位     | 说明                             |
   | ------------ | -------------------------------- |
   | em           | 相对于当前对象内的文本的字体尺寸 |
   | px           | 像素，最常用，推荐使用           |
   | 绝对长度单位 |                                  |
   | in           | 英寸                             |
   | cm           | 厘米                             |
   | mm           | 毫米                             |
   | pt           | 点                               |

   

2. ### font-weight字体粗细

    字体加粗除了b和strong标签之外，可以使用css来实现，但是css没有语义

   font-weight属性用于定义字体的粗细，其可用属性值：normal,bold,bolder,lighter ,100-900(100的倍数即可)；

   

3. ### font-style：字体风格

   ​	字体倾斜除了用i和em标签之外，可以使用css来实现，但是css是没有语义的

   ​	font-style属性用于定义字体风格，如设置斜体，倾斜，或正常字体，其可用属性值如下：

   1.  normal :默认值，浏览器会显示标准字体样式

   2. italic：浏览器会显示斜体的字体样式

   3. oblique：浏览器会显示倾斜的字体样式

      

4. ### font:综合设置字体样式（重点）

   font属性用于对字体样式进行综合设置，其基本语法如下

   ```css
   选择器 {
   	font: font-style font-weight font-size/line-height font-family;
   }
   ```

   使用font属性时，必须按上面的额语法格式中的顺序书写，不能更换顺序，各个属性以空格隔开。

   注意：其中不需要设置的属性可以省略，但是必须保留font-size和font-family属性，否则font属性将不会起作用；
   
   

## 二、CSS选择器

​	想要将css样式应用于特定的HTML元素，首先需要找到该目标元素，在css中，这行这一任务的样式规则部分称为选择器（选择符）

1. ### 标签选择器（元素选择器）

   标签选择器是指使用HTML标签名称作为选择器，按标签名称分类，为页面中的某一类标签指定统一的css样式，其基本语法格式如下

   ```css
   p{
       font-size: 14px;
       color:red;
   }
   
   h2{
       font-family:'宋体';
   }
   ```

   标签选择器最大的优点是能快速的为页面中的同类型的标签统一样式，同时这也是他的缺点，不能设计差异化的样式

2. ###  类选择器

   类选择器使用"."(英语点号)进行标识，后面紧跟类名，其基本语法格式如下：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style type="text/css">
           .special{
               font-size: 16px;
               color: darkred;
               font-weight: bold;
           }
       </style>
   </head>
   <body>
       <p class="special">
           类名带特别的P
       </p>
       <p>
           没有类名的P
       </p>
   </body>
   </html>
   ```

   类名选择最大的优势就是可以为元素对象定义单独或者相同的样式

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           span{
               font-size: 100px;
               font-weight: bold;
           }
           .blue{
               color: blue;
           }
           .orange {
               color: orange;
           }
           .red{
               color: red;
           }
           .green{
               color: green;
           }
   
   
       </style>
   </head>
   <body>
       <span class="blue">G</span>
       <span class="red">o</span>
       <span class="orange">o</span>
       <span class="blue">g</span>
       <span class="green">l</span>
       <span class="red">e</span>
   </body>
   </html>
   ```

   

3. ###  多类名选择器

   多类名选择器在后期布局比较复杂的情况下，还是较多使用（一个标签是可以使用多个类，其效果层叠叠加）

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           span{
               font-size: 100px;
               font-weight: bold;
           }
           .blue{
               color: blue;
           }
           .orange {
               color: orange;
           }
           .red{
               color: red;
           }
           .green{
               color: green;
           }
   
           .font-normal{
               font-weight: normal;
           }
       </style>
   </head>
   <body>
       <span class="blue">G</span>
       <span class="red font-normal">o</span>
       <span class="orange">o</span>
       <span class="blue font-normal">g</span>
       <span class="green">l</span>
       <span class="red">e</span>
   </body>
   </html>
   ```

   

4. ###  id选择器

   id选择器使用#来进行标识，后面紧跟id名，其基本语法格式如下：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style type="text/css">
           #selector{
               font-size: 16px;
               color: blue;
           }
       </style>
   </head>
   <body>
   <p>没有ID的P</p>
   <p id="selector">
       有名为selector的ID的P
   </p>
   </body>
   </html>
   ```

   该语法中id名即为HTML元素的id属性值，大多数情况HTML元素都可以定义id属性，元素的id值是唯一的，只能对应于文档中某一个具体的元素

5. ###  ID选择器和类选择器区别

   在同一个页面中，不容许有相同名字的id对象出现，但是容许相同名字的class出现

   类选择器好比人的名字，可以多次重复使用

   id选择器 好比人的身份证，是唯一的不得重复使用

6. ###  通配符选择器

   通配符选择器“*”号表示，他是指所有的选择器中作用范围最广的，能匹配页面中所有的元素，其基本语法如下：

   ```css
   * {
       padding:0px;
       margin:0px;
   }
   ```



## 三、伪类选择器

   首先，这也是一个选择器，伪类选择器用于向某些选择器添加特殊效果，比如给链接添加特殊效果，比如可以选择第1个 第n个元素。

1. ###  链接伪类选择器

   | 名称     | 含义             |
   | -------- | ---------------- |
   | :link    | 未访问的链接     |
   | :visited | 已经访问的链接   |
   | :hover   | 鼠标移动到链接上 |
   | :active  | 选定的链接       |

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
   
           a:visited{
               font-size: 16px;
               color: orange;
               font-weight: 700;
           }
           a:link{
               font-size: 14px;
               color: gray;
               font-weight: 700;
           }
           a:hover{
               color: red;
           }
           a:active{
               color: blue;
           }
       </style>
   </head>
   <body>
   <div>
       <a href="http://www.google.com">google</a>
       <a href="https://www.baidu.com">baidu</a>
   </div>
   </body>
   </html>
   ```

   

2. ### 结构（位置）伪类选择器

   | 名称               | 含义                                            |
   | ------------------ | ----------------------------------------------- |
   | :first-child       | 选取属于其父级元素的首个子元素的指定选择器      |
   | :last-child        | 选取属于其父级元素的最后一个子元素的指定选择器  |
   | :nth-child(n)      | 匹配属于其父级元素的第N个子元素，不论元素的类型 |
   | :nth-last-child(n) | 与：nth-child数的方向相反                       |

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style >
           li:first-child{
               color: pink;
           }
           li:last-child{
               color: purple;
           }
           li:nth-child(4){
               color: skyblue;
           }
           li:nth-last-child(3){
               color: green;
           }
           li:nth-child(2n){
               font-weight: bold;
               font-size: 18px;
           }
           li:nth-child(odd){
               font-size: 12px;
           }
   
       </style>
   </head>
   <body>
       <ul>
           <li>第1个孩子</li>
           <li>第2个孩子</li>
           <li>第3个孩子</li>
           <li>第4个孩子</li>
           <li>第5个孩子</li>
           <li>第6个孩子</li>
           <li>第7个孩子</li>
       </ul>
   </body>
   </html>
   ```

   

3.  

4.  

5. 





 
















