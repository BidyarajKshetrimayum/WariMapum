from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import re

app = Flask(__name__)
CORS(app)

def is_valid_email(email):
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)

def is_existing_email(email):
    # In a real application, you would check a database or storage here
    # For this example, we'll use a simple list
    existing_emails = ["test@example.com"] #
