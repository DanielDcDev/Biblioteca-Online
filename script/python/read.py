from flask import Flask;

app = Flask(__name__)

@app.route('/')
def home():
    return 'Login'

@app.route('/login')
def about():
    return 'Sobre nós'

if __name__ == '__main__':
    app.run()
