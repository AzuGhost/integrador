from flask import Flask, render_template
from config import config


app = Flask(__name__) 
@app.router('/')
def index():
    return render_template('auth/login.html')

if __name__ == '__main__':
    app.config.from_object(config['desarrollo'])
    app.run()