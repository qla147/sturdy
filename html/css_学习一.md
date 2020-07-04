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


## 四、CSS外观属性

1. ###  color:文本颜色

   color属性用于定义文本的颜色，其取值范围有如下三种：

   | 序号 | 颜色形式     | 范围                              |
   | ---- | ------------ | --------------------------------- |
   | 1    | 预定义颜色值 | 如 red  blue green gray           |
   | 2    | 十六进制     | 如 #ffffff ------#000000          |
   | 3    | rgb代码      | rgb(255,255,255) or rgb(0%,0%,0%) |

2. ### line-height行间距

   line-height属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距，一般称为行高，line-height常用的属性值单位有三种，分别为像素值px，和相对值em和百分比%,实际工作中主要使用像素值px.

   

3. ###  text-align水平对齐方式

   text-align属性用于设置文本内容的水平对齐，相当于html中的align对齐属性，其可用属性值如下

   left：左对齐

   right：右对齐

   center：居中对齐

   

4. ###  text-indent 首行缩进

   text-indent属性用于设置首行文本的缩进，其属性值可以为不同单位的数值，例如em字符宽度，或者相对于浏览器窗口宽度的百分比%，容许使用负值，建议是用em作为单位

   

5. ### letter-spacing字间距

   letter-spacing属性用于定义字间距，所谓的字间距就是字符与字符之间的空白，其属性值可为不同的单位的数值，容许使用负值，默认为normal

   

6. ###  word-break自动换行（主要指英文）

   normal：使用浏览器默认的换行规则。

   break-all 容许在单词内换行

   keep-all：只能在半角空格或者连字符处换行

   

7. ###  颜色半透明（CSS3）

   颜色半透明css3我们可以了解到半透明的格式的语法格式如下

   ```
   color:rgba(r,g,b,a) a是alpha 透明的意思
   ```

   

8. ###  文字阴影（CSS3）

   以后我们可以给我们的文字使用text-shadow添加阴影效果

   | 值       | 描述                           |
   | -------- | ------------------------------ |
   | h-shadow | 必须。水平阴影的位置，容许负值 |
   | v-shadow | 必须。垂直阴影的位置，容许负值 |
   | blur     | 可选。模糊的距离               |
   | color    | 可选。阴影的颜色               |

   

## 五、引入CSS样式表

1. ###  行内样式（内联样式）

   是通过标签的style属性来设置元素的样式，其基本语法格式如下：

   ```html
   <p style="height:200px;width:300px;color:red;"></p>
   ```

   语法中style标签的属性，实际上任何HTML标签都拥有style属性，用来设置行内式，其中属性和值书写规范与css样式规则相同，行内式只是针对其所在的标签及其内嵌标签起作用。

   

2. ### 内部样式表

   内部式是将css代码集中写在HTML文档的head头部标签中，并且用style标签定义，其基本语法格式如下：

   ```HTML
   <head>
       <style>
           p{
               font-size:14px;
               color:red;
           }
       </style>
   </head>
   ```

   语法中，style标签一般位于head标签中的title标签之后，也可以放在HTML文档中的任何地方。

   

3. ### 外部样式表

   外部样式表是将所有的样式放在一个或者多个以css为扩展名的外部样式表文件中，通过link标签外部样式表文件链接到HTML文档中，其基本语法格式如下

   ```html
   <head>
       <link href='css文件的路径' type='text/css' rel="stylesheet">
   </head>
   ```

   注意link是单标签，该语法中link标签需要放在head标签之中，并且需要指定三个属性，具体如下：href属性 （定义所链接外部样式表文件的地址URL），type属性 （定义所链接的外部文档的类型），rel属性 （定义当前文档以被链接文档之间的关系）

## 六、标签显示模式

 HTML标签一般分为块标级标签和行内标签两种

1. ###  块级元素

   每个块级元素通常都会独占一整行或多整行，可以对其设置宽度、高度，对其等属性

   常见的块级元素有h1----h6 , p,div,ul,ol其中div标签是最典型的块级元素

   块级元素特点：

   1. 总是从新行开始
   2. 高度和行高外边距，内边距都是可以控制
   3. 宽度默认是100%
   4. 可以其他任何元素

   

2. ### 行内标签

   行内元素，不占有独立的区域，仅仅依靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽高对齐等属性，常用于控制页面中文本样式

   常见的行内元素有 a,strong,b,em,i,del,s,ins,u,span

   行内元素特点：

   1. 和相邻行内元素在一行上
   2. 高宽无效，，但是水平方向上padding和margin可以设置
   3. 默认宽度就是他本身内容的宽度
   4. 行内元素只能容纳文本或其他行内元素

3. ###  行内块元素

   在行内元素中有几个特殊的标签 img ,input, td 可以对他们设置高度和对齐属性，有些资料可能回称他们为行内块元素

   行内块元素的特点：

   1. 和相邻的行内元素（行内块元素）在一行上，但是他们之间有空白间隙
   2. 默认宽度就是他们本身内容的宽度
   3. 高度，行高，外边距以及内边距都可以控制

   

4. ### 标签显示模式的转换 display

   1. 块转行内： display:inline;
   2. 行内转块： display:block;
   3. 块级元素和行内元素转行内块元素： display:inline-block;

## 七、CSS复合选择器 

复合选择器是由两个或者多个基础选择器，通过不同的方式组合而成的，目的是为了可以选择更加精准精细的目标

1. ###  交集选择器

   交集选择器是由两个选择器构成的，其中第一个为标签选择器第二个为class选择器，两个选择器之间不能有空格

   ```html
   <style>
       h3{
           color:red;
       }
       h3.special{
           font-size:25px;
       }
      
   </style>
   
   <body>
       <h3 class="special">
           special
       </h3>
       <h3>
           normal
       </h3>
   </body>
   ```

2. ### 并集选择器

   并集选择器（css选择器分组）是各个选择器通过逗号链接而成的，任何形式的选择器（包括标签选择器，类选择器 ，id选择器等），都可以作为并集选择器的一部分，如果某些选择器定义的样式完全相同，就可以利用并集选择器为它们定义相同的css样式

   ```html
   <style>
       h3,p,div{
           color:red;
       }
   </style>
   
   <body>
       <p> p元素    </p>
       <div>div元素    </div>
       <h3> h3元素    </h3>
   </body>
   ```

   

3. ###  后代选择器

   后代选择器又称为包含选择器，用来选择元素或者元素组的后代，其写法就是把外层标签写在前面，内层标签写在后面，中间用空格分隔起来，当标签发生嵌套时，内层标签就成为外层标签的后代。

   ```html
   <style>
       div p{
           color:red;
       }
       div div{
           color:blue;
       }
   </style>
   <body>
       <div>
           <p>
               内层P
           </p>
           <div>
               内层div
           </div>
       </div>
   </body>
   ```

   

4. ### 子元素选择器

   子元素选择器只能选择作为某元素子元素的元素，其写法就是把父级标签写在前面，子级标签写在后面，中间跟一个>进行连接，注意，符号左右两侧各保留一个空格。

   ```html
   <style>
       .fater>.son>p{
           color:red;
       }
   </style>
   <body>
       <div class="fater">
           <div class="son">
               <p>儿子的儿子</p>
           </div>
       </div>
      
   </body>
   ```

5. ### 属性选择器

   | 选择器        | 示例 | 含义                              |
   | ------------- | ---- | --------------------------------- |
   | E[arrt]       |      | 存在attr属性即可                  |
   | E[attr=val]   |      | 属性值完全等于val                 |
   | E[attr*=val ] |      | 属性值里包含val字符并且在任意位置 |
   | E[attr^=val]  |      | 属性值里包含val字符并且在开始位置 |
   | E[attr$=val]  |      | 属性值里包含val字符并且在结束位置 |

   

6. ###  伪元素选择器高级版（CSS3）

   1. E::first-letter文本的第一个单词或自

   2. E::first-line 文本第一行

   3. E::selection可改变选中文本的样式

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              p::first-letter{
                  font-size: 24px;
                  color: seagreen;
              }
              p::first-line{
                  color: skyblue;
              }
              p::selection{
                  color: yellow;
              }
      
          </style>
      </head>
      <body>
      <h1>freestyle</h1>
      <p>英语词汇，一般指即兴的、随性的随意的发挥，例如HIPHOP说唱中的freestyle就是即兴说唱的意思。2017年6月，因吴亦凡屡次提起而火遍网络。
          吴亦凡爆红的freestyle，其实是嘻哈选手的基本功，也是《中国有嘻哈》节目中的一个环节名称。
          发展经过编辑
          从吴亦凡口里说出来，freestyle就变得很魔性了，因为他见人都会问一句，你有freestyle吗？两个选手难以选择，还是这句，“你们有freestyle吗”？</p>
      </body>
      </html>
      ```

   4. E::after & E::before

      在E元素内部的开始位置和结束位置创建一个元素，该元素为行内元素，且必须结合content属性使用。

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <style>
              div::before{
                  content: "之前";
              }
      
              div::after{
                  content:"之后"
              }
      
          </style>
      </head>
      <body>
          <div>今年</div>
      </body>
      </html>
      ```

      


