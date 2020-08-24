Node.js ES6箭头函数

---

1. 箭头函数

   1. 箭头函数实例

      箭头函数属于匿名函数的一种

      ```js
      let foo= ()=>{
          return "hello arrow function ";
      }
      //一个参数可以简写为：
      let goo = n => n*2 ;
      //多个参数需要加小括号
      let hoo =(a,b)=>a+b;
      //多行函数体需要对函数用大括号
      let koo= (a)=>{
          a+=10；
          a+="hello";
          return a.length;
      }
      ```

   2. 箭头函数的注意事项

      1. this问题

         箭头函数的this取决于函数的定义，箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值

         ```js
         
         function foo(){
             console.log(this);//{name:"andy"}
             setTimeout(()=>{
                 console.log(this)//{name:"andy"}
             },1000)
         }
         
         foo.call({name:"andy"});//把this 指向对象
         ```

      2. 箭头函数new问题

         箭头函数是匿名函数，不能作为构造函数，不能使用new

         ```js
         let Foo = ()=>{this.num = 123};
         new Foo();
         //使用new 调用箭头函数会报错
         ```

      3. 箭头函数不能使用传统的arguments

         ```js
         let foo= (a,b)=>{
             console.log(arguments);//这里的arguments不是a,b数组实参参数列表
         }
         //但是可以使用...扩展符号来获取参数列表
         let goo = (...param)=>{
             console.log(param)
         }
         
         ```

         

         

