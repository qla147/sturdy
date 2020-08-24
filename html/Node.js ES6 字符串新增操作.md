Node.js ES6 字符串新增操作

---



1. includes（）

   判断字符串中是否包含指定子串，返回值为true or false

2. startWith() 

   判断某个字符串是否以指定子串开始，返回值为true or false

3. endWith()

   判断摸个字符串是否以指定子串结束，返回值为true or false

4. 模板字符串看代码吧 

   1. 可以使用对象
   2. 可以使用数组
   3. 可以使用常量
   4. 可以使用函数

   ```js
   let obj = {
       a:1,
       b:"male",
       c:234
   }
   
   function sum(num){
       return 123;
   }
   
   let str_template = "<div><span>${obj.a}</span><span>${obj.b}</span><span>${obj.c}</span><span>${sum(123)}</span></div>"
   
   console.log(str_template);
   ```

   

   

   

   

   