# -*- coding: UTF-8 -*-

def getText(txt_address):
    txt = open(txt_address,"r").read()
    txt = txt.lower()
    for ch in '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~':
        txt = txt.replace(ch , " ")
    return txt 

txt_address_hamlet ="hamlet.txt"

hamlet_txt = getText(txt_address_hamlet)
words = hamlet_txt.split()
counts= {}
for word in words:
    counts[word] = counts.get(word,0 )+1

items= list(counts.items())
# print(items)

items.sort(key=lambda x:x[1], reverse=True)

for i in range(10):
    word ,count =items[i]
    print("{0:<10}{1:>5}".format(word,count))


