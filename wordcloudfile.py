# -*- coding: UTF-8 -*-
import wordcloud 
# from scipy.misc import imread
import jieba



txt= open("threekingdoms.txt","r",encoding="utf-8").read()

# txt = "程序设计语言是计算机能够理解和\
# 识别用户操作意图的一种交互体系，它按照\
# 特定规则组织计算机指令，使计算机能够自\
# 动进行各种运算处理。"



# mk = imread("pic.png")
w = wordcloud.WordCloud(width=1000,height=700,max_words=50,background_color="white",font_path="simhei.ttf")
words = " ".join(jieba.lcut(txt))

w.generate(words)


w.to_file("ok.png")