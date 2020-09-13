# Vue vue-resource实现get post jsonp请求

1. ### JSONP的实现原理

   - 由于浏览器的安全性限制，不容许Ajax访问协议不同，域名不同，端口号不同的数据接口，浏览器认为这种访问不安全；
   - 可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式称作JSONP(JSONP仅仅支持GET请求)
   - 具体实现过程：
     + 先在客户端定义一个回调方法，预定义对数据的操作；
     + 再把这个回调方法的名称，通过URL传参的形式提交到服务器的数据接口；
     + 服务器数据接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称拼接出一个调用这个方法的字符串之后，发送给客户端去解析执行
     + 客户端拿到服务器返回的字符串之后，当作script脚本去解析执行，这样就可以拿到JSONP的数据

2. ### 注意事项

   因为vue-resource依赖于VUE因此在使用vue-resource之前需要引入vue模块

   

3. ### 实现代码

   ~~~js
    **get 请求方式**             
    this.$http.get("http://vue.studyit.io/api/getgetlunbo").then(result=>{
        console.log(result)
    })
   **jsonp 请求方式**
    this.$http.jsonp("url",{}).then(function (result){
       console.log(result);                  
    })
   **post请求方式**
    this.$http.post("url").then(function(result){
        console.log(result);       
    })
   ~~~