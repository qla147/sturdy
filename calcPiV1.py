# -*- coding: UTF-8 -*-
from random import random
from time import perf_counter
DARTS = 10000 * 1000
hits = 0.0
start = perf_counter()
for i in range(1, DARTS+1):
    x, y = random(), random()
    dis = pow(x**2 + y**2, 0.5)
    if dis <=1.0:
       hits+=1

print("概率计算PI {}".format(hits/DARTS*4))


pi = 0
N = 1000

for k in range(N):
    pi += 1 / pow(16, k) * (4 / (8 * k + 1) - 2 / (8 * k + 4) - 1 / (8 * k + 5) - 1 / (8 * k + 6))
    # print(pi)

print("圆周率值是：{}".format(pi))