// eslint-disable-next-line no-unused-vars
import router from "../router";

const axios = require('axios').default;


var request = require('request');


export default {
    data() {
        return {
            items: null,
            log_items: null,
            account_details: null,
            current_credit: 'در حال بارگذاری ...',
            blockNumber: '',
            closeNumber: '',
            nationalNumber: '',
            accountNumber: '',
            new_account_dialog: false,
            add_account_to_account_owner_dialog: false,
            signup_clerk_dialog: false,
            logger_dialog: false,
            accounts_dialog: false,
            accounts_log_dialog: false,
            accounts_detail_dialog: false,
            block_dialog: false,
            close_dialog: false,
            account_number_search_dialog: false,
            national_search_dialog: false,
            account_logs_dialog: false,
            logger: '',

            accounts: {
                newAccounts: {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    nationalCode: '',

                },
                addAccounts: {
                    nationalCode: ''
                },
                signUpClerk: {
                    userName: '',
                    password: '',
                    rePassword: ''
                }
            },
            transaction: {}
        }
    },
    methods: {
        loadAccounts: function () {
            // eslint-disable-next-line no-unused-vars
            var vinst = this;

            vinst.accounts_dialog = true
            axios.get('http://127.0.0.1:5000/accounts/BankAccountListCreate')
                // eslint-disable-next-line no-unused-vars
                .then(function (response) {

                    // eslint-disable-next-line no-console
                    console.log(response.data);

                    for (var i = 0; i < response.data.length; i++) {

                        for (var j = 0; j < response.data[i]['accountOwner']['accounts'].length; j++) {

                            var tempState = response.data[i]['accountOwner']['accounts'][j]['status']

                            var state = '';
                            if (tempState === 'O') {
                                state = 'باز'

                            } else if (tempState === 'C') {
                                state = 'بسته'

                            } else if (tempState === 'B') {
                                state = 'مسدود شده'

                            }
                        response.data[i]['accountOwner']['accounts'][j]['status'] = state
                        }


                    }

                    vinst.items = response.data


                })
                .catch(function (error) {
                    // handle error
                    // eslint-disable-next-line no-console
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        nationalSearch: function (nationalCode) {

            request.get('http://127.0.0.1:5000/accounts/AccountOwnerRetrieve/' + nationalCode, function (err, res, body) {
                const json = JSON.parse(body)
                // eslint-disable-next-line no-console
                console.log(json)

                var text = 'حساب \n'
                text += 'نام : ' + json.firstName + '\n'
                text += 'نام خانوادگی : ' + json.lastName + '\n'
                text += 'کد ملی : ' + json.nationalCode + '\n'
                text += 'تلفن همراه : ' + json.phoneNumber + '\n'
                text += 'حساب ها : ' + '\n'

                for (var i = 0; i < json.accounts.length; i++) {
                    var state = ''
                    if (json.accounts[i]['status'] === 'O') {
                        state = 'باز'

                    } else if (json.accounts[i]['status'] === 'C') {
                        state = 'بسته'

                    } else if (json.accounts[i]['status'] === 'B') {
                        state = 'مسدود شده'

                    }
                    text += json.accounts[i]['accountNumber'] + ' وضعیت :' + state + '\n'
                }
                alert(text)

            })

        },
        accountNumberSearch: function (accountNumber) {

            request.get('http://127.0.0.1:5000/accounts/BankAccountRetrieve/' + accountNumber, function (err, res, body) {
                const json = JSON.parse(body).accountOwner
                // eslint-disable-next-line no-console
                console.log(json)

                var text = 'حساب \n'
                text += 'نام : ' + json.firstName + '\n'
                text += 'نام خانوادگی : ' + json.lastName + '\n'
                text += 'کد ملی : ' + json.nationalCode + '\n'
                text += 'تلفن همراه : ' + json.phoneNumber + '\n'
                text += 'حساب ها : ' + '\n'

                for (var i = 0; i < json.accounts.length; i++) {
                    var state = ''
                    if (json.accounts[i]['status'] === 'O') {
                        state = 'باز'

                    } else if (json.accounts[i]['status'] === 'C') {
                        state = 'بسته'

                    } else if (json.accounts[i]['status'] === 'B') {
                        state = 'مسدود شده'

                    }
                    text += json.accounts[i]['accountNumber'] + ' وضعیت :' + state + '\n'
                }
                alert(text)

            })

        },
        accountLogs: function (accountNumber) {
// eslint-disable-next-line no-unused-vars
            var vinst = this;

            vinst.accounts_log_dialog = true

            request.post('http://127.0.0.1:5000/accounts/GetBankAccountLogs', function (err, res, body) {
                // eslint-disable-next-line no-console
                const json = JSON.parse(body)

                // eslint-disable-next-line no-console
                console.log(json)

                vinst.log_items = json.logs
                vinst.current_credit = json.currentCredit
            })
                .form({
                    'accountNumber': accountNumber
                })
        },
        blockAccount: function (accountNumber) {

            request.post('http://127.0.0.1:5000/accounts/BlockAccount', function (err, res, body) {

                if (body === '"ok"') {
                    alert(' حساب ' + accountNumber + ' بلاک شد ')
                }
            })
                .form({
                    'accountNumber': accountNumber
                })
        },
        closeAccount: function (accountNumber) {

            request.post('http://127.0.0.1:5000/accounts/CloseAccount', function (err, res, body) {

                if (body === '"ok"') {
                    alert(' حساب ' + accountNumber + ' بسته شد ')
                }
            })
                .form({
                    'accountNumber': accountNumber
                })
        },
        newAccount: function () {
            // this.color = '#4caf50'
            // this.text = 'حساب باز شد \n شماره حساب : '
            // this.snackbar = true
            //


            let firstName = this.accounts.newAccounts.firstName
            let lastName = this.accounts.newAccounts.lastName
            let phoneNumber = this.accounts.newAccounts.phoneNumber
            let nationalCode = this.accounts.newAccounts.nationalCode

            if (firstName === '' || lastName === '' || phoneNumber === '' || nationalCode === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else {
                request.post('http://127.0.0.1:5000/accounts/BankAccountListCreate', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if (json.hasOwnProperty('status') === true) {
                        var text = 'حساب باز شد \n'
                        text += 'نام : ' + firstName + '\n'
                        text += 'نام خانوادگی : ' + lastName + '\n'
                        text += 'کد ملی : ' + nationalCode + '\n'
                        text += 'شماره حساب : ' + nationalCode + json['accountNumber']
                        alert(text)
                        this.new_account_dialog = false
                        this.accounts.newAccounts.firstName = '';
                        this.accounts.newAccounts.lastName = '';
                        this.accounts.newAccounts.phoneNumber = '';
                        this.accounts.newAccounts.nationalCode = '';

                    } else {
                        alert('خطا در ایحاد حساب جدید')
                    }

                })
                    .form({
                        "firstName": firstName,
                        'lastName': lastName, 'phoneNumber': phoneNumber, 'nationalCode': nationalCode
                    })


            }

        },
        addAccount: function () {
            let nationalCode = this.accounts.addAccounts.nationalCode


            if (nationalCode === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else {
                request.post('http://127.0.0.1:5000/accounts/AddAccountToAccountOwner', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if (json.hasOwnProperty('status') === true) {
                        var text = 'حساب جدید برای این کاربر اضافه شد \n'

                        text += 'شماره حساب : ' + json['accountNumber']
                        alert(text)
                        this.add_account_to_account_owner_dialog = false
                        this.accounts.addAccounts.nationalCode = '';
                    } else {
                        alert('خطا در اضافه کردن اکانت')
                    }

                })
                    .form({
                        'nationalCode': nationalCode
                    })


            }


        },
        sign: function () {
            let userName = this.accounts.signUpClerk.userName
            let password = this.accounts.signUpClerk.password
            let rePassword = this.accounts.signUpClerk.rePassword

            if (userName === '' || password === '' || rePassword === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else if (password !== rePassword) {
                alert('رمز عبور و تکرار آن مطابقت ندارد')
            } else {
                request.post('http://127.0.0.1:5000/accounts/User/SignUp', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if ( json['username'] !== 'A user with that username already exists .'){
                        if (json.hasOwnProperty('username') === true) {
                            var text = 'خطا در ایجاد حساب \n'

                            text += 'این نام کاربری قبلا ثبت شده است...'
                            alert(text)

                            this.signup_clerk_dialog = false
                            this.accounts.signUpClerk.userName = ''
                            this.accounts.signUpClerk.password = ''
                            this.accounts.signUpClerk.rePassword = ''
                        } else {
                            alert('خطا در ایحاد حساب جدید')
                        }
                    }else{
                        if (json.hasOwnProperty('username') === true) {
                            // eslint-disable-next-line no-redeclare
                            var text = 'اکانت جدید باز شد \n'

                            text += ' نام کاربری : ' + json['username']
                            alert(text)

                            this.signup_clerk_dialog = false
                            this.accounts.signUpClerk.userName = ''
                            this.accounts.signUpClerk.password = ''
                            this.accounts.signUpClerk.rePassword = ''
                        } else {
                            alert('خطا در ایحاد حساب جدید')
                        }
                    }


                })
                    .form({
                        "username": userName,
                        'password': password
                    })

            }
        },
        transaction: function () {

        },
        search: function () {

        },
        accountsList: function () {

        }
    }, mounted() {
        // eslint-disable-next-line no-undef
    },
    watch: {
        accounts_dialog(val) {
            var vins = this;
            if (!val) {
                vins.items = null
            }
        }, accounts_log_dialog(val) {
            var vins = this;
            if (!val) {
                vins.log_items = null
                vins.current_credit = null
            }
        }, accounts_detail_dialog(val) {
            var vins = this;
            if (!val) {
                vins.account_details = null
            }
        }
    }
}