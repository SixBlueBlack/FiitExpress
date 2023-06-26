import smtplib
import os
import mimetypes
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
import json
from db.data_base import select_products_by_id



def send_email(user, usersDb, productsDp):
    password = "sduffvgrlhxwqhqa"
    recipient = "fiitexpress0@gmail.com"

    sender = "fiitexpress0@gmail.com"
    users = json.loads(user)['data']

    for data in users:
        user_id = productsDp.get_by_id(int(json.loads(data)['productInfo']['id']))
        product = usersDb.get_by_login(user_id['created_by'])
        mail_user = product.mail

        msgBuyer = MIMEText(f"Вы купили {user_id['title']}, ожидайте письма от {mail_user} ")
        msgSalesman= MIMEText(f"У вас купили {user_id['title']}, свяжитесь с {json.loads(user)['mail']} ")
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        try:
            server.login(sender, password)

            msgSalesman["From"] = recipient
            msgSalesman["To"] = mail_user
            msgSalesman["SUBJECT"] = "Спасибо за покупку!"
            server.sendmail(sender, mail_user, msgSalesman.as_string())

            msgBuyer["From"] = recipient
            msgBuyer["To"] = json.loads(user)['mail']
            msgBuyer["SUBJECT"] = "Спасибо за покупку!"
            server.sendmail(sender, json.loads(user)['mail'], msgBuyer.as_string())

        except Exception as _ex:
            return f"{_ex} Check login or password!"
