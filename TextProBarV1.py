# -*- coding: UTF-8 -*-
import time

scale= 100
# print("___________执行开始__________")
# for i in range(scale + 1):
#     a = "*" * i
#     b = "." * (scale - i)
#     c = (i / scale) * 100
#     print("\r{:^3.0f}% [{}->{}]".format(c, a, b),end="")
#     time.sleep(0.1)
# print("\n__________执行结束___________")

# for i in range(101):
#     print("\r{:3}%".format(i), end= "")
#     time.sleep(0.1)

print("执行开始".center(scale//2))
start = time.perf_counter()
for i in range(scale + 1):
    a = "*" * i
    b = "." * (scale - i)
    c = (i / scale) * 100
    dur = time.perf_counter() -start
    print("\r{:^3.0f}%[{}-->{}]{:.2f}s".format(c, a, b, dur), end="")
    time.sleep(0.1)
print("\n" + "执行结束".center(scale // 2))
