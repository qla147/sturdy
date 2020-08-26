# Vue 中如何使用样式

---

1. ## 使用class样式

   1. 数组

      ```html
      <h1 :class="['red','thin']">
          这是一个邪恶的H1
      </h1>
      ```

   2. 数组中使用三元表达式

      ```html
      <h1 :class="['red','thin',isactive?'active':'']">
              这是一个邪恶的H1
      </h1>	
      ```

   3. 数组中嵌套对象

      ~~~html
      <h1 :class="['red','thin',{'active':isactive}]">
        这是一个邪恶的H1
      </h1>
      ~~~

   4. 直接使用对象

      ~~~html
      <h1 :class="{'red':true,italic:true,active:true,thin:true}">
           这是一个邪恶的H1
      </h1>
      ~~~

      ~~~html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <script src="js/lib/vue.js"></script>
          <style>
              .red{
                  color: red;
              }
              .thin{
                  font-weight: 200;
              }
              .italic{
                  font-style: italic;
              }
              .active{
                    letter-spacing: 0.5em;
              }
          </style>
      </head>
      <body>
      <div id="app">
          <h1 :class="['red','italic',flag?'active':'']">这是一个恨到的 H1</h1>
          <h1 :class="['red','italic',{'active':flag}]">这是一个恨到的 H1</h1>
          <h1 :class="['red','italic',{'active':flag}]">这是一个恨到的 H1</h1>
      </div>
      </body>
      <script>
          let vm = new Vue({
              el:"#app",
              data:{
                  flag:true
              }
          })
      </script>
      </html>
      ~~~

      

2. ## 使用内联样式

   1. 直接在元素上通过 :style的形式，书写样式对象

      ```html
      <h1 :style="{'color':'red','font-size':'40px'}">
          这是一个有思想的H1
      </h1>	
      ```

      

   2. 将样式对象，定义到data中，并直接引用到 :style中

      . 在data上定义样式：

      ~~~html
      data:{
      	data:{
      		h1StyleObj:{
      			color:"red",
      			'font-size':'40px',
      			'font-weight':'200'
      		}
      	}
      }
      ~~~

      . 在元素中通过属性形式，将样式对象应用到元素

      ~~~html
      <h1 :style='h1StyleObj'>
         这是一个有思想的H1
      </h1>
      ~~~

      

   3. 在:style中通过数组，引用多个data上的样式对象

      . 在data上定义样式

      ~~~json
      data:{
          h1StyleObj1:{
              color:"red",
              'font-size':"40px",
              'font-weight':"200"
          },
          h1StyleObj2:{
              'fontStyle':'italic'
          }
      }
      ~~~

      . 在元素中，通过属性绑定的形式，将样式对象应用到元素中：

      ```html
      <h1 :style="[h1StyleObj1,h1StyleObj2]">
          这是一个有思想的H1
      </h1>	
      ```

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
          <h1 :style="{'color':'red','font-size':'40px'}">这是一个恨到的 H1</h1>
          <h1 :style="h1StyleObj1">这是一个恨到的 H11111</h1>
          <h1 :style="[h1StyleObj1,h1StyleObj2]">这是一个恨到的 H11111</h1>
      </div>
      </body>
      <script>
          let vm = new Vue({
              el:"#app",
              data:{
                  h1StyleObj1:{
                      color:"blue",
                      'font-size':'25px',
                      'font-weight':200
                  },
                  h1StyleObj2:{
                      fontStyle:'italic'
                  }
              },
              methods:{
              }
          })
      </script>
      </html>
      ~~~

      

