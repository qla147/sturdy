# Vue v-for和key属性，v-if和v-show

---

1. ## v-for

   1. ### 迭代数组

      ~~~html
      <ul>
          <li v-for:"{item,i} in list" >索引：{{i} ----姓名：{{item.name}}----年龄：{{item.age}}</li>
      </ul>	
      ~~~

      

   2. ### 迭代对象中的属性

      ~~~html
      //循环遍历对象上的属性
      <div v-for="(val,key i ) in userInfo">{{val}} ----{{key}}----{{i}}</div>
      ~~~

      

   3. ### 迭代数字

      ~~~html
      <p v-for="i in 10 ">
          这是第{{i}}个P标签
      </p>
      ~~~

      

      ~~~html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <script src="js/lib/vue.js"></script>
          <style>
      
          </style>
      </head>
      <body>
      <div id="app">
      <!--    数组-->
          <p v-for="item in list">
              {{item}}
          </p>
      <!--    //数组-->
          <p v-for="(value,key) in list1">
              key:{{key}}-----value{{value}}
          </p>
      <!--    数组对象-->
          <p v-for="(value,key) in list1">
              key:{{key}}-----value{{value.size}}
          </p>
      <!--    遍历对象-->
          <p v-for="(value,key,index) in obj">
              key:{{key}}-----value : {{value}} ----索引: {{index}}
          </p>
      <!--    数字遍历-->
          <p v-for="count in 10">
              这是第number :{{count}}
          </p>
      </div>
      </body>
      <script>
          let vm = new Vue({
              el:"#app",
              data:{
                  list:[1,2,3,4,5,6,7,8,9],
                  list1:[
                      {'size':1},
                      {size:"13"},
                      {size:"24"},
                  ],
                  obj:{'color':"red",'size':"14",'name':'andy'}
              },
              methods:{
              }
          })
      </script>
      </html>
      ~~~

2. ## v-if 和v-show 用于条件渲染

   ### v-if和v-show之间的差别：

   1. v-if 条件为true的时候，回渲染出该标签，为false时不会渲染该标签，该标签在为false的时候压根就不存在，因此每次切换true or false 都是需要重新渲染，因此消耗比较多，
   2.  v-show 不论时在条件怎么变化 都会有该标签存在，只是为false时候显示为display:none，为true的时候才显示，使用v-show渲染的标签，一开始就是存在，因此转换true or false 的时候 ，只是改变其display，因此开销比较小

   

   ~~~html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script src="js/lib/vue.js"></script>
   </head>
   <body>
   <div id="app">
       <input type="button" value="change" @click="flag= !flag">
       <h3 v-if="flag">这是用V-if控制的元素</h3>
       <h3 v-show="flag">这是用V-show控制的元素</h3>
   </div>
   </body>
   <script>
       let vm = new Vue({
           el:"#app",
           data:{
   
              flag:true,
   
           },
           methods:{
           }
       })
   </script>
   </html>
   ~~~

   

   

   

   

