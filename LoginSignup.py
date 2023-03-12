from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt

app = Flask(__name__)

# Set up a database to store user information
users = []

# Create an API endpoint for user sign up
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    password = generate_password_hash(data['password'])

    # Check if username is already taken
    for user in users:
        if user['username'] == username:
            return jsonify({'message': 'Username already taken'})

    # Add user to database
    users.append({'username': username, 'password': password})
    return jsonify({'message': 'User created successfully'})

# Create an API endpoint for user login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Check if user exists in database
    for user in users:
        if user['username'] == username:
            # Check if password is correct
            if check_password_hash(user['password'], password):
                # Generate access token
                token = jwt.encode({'username': username}, 'secret_key', algorithm='HS256')
                return jsonify({'message': 'Login successful', 'token': token})

    return jsonify({'message': 'Invalid username or password'})

if __name__ == '__main__':
    app.run()
