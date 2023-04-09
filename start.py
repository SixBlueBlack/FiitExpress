from flask import Flask, render_template, request
import data_base_mock
import json

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/get_products')
def get_products():
    try:
        required_count = int(request.headers.get("products_count"))
    except:
        required_count = 1

    return data_base_mock.get_products()


# @app.route('/get_products')
# def get_products():
#     try:
#         required_count = int(request.headers.get("products_count"))
#     except:
#         required_count = 1
#     count = 0
#     answer = {}
#     for product in data_base_mock.get_products():
#         answer[count] = product.__dict__
#         count += 1
#         if count == required_count:
#             break
#     return json.dumps(answer)


if __name__ == '__main__':
    app.run()
