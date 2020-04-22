from flask import Flask, jsonify, request, render_template
import json
from src.python.ApiHandler import ApiHandler

api = ApiHandler()
app = Flask(__name__)
@app.route('/isLogin', methods=['GET'])
def isLogin():
    if request.method == 'GET':
        return api.isLogin()


@app.route('/logout', methods=['GET'])
def logout():
    if request.method == 'GET':
        return api.logout()


@app.route('/Login', methods=['POST'])
def login():
    if request.method == 'POST':
        json = request.form
        return api.login(json['username'], json['password'])


@app.route('/accounts/BankAccountListCreate', methods=['POST', 'GET'])
def bankAccountListCreate():
    if request.method == 'POST':
        json = request.form
        return api.bankAccountListCreatePost(json['firstName'], json['lastName'],
                                             json['phoneNumber'],
                                             json['nationalCode'])
    else:
        # GET method
        return api.bankAccountListCreateGet()


@app.route('/accounts/GetBankAccountLogs', methods=['POST'])
def getBankAccountLogs():
    if request.method == 'POST':
        json = request.form
        return api.getBankAccountLogs(json['accountNumber'])


@app.route('/accounts/AddAccountToAccountOwner', methods=['POST'])
def addAccountToAccountOwner():
    if request.method == 'POST':
        json = request.form
        return api.addAccountToAccountOwner(json['nationalCode'])


@app.route('/accounts/CloseAccount', methods=['POST'])
def closeAccount():
    if request.method == 'POST':
        json = request.form
        return api.closeAccount(json['accountNumber'])


@app.route('/accounts/BlockAccount', methods=['POST'])
def blockAccount():
    if request.method == 'POST':
        json = request.form
        return api.blockAccount(json['accountNumber'])


@app.route('/accounts/BankAccountRetrieve/<accountNumber>', methods=['GET'])
def bankAccountRetrieve(accountNumber):
    if request.method == 'GET':
        return api.bankAccountRetrieve(accountNumber)


@app.route('/accounts/AccountOwnerRetrieve/<nationalCode>', methods=['GET'])
def accountOwnerRetrieve(nationalCode):
    if request.method == 'GET':
        return api.accountOwnerRetrieve(nationalCode)


@app.route('/accounts/User/SignUp', methods=['POST'])
def clerkSignUp():
    if request.method == 'POST':
        json = request.form
        return api.clerkSignUp(json['username'], json['password'])


@app.route('/transaction/getTransactions', methods=['GET'])
def getTransaction():
    if request.method == 'GET':
        return api.getTransactions()

@app.route('/transaction/chargeAccount', methods=['POST'])
def chargeAccount():
    if request.method == 'POST':
        json = request.form
        return api.chargeAccount(json['accountNumber'], json['amount'], json['definition'])


@app.route('/transaction/getMoney', methods=['POST'])
def getMoney():
    if request.method == 'POST':
        json = request.form
        return api.getMoneyFromAccount(json['accountNumber'], json['amount'], json['definition'])


@app.route('/transaction/transferMoney', methods=['POST'])
def transferMoney():
    if request.method == 'POST':
        json = request.form
        return api.transferMoney(json['fromAccount'], json['toAccount'], json['amount'],
                                       json['definition'])


@app.route('/test')
def test_page():
    # look inside `templates` and serve `flaskhtml.html`
    return render_template('flaskhtml.html')
