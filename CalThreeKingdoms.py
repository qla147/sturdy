# -*- coding: UTF-8 -*-

import jieba 

txt = open("threekingdoms.txt","r",encoding="utf-8").read()

words = jieba.lcut(txt)
excludes ={"曹兵","回报","只得","分付","一齐","分解","一声","粮草","追赶","下文","心中","不得","大怒","以为","可以","大惊","进兵","接应","之后","一军","引军","起兵","军中","成都","不见","未知","大败","大事","正是","喊声","徐州","忽然","因此","原来","令人","江东","赶来","原来","下马","百姓","先生","不如","先锋","然后","何故","将军","却说","荆州","二人","不可","不能","如此","商议","引兵","如何","左右","次日","天下" ,"军士","军马","大喜","今日","东吴","于是","不敢","魏兵","一人","人马","不知","汉中","只见","众将","都督","主公","陛下","蜀兵","上马","大叫","太守","此人","夫人","先主","后人","背后","后主","城中","天子","一面","何不","大军","忽报"}
counts ={}
for word in words :
    if len(word) == 1:
        continue
    elif word =="诸葛亮" or word == "孔明曰" :
        rword="孔明"
    elif word =="关公" or word == "云长" :
        rword ="关羽"
    elif word =="玄德" or word =="玄德曰" :
        rword ="刘备"
    elif word =="孟德" or word == "丞相":
        rword ="曹操"
    else:
        rword = word 
    
    counts[rword] = counts.get(rword,0)+1



for word in excludes :
    del counts[word]
    print("delete" + word)

items= list(counts.items())
items.sort(key=lambda x:x[1], reverse=True)

for i in range(20):
    word,count = items[i]
    print("{0:<10}{1:>5}".format(word, count))
