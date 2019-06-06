# -*- coding: UTF-8 -*-
from snownlp import SnowNLP
import wordcloud 
import jieba
# from PIL import Image
# import numpy as np 
from imageio import imread

# from scipy.imageio.imread
# from matplotlib.pyplot import imread
address="关于实施乡村振兴战略的意见.txt"
# address ="threekingdoms.txt"
print(address)
txt = open(address ,"r",encoding="utf-8").read()

s= SnowNLP(txt)
word = s.words
print(word)
masks= imread("time.jpg")
print(masks)
# im =Image.open("time.png")
# a=np.asarray(im)
# im= Image.fromarray(a)
w= wordcloud.WordCloud(font_path="simhei.ttf",mask=masks)

w.generate(" ".join(word))
w.to_file("333.png")


# counts ={}
# for word in words :
#     if len(word) == 1:
#         continue
#     # elif word =="诸葛亮" or word == "孔明曰" :
#     #     rword="孔明"
#     # elif word =="关公" or word == "云长" :
#     #     rword ="关羽"
#     # elif word =="玄德" or word =="玄德曰" :
#     #     rword ="刘备"
#     # elif word =="孟德" or word == "丞相":
#     #     rword ="曹操"
#     else:
#         rword = word 
    
#     counts[rword] = counts.get(rword,0)+1



# # for word in excludes :
# #     del counts[word]
# #     print("delete" + word)

# items= list(counts.items())
# items.sort(key=lambda x:x[1], reverse=True)

# for i in range(20):
#     word,count = items[i]
#     print("{0:<10}{1:>5}".format(word, count))

