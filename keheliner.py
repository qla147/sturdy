import turtle
def koch(size , n ):
    if n == 0 :
        turtle.fd(size)
    else :
        for angle in [0,60,-120,60]:
            turtle.left(angle)
            koch(size/3, n-1)

if __name__ == '__main__':
    turtle.setup(800,800)
    turtle.penup()
    turtle.goto(-300,-0)
    turtle.pendown()
    turtle.pensize(2)
    level = 4

    koch(400, level)
    turtle.right(120)
    koch(400,level)
    turtle.right(120)
    koch(400,level)
    turtle.hideturtle()