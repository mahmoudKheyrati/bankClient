class Preferences:
    """
    this class encode/decode your json dta with jwt algorithm
     save your encoded data in a file
     this class using jwt to encrypt your data
    """
    import os.path as path
    import os
    import jwt
    import json

    def __init__(self, file_name='pref.dll', secret='base-secret'):
        self.file_name = file_name
        self.secret = secret

    def encode(self, json_data='{}'):
        """
        encode your json data
        :return: None
        """
        # to create a folders needed and ignore file name
        direction = self.file_name.split('/')[:-1]
        if not self.path.exists('/'.join(direction)):
            self.os.makedirs('/'.join(direction))
        # check if file exist
        if self.path.isfile(path=self.file_name) and self.path.exists(path=self.file_name):
            # file exists
            jwt_encoded = self.jwt.encode(self.json.loads(json_data), self.secret,
                                          algorithm='HS256')
            with open(self.file_name, 'w') as f:
                f.write(str(jwt_encoded))
        else:
            # file not exists and create it
            with open(self.file_name, 'w') as f:
                f.write('')
            self.encode(json_data)

    def decode(self):
        """
        decode file
        :return: a dictionary contains json data
        """
        if self.path.isfile(path=self.file_name):
            # file exists

            with open(self.file_name, 'r') as f:
                plain = bytes(f.read()[2:-1], encoding='utf-8')

                jwt_encoded = self.jwt.decode(bytes(plain).decode(),
                                              self.secret,
                                              algorithm='HS256')
                return jwt_encoded

        else:
            temp = {'is_login':False}
            return self.json.dumps(temp)
