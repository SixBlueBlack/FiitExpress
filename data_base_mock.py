import json


def get_products():
    with open("./products.json", encoding='utf-8') as json_file:
        data = json.load(json_file)
        return data
