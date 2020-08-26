# Vue学习 v-clock,v-text,v-html ,v-on,v-model 简介

---

1. ## v-cloak：

   用于解决插值表达式闪烁的问题，需要配合css样式使用

   

2. ## v-text：
   

插值表达式，但是v-text没有闪烁问题，但是插值表达式可以在表达式外添加任何元素。同时v-text会覆盖元素中原本的内容，但是插值表达式，指挥替换自己的这个占位符，不会把整个元素的内容替换掉。

   

3. ## v-html：

   和v-text类表达式作用基本相同，但是v-html不是替换目标对象的文本内容，v-html是替换html文本，同时来渲染

   

4. ## v-bind ：

   用于绑定某个变量给某个值或者对象的属性指令，v-bind会把后面的绑定设置为表达式，可以参入计算。

   

5. ## v-on：

   v-on用于绑定事件到某个对象；可以绑定浏览器常见的事件。
   
   
   
6. ## v-mode ：

   v-bind 只能实现m绑定到v,而v-mode可以实现表单元素和Model中的数据双向绑定，

   注意v-model只能用于 radio,text ，address， email ,password ,select checkbox ,textarea

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/lib/vue.js"></script>
    <style>
        [v-clock]{
            display: none;
        }
    </style>
</head>
<body>
    <div id="app">
<!--        //最原始的插值表达式-->
        <p v-cloak>{{msg}}</p>
<!--        //v-text 替换h4中的文本信息-->
        <h4 v-text="msg"></h4>
<!--        //v-html 替换div中的html内容，替换的内容会自动渲染成为html-->
        <div v-html="msg1"></div>
<!--        //v-on 绑定click事件-->
        <input type="button" v-bind:title="myTitle+123"  value="button" v-on:click="show">
<!--        实现数据双向绑定-->
        <input type="text" v-model:value="msg" style="width: 100%">
    </div>
</body>
<script>
    let vm = new Vue({
        el: "#app",//表示 我们要页面那个区域
        data : {
            msg:"欢迎学习vue",
            msg1:"<h1>这一个H2</h1>",
            myTitle:"这是一个定量"
        }, //data属性， 存放着el中要使用的到的数据
        methods:{
            show:function (){
                alert("hello")
            }
        }
    });
</script>
</html>
```

6.  ## v-on相关事件修饰

   1. stop 阻止冒泡

      当绑定点击事件等，可能触发冒泡事件的情况，可以使用.stop去阻止事件冒泡向外扩散。

   2. prevent 阻止默认事件
   
      例如在a标签中，默认点击是跳转，如果绑定click事件，然后就不会默认跳转了
   
   3. capture 添加事件侦听器使用事件捕获模式

   4. self 只当事件在该元素本身（比如不是子元素）触发时触发回调，只有自身才能触发事件

   5. once 事件只触发一次

   范例：
   
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script src="js/lib/vue.js"></script>
       <style>
           .inner{
               height: 150px;
               background-color: lightslategray;
           }
       </style>
   </head>
   <body>
   <div id="app">
   <!--    //捕获事件click事件 优先触发-->
   <!--   <div class="inner" @click.capture="divHandler">-->
          <div class="inner" @click.self="divHandler">
           <!--       //阻止冒泡-->
          <input type="button" value="click me" @click.stop="btnHandler">
           <!--       2.阻止默认事件-->
          <a href=“https://www.badu.com” @click.prew="">内事问百度</a>
      </div>
   </div>
   </body>
   <script>
       let vm = new Vue({
           el:"#app",
           data:{
   
           },
           methods:{
               divHandler:function (){
                   console.log(
                       '触发了div'
                   )
               },
               btnHandler:function (){
                   console.log("btn")
               },
               linkHandler:function (){
                   console.log("link")
               }
   
           }
       })
   </script>
   </html>
   ```
   



