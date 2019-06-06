# -*- coding: UTF-8 -*-

fo= open("output.txt","w+")

ls=["中国","法国","美国","德国","日本","俄罗斯"]

fo.writelines(ls)

fo.seek(0)

for line in fo :
    print(line+"\n")

fo.close()