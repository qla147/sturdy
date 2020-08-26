# Vue  过滤器

---

vue 容许自定义过滤器，可以被用作一些常见的文本格式化，过滤器可以用在两个地方：mustache赋值和v-bind表达式中，过滤器应该被添加在JavaScript表达式的尾部，由‘管道’符只是；

1. ## 私有过滤器：

   1. ### html元素：

      ~~~html
      <td>{{item.ctime | dataFormat('yyyy-mm-dd')}}</td>
      ~~~

      

   2. ### 私有filter定义方式：

      ~~~js
      filter:{
      	//私有局部过滤器，只能在当前VM对象所控制的view区域进行使用
      	dataFormat(input, pattern =''){
              let dt = new Date(input);
              let y = dt.getFullYear();
              let m = (dt.getMonth() + 1).toString().padStart(2,'0');
              let d = dt.getDate().toString().padStart(2,'0');
                if( pattern.toLowerCase() === 'yyyy-mm-dd'){
                  return  `${y}-${m}-${d}`;
              }else{
                  let hh = dt.getHours() ;
                  let mm = dt.getMinutes() ;
                  let ss = dt.getSeconds() ;
                  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
              }
             
      	}
      }
      ~~~

      ~~~html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="x-ua-compatible">
          <title>Title</title>
          <script src="js/lib/vue.js"></script>
          <link rel="stylesheet" href="js/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css">
          <script src="js/lib/jquery-3.5.1.min.js"></script>
          <script src="js/lib/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
      
      </head>
      <body>
      <div id="app">
          <div class="panel panel-primary">
              <div class="panel-heading">
                  <h3 class="panel-title">
                      添加
                  </h3>
              </div>
              <div class="panel-body form-inline">
                  <label >
                      ID:
                      <input type="text" name="id" class="form-control" v-model="id">
                  </label>
                  <label>
                      Name:
                      <input type="text" name="name" class="form-control" v-model="name">
                  </label>
                  <input type="button" class="btn btn-primary" value="   add  " @click="add">
                  <label >
                      搜索名称关键字:
                      <input type="text" class="form-control" v-model="keywords" id="search">
                  </label>
              </div>
          </div>
          <table class="table table-bordered table-hover table-striped">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Ctime</th>
                      <th>Operation</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in search(keywords)" :key="item.id">
                      <td>{{item.id}}</td>
                      <td v-text="item.name"></td>
                      <td >{{item.ctime | dateFormat()}}</td>
                      <td>
                          <a href="" @click.prevent="del(item.id)">delete</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div id="app1">
          <h3>
              {{ dt | dateFormat() }}
          </h3>
      </div>
      </body>
      <script>
          //过滤器定义语法
          //vm.filter
          //全局过滤器
          Vue.filter("dateFormat",function(dateStr, pattern =''){
              let dt = new Date(dateStr);
              let y = dt.getFullYear();
              let m = (dt.getMonth() + 1).toString().padStart(2,'0');
              let d = dt.getDate().toString().padStart(2,'0');
      
              if( pattern.toLowerCase() === 'yyyy-mm-dd'){
                  return  `${y}-${m}-${d}`;
              }else{
                  let hh = dt.getHours() ;
                  let mm = dt.getMinutes() ;
                  let ss = dt.getSeconds() ;
                  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
              }
          })
      
          let vm1 = new Vue({
              el:'#app1',
              data:{
                  dt : new Date()
              },
              method :{
      
              },
              filter:{
                  //私有过滤器
                  //在选择过滤器时候,如果私有过滤器和全局过滤器名称一致,那么采用就近原则
                  dateFormat:function (dateStr , pattern =''){
                      let dt = new Date(dateStr);
                      let y = dt.getFullYear();
                      let m = (dt.getMonth() + 1).toString().padStart(2,'0');
                      let d = dt.getDate().toString().padStart(2,'0');
      
                      if( pattern.toLowerCase() === 'yyyy-mm-dd'){
                          return  `${y}-${m}-${d}`;
                      }else{
                          let hh = dt.getHours() ;
                          let mm = dt.getMinutes() ;
                          let ss = dt.getSeconds() ;
                          return `${y}-${m}-${d} ${hh}:${mm}:${ss}----`;
                      }
                  }
              }
          })
      
          let vm = new Vue({
              el:"#app",
              data:{
                  id:null,
                  name:null,
                  keywords:'',
                  list:[
                      {id:1,name:"benz",ctime:new Date()},
                      {id:2,name:"BMW",ctime:new Date()},
                      {id:3,name:"honda",ctime:new Date()},
                  ]
              },
              methods:{
                  add:function (){
                      if(this.id && this.name){
                          this.list.push({
                              id: this.id ,
                              name : this.name ,
                              ctime:new Date(),
                          });
                          console.log(this.list)
                          this.name = null ;
                          this.id = null ;
                      }
      
                  },
                  del:function (id){
                      this.list.forEach((v ,i )=>{
                          if(v.id == id ){
                              this.list.splice(i , 1);
                              return true
                          }
                      })
                  },
                  search:function (keyword = ""){
                  //     let result = [] ;
                  //     this.list.forEach(item=>{
                  //         if(item.name.indexOf(keyword) !== -1){
                  //             result.push(item);
                  //         }
                  //     })
                  //     console.log(keyword , result)
                  //     return result
                      this.list.filter(item=>{
                          console.log(item.name.includes(keyword));
                          if(item.name.includes(keyword)){
                              return item;
                          }
                      })
      
                      return this.list;
      
                  }
              }
          })
      </script>
      </html>
      ~~~

      