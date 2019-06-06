# -*- coding: UTF-8 -*-


weekstr = "星期一星期二星期三星期四星期五星期六星期日"
weekid = eval(input("请输入星期数字(1-7)"))
pos= (weekid - 1 ) * 3
print(weekstr[pos:pos+3])


weekstrs = "一二三四五六日"
weekids = eval(input("请输入星期数字(1-7)"))
poss= (weekids - 1 )
print("星期"+weekstrs[poss])
