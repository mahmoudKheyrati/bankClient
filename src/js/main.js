import router from "../router";

var request = require('request');




    // alert('mounted')

    fetch('http://127.0.0.1:5000/isLogin')
        .then(function (data) {
            return data.json()

        }).then(function (json) {
        // eslint-disable-next-line no-console
        // console.log(json);
        if (json['is_login'] === true) {
            // alert('is login')
        } else {
            // alert('don\'t login')
            router.push('/login')
        }
    })



export default {

    data() {
        return {
            logout_dialog: false,
            get_money_dialog: false,
            charge_account_dialog: false,
            transfer_money_dialog: false,

            get_money: {
                accountNumber: '',
                amount: '',
                definition: '',
            },
            charge_account: {
                accountNumber: '',
                amount: '',
                definition: '',
            },
            transfer_money: {
                fromAccount: '',
                toAccount: '',
                amount: '',
                definition: '',
            },


        }
    },
    methods: {
        transferMoney: function () {
            let fromAccount = this.transfer_money.fromAccount
            let toAccount = this.transfer_money.toAccount
            let amount = this.transfer_money.amount
            let definition = this.transfer_money.definition

            if (fromAccount === '' || toAccount === '' || amount === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else {
                request.post('http://127.0.0.1:5000/transaction/transferMoney', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if (json.hasOwnProperty('cash') === true) {
                        var text = 'وجه انتقال یافت \n'
                        text += 'از اکانت : ' + fromAccount + '\n'
                        text += 'به اکانت : ' + toAccount + '\n'
                        text += 'مبلغ : ' + amount + '\n'
                        text += 'توضیحات : ' + json['definition']
                        text += 'شماره تراکنش : ' + json['id']
                        alert(text)
                        this.transfer_money.fromAccount = ''
                        this.transfer_money.toAccount = ''
                        this.transfer_money.amount = ''
                        this.transfer_money.definition = ''
                        this.transfer_money_dialog = false

                    } else {
                        alert('خطا در انتقال وجه')
                    }

                })
                    .form({
                        'fromAccount': fromAccount,
                        'toAccount': toAccount, 'amount': amount, 'definition': definition
                    })


            }


        },
        getMoney: function () {
            let accountNumber = this.get_money.accountNumber
            let amount = this.get_money.amount
            let definition = this.get_money.definition

            if (accountNumber === '' || amount === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else {
                request.post('http://127.0.0.1:5000/transaction/getMoney', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if (json.hasOwnProperty('cash') === true) {
                        var text = 'وجه انتقال یافت \n'
                        text += ' اکانت : ' + accountNumber + '\n'
                        text += 'مبلغ : ' + amount + '\n'
                        text += 'توضیحات : ' + json['definition'] + '\n'
                        text += 'شماره تراکنش : ' + json['id']

                        alert(text)
                        this.get_money.accountNumber = ''
                        this.get_money.amount = ''
                        this.get_money.definition = ''

                        this.get_money_dialog = false

                    } else {
                        alert('خطا در دریافت وجه')
                    }

                })
                    .form({
                        'accountNumber': accountNumber,
                        'amount': amount, 'definition': definition
                    })


            }


        },
        chargeAccount: function () {
            let accountNumber = this.charge_account.accountNumber
            let amount = this.charge_account.amount
            let definition = this.charge_account.definition

            if (accountNumber === '' || amount === '') {
                alert('لطفا همه اطلاعات را وارد کنید')

            } else {
                request.post('http://127.0.0.1:5000/transaction/chargeAccount', function (err, res, body) {
                    // eslint-disable-next-line no-console
                    console.log(body);
                    const json = JSON.parse(body)

                    // eslint-disable-next-line no-console
                    if (json.hasOwnProperty('cash') === true) {
                        var text = 'وجه واریز شد \n'
                        text += ' اکانت : ' + accountNumber + '\n'
                        text += 'مبلغ : ' + amount + '\n'
                        text += 'توضیحات : ' + json['definition'] + '\n'
                        text += 'شماره تراکنش : ' + json['id']

                        alert(text)
                        this.charge_account.accountNumber = ''
                        this.charge_account.amount = ''
                        this.charge_account.definition = ''

                        this.charge_account_dialog = false

                    } else {
                        alert('خطا در دریافت وجه')
                    }

                })
                    .form({
                        'accountNumber': accountNumber,
                        'amount': amount, 'definition': definition
                    })


            }


        },
        f: function () {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://127.0.0.1:5000/accounts/BankAccountListCreate", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send()
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) return;
                if (xhttp.status === 200) {
                    var json = JSON.parse(xhttp.responseText)
                    // eslint-disable-next-line no-console
                    console.log(json[0])

                }


            }
        },
        logout: function () {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://127.0.0.1:5000/logout", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send()
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) return;
                if (xhttp.status === 200) {
                    router.push('/login')
                }


            };
            this.logout_dialog = false
        }
    },
    mounted(){
    }
}


