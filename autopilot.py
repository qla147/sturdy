# -*- coding: UTF-8 -*-

import turtle as t

t.title("AutoPilot")
t.setup(800,600,0,0)
t.pencolor("red")
t.pensize(5)
#数据读取部分
detail = [] 

f = open("data.txt")

for line in  f :
     line = line.replace("\n","")
     detail.append(list(map(eval,line.split(","))))

for i in range(len(detail)):
    t.pencolor(detail[i][3],detail[i][4],detail[i][5])
    t.fd(detail[i][0])
    if detail[i][1]:
        t.right(detail[i][2])
    else :
        t.left(detail[i][2])

