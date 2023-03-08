from pymongo import MongoClient


# myclient = MongoClient("mongodb://localhost:27017/")
# mydb = myclient["Agri_university"]
# mycol = mydb["agri_uni"]

# x = mycol.find_one()
# print(x)

# myquery = { "users.Name": "Hithesh" }
# mydoc = mycol.find(myquery)

# for y in mydoc:
#   print(y)

from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify(message="Hello, World!")

@app.route("/user", methods=["GET"])
def get_user():
    # Code to get all users
    myclient = MongoClient("mongodb://localhost:27017/")
    mydb = myclient["Agri_university"]
    mycol = mydb["agri_uni"]
    x = mycol.find()
    users_list = []
    for user in x:
        users_list.append(user['users'])
    return users_list, 201

if __name__ == '__main__':
    app.run(debug=True)
