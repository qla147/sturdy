Node.js ES6函数相关新增

---

1. 函数默认参数

   ES6对函数方法新增了默认参数,可以传参数也可以不传，如果传参数就是用传递值，如果不传就使用默认值。

   ```js
   //默认参数
   function fn(a = 0 , b = 3){
       return a + b ;
   }
   
   fn();
   fn(2, 5)
   fn(3)
   ```

   

2. 函数参数解构赋值

   ```js
   //函数参数解构，这里设置了如果什么都不传默认设置为空对象
   function fn({username, age} = {}){
    	 console.log(username, age)  
   }
   
   fn({username:"andy", age:21});
   ```

   

3. rest参数和...扩展运算符

   扩展运算符就是把数组展开

   ```js
   //除了第一个参数，其他参数全部存放在param数组中，
   //同时注意点一点,扩展运算符...可以放在任何位置
   function foo(a, ...param){
       console.log(a, param);
   }
   
   function goo(...param,b){
       console.log(param, b );
   }
   
   foo(1,2,3,4,5)//1,[2,3,4,5]
   
   //使用扩展运算符合并数组
   let  arra= [1,2,3,4];
   let  arrb= [5,6,7,8];
   let arr = [..arra,...arrb]
   ```

   