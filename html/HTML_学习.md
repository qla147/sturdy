# HTML_基础知识

------



## 1.HTML

1. Hypertext Markup language 超文本标记语言

2. 他负责网页中的结构（骨架）

3. HTML使用标签的形式来表示网页中的不同组成部分

4. 所谓的超文本指的是超链接，使用超链接可以让我们从一个页面跳转到另外一个页面

   

##  2.html注释

 使用格式："\<!-- 注释内容 --\>



## 3.html标签

1. title标签===> 网页的标题标签，默认会显示在浏览器的标题栏中，搜索引擎会在检索页面的时候，会首先检索title中的内容，他是网页中对于搜索引擎来说最为重要的内容，会影响网站排名

2. head标签===> 该标签中的内容不会再网页中直接显示，用来帮助浏览器解析页面

3. html标签===> 网页的根标签，一种页面中只有一个根标签，网页中的所有内容都应该写在HTML根标签中

4. body标签===>用来设置网页中的主体内容，网页中所有课件的内容，都应该放在body标签中

   

## 4.html标签属性

1. 标签属性：可以通过标签属性来设置标签中的内容

2. 属性需要写在开始标签中，实际上就是一个键值对

3. 一种标签中可以设置多个属性（多个键值对）

   ```html
   <p color='red' font-size='14px'>
   </p>
   ```

## 5.HTML标签

1. html中的标记指的就是标签
2. HTML使用标记标签来描述网页
3. 结构： <标签名>标签内容</标签名> 
4. 结构： <标签名/>
5. 元素：一个完整的标签
6. meta：标签是用来设置网页的一些元数据，比如网页的字符集，关键字，简介等
7. meta：是一个单标签标签

## 6.html常用的标签

1.  标题标签 ： h1  ----> h6 

2. 段落标签： 段落标签用于表示内容中的一个自然段，使用p标签来表示一个段落，p标签中的文字，默认会独占一行，并且段与段之间会有一个明显的间距

3. 换行标签： 在页面中可以使用br标签来表示一个换行

4. 水平分割线标签：在页面中生成一条水平线，标签hr

5. 在HTML标签中一些 <>这种特殊字符是不能直接使用的，需要使用一些特殊的符号来表示这些特殊字符，这些特殊符号我们称为实体（转义字符）

6. 图片标签： 使用img标签引入一个外部图片，img标签也是一个自结束标签，属性： src:设置一个外部图片的路径，alt:可以用来显示图片的描述，width ：比例设置图片宽度

7. meta标签：1.可以设置网页关键字，2.可以指定网页的描述 3. 可以用来做请求重定向

   

## 7.html路径

1.  相对路径：相对于当前文件路径的路径
2. 绝对路径：绝对与物理文件存储的路径

## 8.列表标签

1. ###  无序列表：

   没有顺序的列表，是并列关系

   ```html
   <ul>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
   </ul>
   ```

   1. ul标签中只能嵌套li标签
   2. li标签相当于一个容器可以存放所有的标签

   

2. ### 有序列表

   有序列表即为有排列顺序的列表，其各个列表按照一定的顺序排列定义，有序列表的基本语法格式如下

   ```html
   <ol>
       <li>USA</li>
       <li>JAPEN</li>
       <li>CA</li>
       <li>UK</li>
   </ol>
   ```

   

3. ### 自定义列表

   自定义列表常用于对术语或者名词进行解释和描述，自定义列表的列表项没有任何符号，其语法格式如下：

   ```html
   <dl>
       <dt>名词1</dt>
       <dd>名词解释1</dd>
       <dd>名词解释2</dd>
   </dl>
   ```



## 9.表格

 表格是一种常见的标签，但不是用来布局，常见用来处理表格格式数据。

1. ###  创建表格

   创建表格的语法如下

   ```html
   <table>
       <tr>
       	<td>单元格内的文字</td>
           <td>单元格内的文字</td>
           <td>单元格内的文字</td>
       </tr>
   </table>
   ```

   上述语法中包含三对HTML标签，分别是 table标签 tr标签 td标签，他们是创建表格的基本标签，缺一不可

   1. table标签定义一个表格

   2. tr标签用于定义表格中的一行，必须嵌套在table标签中，在table标签中可以有几对tr标签，就有几行表格

   3. td用于定义表格中的单元格，必须嵌套在tr标签中，一对tr中包含几对td，就表示该行中有几个单元格

   4. tr标签中只能放td标签，td标签中可以放任何标签

      

2. ### 表格属性

   | 属性名      | 含义                                     | 常用属性值        |
   | :---------- | :--------------------------------------- | ----------------- |
   | border      | 设置表格边框                             | 像素值            |
   | cellspacing | 设置单元格与单元格边框之间的空白间隔     | 像素值 默认为2    |
   | celladding  | 设置单元格内容与单元格边框之间的空白间隔 | 像素值 默认为1    |
   | width       | 设置表格的宽度                           | 像素值            |
   | height      | 设置表格高度                             | 像素值            |
   | align       | 设置表格在网页中的水平对齐方式           | left right center |

   ```html
   <table border="1px" cellspacing="0px" cellpadding="5px" width="500px" align="center">
           <tr>
               <td>姓名</td>
               <td>性别</td>
               <td>年龄</td>
           </tr>
           <tr>
               <td>姓名</td>
               <td>性别</td>
               <td>年龄</td>
           </tr>
           <tr>
               <td>姓名</td>
               <td>性别</td>
               <td>年龄</td>
           </tr>
       </table>
   ```

3. ### 表头标签

   表头一般位于表格的第一行或者第一列，其文本加粗居中，设置表头非常简单，只需要用表头标记<th>标签替代<td>标签即可

   ```html
   <table border="1px" cellspacing="0px" cellpadding="0px" width="300px" align="center">
           <tr>
               <th>姓名</th>
               <th>性别</th>
               <th>年龄</th>
           </tr>
           <tr>
               <td>姓名</td>
               <td>性别</td>
               <td>年龄</td>
           </tr>
           <tr>
               <td>姓名</td>
               <td>性别</td>
               <td>年龄</td>
           </tr>
       </table>
   ```

4. ### 表格结构

   使用表格布局的时候，可以将表格划分为头部，主题和页脚具体如下

   1. thead：用于定义表头部分;一般用于包含网页的logo 或者导航等头部信息，必须用于table标签中；

   2. tbody：用于定义表格主体，位于table标签中，一般包含网页中除头部和底部之外的其他内容

      ```html
       <table border="1px" cellspacing="0px" cellpadding="5px" width="300px" align="center">
              <thead>
              <tr>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>姓名</td>
                      <td>性别</td>
                      <td>年龄</td>
                  </tr>
                  <tr>
                      <td>姓名</td>
                      <td>性别</td>
                      <td>年龄</td>
                  </tr>
              </tbody>
          </table>
      ```

   5. ###  表格的标题

      表格的标题 ： caption

      ​		

      ```html
      <table>
          <caption>表格的标题</caption>
      </table>
      ```

      caption标签必须紧随table之后，一个表格只能定义一个标题，通常这个标题会被居中于表格之上。

      

   6. ### 合并单元格

      1. 跨行合并 rowspan 

      2. 跨列合并：colspan

      3. 代码示例：

         ```html
         <table border="1px" cellpadding="5px" cellspacing="0px">
             <tr>
                 <td>11</td>
                 <td>12</td>
                 <td rowspan= 2>13 24</td>
                 <td>14</td>
             </tr>
             <tr>
                 <td>21</td>
                 <td>22</td>
                 <td>23</td>
             </tr>
             <tr>
                 <td>31</td>
                 <td>32</td>
                 <td>33</td>
                 <td>34</td>
             </tr>
             <tr>
                 <td>41</td>
                 <td>42</td>
                 <td colspan=2>43 44</td>
             </tr>
         </table>
         ```



## 10.html 表单

​	一个完整的表单通常是由表单控件（也称表单元素），提示信息和表单域3个部分组成

| 序号 |  部  分  | 解析                                                         |
| :--: | :------: | ------------------------------------------------------------ |
|  1   | 表单控件 | 包含了具体的表单功能项，如单行文本输入框，密码输入框，复选框，提交按钮，重置按钮等 |
|  2   | 提示信息 | 一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作 |
|  3   |  表单域  | 它相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用的程序的url以及数据的提交方式，如果不定义表单域，表单中的数据就无法传送到后台服务器 |



1. ##  input控件

   在上面的语法中，input标签为单标签，type属性为其最基本的属性，其取值有多种，用于指定不同的控件类型，除了type属性之外，input标签还有可以定期很多其他的属性，其常用属性如下：

   | 属性      | 属性值     | 描述                        |
   | --------- | ---------- | --------------------------- |
   | type      | text       | 单行文本输入框              |
   | type      | password   | 密码输入框                  |
   | type      | radio      | 单选按钮                    |
   | type      | checkbox   | 复选框                      |
   | type      | button     | 普通按钮                    |
   | type      | submit     | 提交按钮                    |
   | type      | reset      | 重置按钮                    |
   | type      | image      | 图像形式的提交按钮          |
   | type      | file       | 文件域                      |
   | name      | 用户自定义 | 控件的名称                  |
   | value     | 用户自定义 | input控件中的默认文本值     |
   | size      | 正整数     | input控件中页面中显示的宽度 |
   | checked   | checked    | 定义选择控件默认被选中的项  |
   | maxlength | 正整数     | 控件容许输入的最多字符数    |

   ```html
       <p>用户名： <input type="text" value="输入名字" maxlength="18"></p>
       <p>密&nbsp;码：<input type="password"></p>
       <p>性&nbsp;别：<input type="radio" name="sex" checked="checked">男 <input name='sex' type="radio">女 </p>
       <p>爱&nbsp;好: <input type="checkbox" name="favor"> 足球 <input name="favor" type="checkbox" checked="checked"> 篮球<input name="favor" type="checkbox"> 排球</p>
       <p>文&nbsp;件: <input type="file"> </p>
   
       <input type="button" value="搜索">
       <input type="reset" value="重置">
       <input type="submit" value="提交"><br/>
      <input type="image" src="images/im.jpg">
   ```

   

2. ### label标签

   label标签为input元素定义标注（标签）

   作用：用于绑定一个表单元素，当点击label标签时刻，被绑定的表单元素就会获取输入焦点

   用法：

   ```html
   <label for="male">Male</label>
   <input type='radio' name="sex" id="male" value="male">
   ```

3. ### textarea控件（文本域）

   如果要输入大量的信息，就需要用到文本域，文本域控件可以情动的创建多行输入框

   ```html
   <textarea cols="200" rows="40">
   </textarea>
   ```

4. ### 下拉菜单

   使用select控件定义下拉菜单的基本语法格式如下

   ```html
   <select name="select_item">
       <option selected="selected">1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
   </select>
   ```

   1. select标签中至少要包含一对option
   2. 在option中定义selected=“selected”时，该项被默认选中

5. ### 表单域

   在HTML中，form标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，form中所有的内容都会被提交给服务器，创建表单的基本语法格式如下：

   ```html
   <form action="/server/address" method="get/post" name="">
       <div>
           <label for="name"><input id="name" name="name" type="text"></label>
       </div>
           <div>
           <label for="passwd"><input id="passwd" name="passwd" type="password"></label>
       </div>
       <input type="reset" value="rest">
       <input type="submit" value="submit">
   </form>
   ```

   1.  Action 在表单收集到数据之后，点击提交的时候，数据会被传送到指定的服务器程序中，而action就是服务器提交的地址URL
   2. method用于设置表单数据的提交方式，取值为get/post
   3. name用于指定表单的名称，以区分多个表单

   

   

   ## 11.html5新增标签

   ​	1. datalist标签



