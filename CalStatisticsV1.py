# -*- coding: UTF-8 -*-

def getNum():
    nums= []
    iNumber = input("请输入数字（回车退出）")
    while iNumber !="":
        nums.append(eval(iNumber))
        iNumber= input("请输入数字（回车退出）")
    return nums


def mean (numbers):
    s =0.0 
    for num in numbers:
        s += num
    return s/len(numbers)


def dev (numbers, mean):
    sdev= 0.0
    for num in numbers :
        sdev += (len(numbers)-mean)**2
    return pow(sdev /(len(numbers)-1),0.5)

def median(numbers):
    sorted(numbers)
    size = len(numbers)
    if size % 2 ==0 :
        med = (numbers[size//2 -1] + numbers[size//2 +1]) /2 
    else:
        med = numbers[size//2]
    return med 


n = getNum()
m = mean(n)
print("平均值：{} ,f方差：{:.2f} ,中位数 ：{}.".format(m,dev(n,m),median(n)))