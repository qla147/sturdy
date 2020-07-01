import os
libs = ["numpy","matplotlib","pillow","sklearn","requests" ,"jieba","beautifulsoup4","wheel","networkx","sympy","pyinstaller","django","flask","werobot","pyqt5","pandas","pyopengl","pypdf2","decopt","pygame"]


try :
	for i in libs :
		os.system("pip install "+ i)
		print("install "+ i +"finished !")
except :
	print("install  defeated !")
