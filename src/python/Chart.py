import turtle
import requests as request

last = 0


def get_data(accountNumber):
    params = {'accountNumber': accountNumber,
              }
    response = request.post('http://127.0.0.1:5000/accounts/GetBankAccountLogs',
                            params)

    return response.json()


def draw_chart(t, data):
    global last
    x = 1 if data['logType'] == '+' else -1
    last += x * data['amount']
    height = last
    color = '#4caf50' if data['logType'] == '+' else '#F44336'
    t.speed(0)
    t.fillcolor(color)
    t.pencolor('#2f2f2f')
    t.begin_fill()  # start filling this shape
    t.left(90)
    t.forward(height)
    t.write(str(height))
    # t.write(f'{data["date"][:10]}\n{str(height)}\n{data["date"][12:20]}')
    t.right(90)
    t.forward(20)
    t.right(90)
    t.forward(height)
    t.left(90)
    t.end_fill()


my_data = get_data(input('insert the accountNumber : '))['logs']
max_height = max([i['amount'] for i in my_data])
num_bars = len(my_data)
border = 400
window = turtle.Screen()
window.title('draw a chart')
window.setup(1500, 750)
window.setworldcoordinates(-5, 0 - border, 20 * num_bars + border, max_height + border)

window.bgcolor("#F5F5F5")

tur = turtle.Turtle()
tur.pensize(2)

for data in my_data:
    draw_chart(tur, data)
window.exitonclick()
