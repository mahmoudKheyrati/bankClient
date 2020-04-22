import requests as request
import src.python.Handler as handler


class ApiHandler:
    """"
    connect to the sever api and make it easy to request to the server
    """
    import json
    import os
    BASE_URL = 'http://176.9.164.222:2211/api/'
    file_path = '../data/file2.img'
    secret = 'ADdeidu72E3e7g6eg'
    preferences = handler.Preferences(file_path, secret)

    def __init__(self):
        self.token = self.preferences.decode()['token']

    def isLogin(self):
        # print('is login : ',type(self.preferences.decode()))
        return self.preferences.decode()

    def logout(self):
        if self.os.path.exists(self.file_path):
            self.os.remove(self.file_path)
        return '{}'

    def login(self, username, password):
        response = request.post(self.BASE_URL + 'Login',
                                json={'username': username, 'password': password})
        res = {'is_login': False, 'token': 'empty'}
        if response.ok:
            json = response.json()
            if 'token' in json:
                res['is_login'] = True
                res['token'] = json['token']
                self.preferences.encode(self.json.dumps(res))
            return {'is_ok': True}
        else:
            # response failed
            self.preferences.encode(self.json.dumps(res))
            return {'is_ok': False}

    def bankAccountListCreateGet(self):
        response = request.get(self.BASE_URL + 'accounts/BankAccountListCreate',
                               headers={'Authorization': "JWT " + self.token})

        # 'text' : the response is a array not an object
        return response.text

        # response failed
        # return {'error':''}

    def bankAccountListCreatePost(self, first_name, last_name, phone_number, national_code):

        params = {'accountOwner': {
            'firstName': first_name,
            'lastName': last_name,
            'phoneNumber': phone_number,
            'nationalCode': national_code,
        }}
        print(params)

        response = request.post(self.BASE_URL + 'accounts/BankAccountListCreate',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()

    def clerkSignUp(self, username, password):

        params = {'username': username,
                  'password': password}

        response = request.post(self.BASE_URL + 'accounts/User/SignUp',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()

    def getBankAccountLogs(self, accountNumber):

        params = {'accountNumber': accountNumber,}

        response = request.post(self.BASE_URL + 'accounts/GetBankAccountLogs',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()

    def addAccountToAccountOwner(self, nationalCode):

        params = {'nationalCode': nationalCode,}

        response = request.post(self.BASE_URL + 'accounts/AddAccountToAccountOwner',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )
        return response.json()

    def closeAccount(self, accountNumber):

        params = {'accountNumber': accountNumber,}

        response = request.post(self.BASE_URL + 'accounts/CloseAccount',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )
        return response.text

    def blockAccount(self, accountNumber):

        params = {'accountNumber': accountNumber,
                  }

        response = request.post(self.BASE_URL + 'accounts/BlockAccount',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )
        return response.text

    def bankAccountRetrieve(self, accountNumber):

        response = request.get(self.BASE_URL + f'accounts/BankAccountRetrieve/{accountNumber}',
                               headers={'Authorization': "JWT " + self.token},
                               )
        return response.text

    def accountOwnerRetrieve(self, nationalCode):

        response = request.get(self.BASE_URL + f'accounts/AccountOwnerRetrieve/{nationalCode}',
                               headers={'Authorization': "JWT " + self.token},
                               )
        return response.text

    def transactionGet(self, accountNumber):

        response = request.get(self.BASE_URL + f'accounts/BankAccountRetrieve/{accountNumber}',
                               headers={'Authorization': "JWT " + self.token},
                               )
        return response.json()

    def getTransactions(self):

        response = request.get(self.BASE_URL + 'transaction/TransactionListCreate',
                               headers={'Authorization': "JWT " + self.token},
                               )

        return response.text

    def getMoneyFromAccount(self, accountNumber, amount, definition):

        params = {'fromAccount': accountNumber, 'amount': amount,
                  'definition': definition,
                  'cash': True
                  }

        response = request.post(self.BASE_URL + 'transaction/TransactionListCreate',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()

    def chargeAccount(self, accountNumber, amount, definition):

        params = {'toAccount': accountNumber, 'amount': amount,
                  'definition': definition,
                  'cash': True
                  }

        response = request.post(self.BASE_URL + 'transaction/TransactionListCreate',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()

    def transferMoney(self, fromAccount, toAccount, amount, definition):

        params = {'fromAccount': fromAccount, 'toAccount': toAccount, 'amount': amount,
                  'definition': definition,
                  'cash': False
                  }

        response = request.post(self.BASE_URL + 'transaction/TransactionListCreate',
                                headers={'Authorization': "JWT " + self.token},
                                json=params
                                )

        return response.json()


# for debug ...

# "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
#     ".eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3QiLCJleHAiOjE1ODA5NzYwMDcsImVtYWlsIjoiIn0"
#     ".LqQR7WRG7qLsNlW3OQqFJES-sZPJ_p8CF_jjaHS6zkA"
# api = ApiHandler()
# api.login('test','test')
# print('salam ',
#       api.isLogin())
