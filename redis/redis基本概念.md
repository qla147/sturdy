- # Redis基本概念

  

- 1. ## CAP概念

     C : 一致性

     A：可用性

     P: 分布式（可扩展性）

     

  2. ## BASE概念

     1. BA: 基本可用性
     2. S：软状态
     3. E ： 最终一致
     4. base就是为了解决关系型数据库强一致性引起的问题而引起的可用性降低而提出的解决方案
     5. 他的思想是通过让系统放松对某一时刻数据的一致性的要求来换取整个系统伸缩性和性能上上的改观。

  3. ## redis :REMOTE DICTIONARY SERVER

     ​	完全开源免费的，使用C语言编写的，遵循BSD协议，是一个高性能的（key/value）分布式内存型数据库，基于内存运行并支持持久化的NoSql数据库，是当前最热门的Noslq数据库之一，也被人们数据结构服务器

  4. ##   redis与其他key/value缓存产品有以下三个特点

      1. redis支持数据的持久化，redis可以将内存中的数据保存在磁盘中，重启的时候可以再次加载到内存中再次使用

      2. redis不仅仅支持简单的key/value类型的数据，同时还提供list set zset hash 等数据结构的存储

      3. redis支持数据的备份，即master-salve

         

  5. ##  redis：基础知识

     1. 单进程
     2. 默认16个数据库，类似于数组下表从0开始，初识默认使用零号库
     3. select 命令切换数据库
     4. dbsize 查看当前数据库的key的数量
     5. flushdb:清空当前库 
     6. 统一密码管理，16个库都是同样密码
     7. redis索引是从零开始

  6. ##   redis的五大数据类型

     1. 字符串==>String : string 是redis基本类型，一个key对应一个value，string类型是二进制安全的，意思是redis的string可以包含任何数据，一个redis中字符串value最多可以是512M

     2. 列表==> List ： 列表是间断的字符串列表，按照插入顺序排列，你可以添加任何一个元素到列表的头部或者尾部，他的底层其实是个链表

     3. 集合==> Set

     4. 哈希==> Hash : redis是一个键值对，hash是一个string类型的field和value的映射表

     5. 有序集合Zset==>Sorted set ：redis zset和set一样也是string类型元素的集合，且不容许重复的成员，不同的是每一个元素都会关联一个double类型的分数，redis正式通过分数来为集合中的成员按照从小到大的顺序排列，zset的成员是唯一的，但是分数不是唯一的 

        

  7. ## redis的常用key的操作

     1. keys * ===> 查看所有key
     2. exists key_name ===> 查看key_name 这个key是否存在
     3. move key db ===> 
     4. expire key second ===> 设置某个的过期时间
     5. ttl key ===>查看某个key还有多少秒过期： -1 表示永不过期 -2 表示某个key已经过期
     6. type key 查看这个key是什么类型

  8. ##  redis 常用的string操作

     1. get/set/del/append/strlen  
     2. incr/decr/incrby/decrby
     3. getrange/setrang
     4. setex(set with expire) 键秒值 / setnx (set if not exist )
     5. mset/mget/msetnx ===> ( more get  k1 v1  k2 v2  k3 v3 )
     6. getset(先get再set)

  9. ##  redis常用List操作

     1. lpush/rpush/lrange
     2. lpop/rpop 
     3. lindex 按照索引下标获得元素从上到下 通过索引获取列表中的元素
     4. llen 
     5. lrem key 删N个value  ===> 移除列表元素,移除列表中与参数 VALUE 相等的元素。 
     6. ltrim key 开始index 结束index，截取指定范围的值后再赋值给key,count ===> 0 : 从表头开始向表尾搜索，移除与 VALUE 相等的元素，数量为 COUNT 。count < 0 : 从表尾开始向表头搜索，移除与 VALUE 相等的元素，数量为 COUNT 的绝对值。count = 0 : 移除表中所有与 VALUE 相等的值。
     7. rpoppush 源列表 目的列表 ==> 转移翻转列表
     8. lset key index value 
     9. linsert before/after 

  10. ##  redis常用Set操作

      1.  sadd key 向key ，set中添加一个或者多个成员
      2. smembers key ===> 返回set中所有的成员
      3. sismember key member ===> 判断member是不是set中的成员
      4. spop key  ===> 移除并返回集合中的一个随机元素
      5. srem key member1 member2 ===> 删除集合中的一个或者多个元素
      6. sunion key key1 ===> 返回两个集合的并集
      7. scard key ===> 获取集合中的元素个数
      8. smove  key1 key2 member ===> 将 key1中的member 移动到key2 
      9.  srandmember key 【count】===>随机返回指定数量集合中的成员
      10. sinter key1 key2 ===> 返回给定所有集合中的交集
      11. sdiff key1 key2 ===> 返回给定所有集合中的差集

  11. ##  redis常用hash操作

      1.  key/value 模式不变，但是value也是一个键值对
      2. hget key key1 ===> 从hash表key中获取key1的值
      3. hset key key1 value1 ===> 设置hash表key中设置key1的值为value1
      4. hmset  key key1 value1 key2 value2 ===设置hash表key中的多个键值对
      5. hmget key key1 key2 ===> 从hash表key中
      6. hgetall key ===> get all from hash table 
      7. hdel key key1 ===>从hash表key中删除key1对应的值
      8. hexists key  key1===>key1在不在key中
      9. hlen key  ===> hash table 中的键值对数量
      10. hincrby key key1 count ===> 给key中key1对应的值加上count
      11. hincrebyfloat  key key1 count ===> 同上
      12. hkeys key ==>获取keyz中所有的key键
      13. kvals key  ===> 与上相反

  12. ##  redis常用zset操作

      1.  zadd zset  value score value1 score2  ===> 向zset中添加值
      2. zrangebyscore key 开始score 结束score ===>获取指定范围的值
      3. zcard key ===> 返回所有的集合成员
      4. zcount key  ===>返回有成员数量
      5. zincreby key  increment field  ===>给key中 field 加上increment
      6. zrank key member ===> 返回key中member 的索引
      7. zscore key member ==> 返回key 中member的score值

  13. ## redis的配置文件

       1.  配置文件的位置===> linux : 安装目录下的 redis.config

       2. 设置密码 config set requirepass "password"

       3. config get maxmemory ==>获取最大内存使用量

       4. config get maxmemory-policy 数据达到最大的时候，清理缓存策略

           1. volatile-lru ==> remove the key with an expire set use an LRU algorithm 

           2. allkeys-lru ===> remover any key  according to the LRU algorithm 

           3. volatile-random ===> remove a random key any key 

           4. volatile-ttl ===> remove the key with the nearst expire time (minor TTL )

           5. Noeviction ===> dont expire at all ,just return an error on write operations '

               

  14. ##  redis的持久化  redis Persistence 

        1. ### RDB ==> redis database

           	1. 在指定的的时间间隔内会将内存中的数据集快照写入磁盘，也就是行话讲得Snapshot快照，它恢复时候是将快照直接读入内存中 
            	2. Redis会单独创建fork 一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何IO操作的，这就确保了极高的性能，如果需要大规模的数据恢复，且对于数据恢复的完整性不是非常敏感，那么RDB方式要比AOF方式更加高效，RDB的缺点是最后一次持久化之后的数据可能丢失
            	3. fork===>fork的作用是复制一个与当前景晨狗一样的进程，新锦成的所有数据（变量，环境变量，程序计数器等）等数值都是和原进程一致，但是是一个全新的进程，并作为原进程的子进程
            	4. RDB保存的dump.rdb文件

        2. ### RDB的配置 ==>

           1.   rdb持久化的配置格式

               save <seconds> <changes> 

              seconds ===> 时间范围

              changes ===> 值变化次数

           2.  rdb持久化默认配置

              save 60 10000

              save 300 10

              save 900 1

           3.  rdb持久化的关闭 save ‘’ 

           4. snapshot设置

              1. rdbchecksum: 在存储快照之后，还可以让redis使用crc64算法来进行数据校验，但是这样做会增加10%的性能消耗，如果希望获得最大的性能提升，可以关闭此功能。

              2. rdbcompression : 对于存储到磁盘中的快照，可以设置是否可以进行压缩存储，如果是的话 ，redis会采用LZF算法进行压缩，若果你不想消耗CPU来进行压缩的话可以关闭此功能

              3. 手动触发快照备份Save: save时只管保存。其他不管，全部阻塞

              4. 手动触发快照备份bgsave: redis会在后台异步进行快照操作，快照同时还可以响应客户端的请求，可以通过lastsave命令获取最后一次成功执行快照的时间

              5. 手动触发快照备份flushall： 执行flushall命令，也会产生dump.rdb文件，但是是空的 毫无意义

              6. 手动恢复备份：将备份文件移动到redis安装目录并启动服务即可

              7. RDB备份的优势： 适合大规模数据恢复，对数据完整性和一致性要求不高

              8. RDB备份的劣势： 在一定时间间隔做一次备份，所以如果redis意外的down掉的话，就会丢失最后一次快照以后的数据，同时fork的时候，内存中的数据也会克隆一份，也要考虑数据量

                 

  15. ## AOF append only file 

       1.  AOF： 以日志的形式来记录每个写操作，将redis执行过程的所有写指令记录下来读操作不记录，只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话就根据日志文件中的内容将写指令从前到后执行一次以后完成数据的恢复工作

       2. AOF配置文件： config get appendonly 

       3. AOF开启： appendonly yes 

       4. AOF持久化策略配置： Appendfsync : alway ===> 同步持久化每次发生数据变更会被立即记录到磁盘，性能较为差，但是完整性就好  appendfsync : everysec : 出厂默认设置，每秒记录，如果一秒down机，那么一秒内的数据全部丢失； appendfsync :no  ===> 关闭

       5. No-appendfsync-on-write : 重写时是否可以运用appendfsync ，用默认no即可，保证数据的安全

          

  16. ## AOF 重写机制

       1. AOF采用文件追加方式，文件会越来越大为了避免出现此种情况，新增了重写机制，当AOF文件的大小超过所设定的阈值时，redis就会启动AOF文件的内容压缩，只保留可以恢复数据的最小指令集，可使用bgrewriteaof 
       2. 重写原理：AOF文件持续增长而过大时，会fork出一条新进程来将文件重写（也是先写临时文件最后再rename），遍历新进程的内存中数据，每条记录有一条set语句，重写aof文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写一个新的aof文件，这点和快照有点类似。
       3. 触发机制：配置文件：1. auto-aof-rewrite-percentage 100,2 auto-aof -rewrite -min-size 4GB

  17. ##   AOF持久化机制和RDB机制的对比

       1.  RDB持久化方式能够在指定的时间间隔对你的数据进行快照存储
       2. AOF持久化方式记录每次对服务器写的操作，当服务器重启的时候，会重新执行这些命令来恢复原始数据，AOF命令以redis协议追加保存每次写的操作到文件末尾。redis还能对AOF文件进行后台重写，使得AOF文件的体积不至于过大
       3. 如果只做缓存：如果你只希望你的数据在服务器运行的时候存在，你也可以不适用任何持久化方式，
       4. 同时开启两种持久化方式：在这种情况下，当redis重启的时候会优先载入AOF文件来恢复原始的数据，因为在通常情况下AOF文件保存的数据集要比RDB文件保存的数据集要完整。RDB的数据不实时，同时使用两者时服务器重启也只会找到AOF，因此RDB更适合用于备份数据库（AOF在不断的变化不好备份），快速重启，而且不会有AOF可能潜在的BUG,留着作为一个万一的手段
       5. 性能建议：因为RDB文件只用作后备用途，建议只在slave上持久化RDB文件，而且只要每15分钟就备份一次就好了，只保留save 900 1 这条规则；如果启用AOF 那么好处是在恶劣的情况下页只会丢失不超过2秒的数据，启动脚本简单只load自己的AOF文件可以了，代价一是带来了持续性的IO消耗，二是AOF rewrite的最后将rewrite过程中产生的新数据写到新文件造成阻塞几乎是不可避免的，只要硬盘许可，应该尽量减少AOF rewrite 的频率，AOF重写的基础大小值为64M太小了，可以设置到5G以上，默认超过100%大小时重写可以改到合适的数值；如果不启用AOF，仅靠master-slave replication 实现高可用也可以，能省掉一大笔IO开销，也减小了rewrite带来的系统波动，代价是如果master、slave同时down掉，会丢失十几分钟的数据，启动脚本也要比较两个master、slave中的RDB文件，载入较新的那个

  18. ##  Redis 事务

       1. 可以一次执行多个命令，本质是一组命令的集合，一个事务中的所有命令都是会序列化，按照顺序的串行化执行，而不会被其他命令插入，不许加塞
       2. 一个队列中，一次性的，顺序性，排他性的执行一系列命令

  19. ## redis事务的使用

       1. discard ：取消事务

       2. exec： 执行事务块内的命令

       3. multi：标记一个事务块的开始

       4. unwatch ：取消watch命令对所有key的监视

       5. watch key key1 key2 :如果在事务执行之前这个（或这些key）被其他命令所改动，那么事务将被打断；

          

  20. ##  redis watch监控 ： 

       1.  悲观锁：（pessimistic Lock ）顾名思义，每次去拿数据的时候，都会认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁，传统关系型数据库有部分引擎就用到了这种锁机制，比行锁，表锁，读锁，写锁等，都是在做操作之前先上锁；
       2.  乐观锁：（Optimistic Lock）顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候回判断一下在此期间有没有人去更新这个数据，可以使用版本号等机制，乐观锁适用于多读的应用类型，这样可以提高吞吐量，乐观锁策略：提交版本必须大于记录当前版本才能执行更新
       3. redis 事务的开启
          1.  multi ： 开启事务
          2. operate : 操作过程
          3. exec : 执行事务
          4. watch

       

