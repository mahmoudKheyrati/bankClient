// eslint-disable-next-line no-unused-vars
var request = require('request');

//
export default {
    name: 'Transactions',
    methods: {
        loadTransactions: function () {
            var vinst = this;

            request.get('http://127.0.0.1:5000/transaction/getTransactions', function (err, res, body) {
                const json = JSON.parse(body)
                vinst.account_details = json
                // eslint-disable-next-line no-console
                // eslint-disable-next-line no-console
                console.log(json);
                // eslint-disable-next-line no-console
                console.log(json.items);


                for (var i = 0 ; i < json.length;i++){
                    if (json[i]['toAccountNumber']===null){

                    json[i]['toAccountNumber'] = ''
                    }
                    if (json[i]['fromAccountNumber']===null){

                    json[i]['fromAccountNumber'] = ''
                    }

                }
                vinst.items = json

            })



        }
    },


    data: () => ({
        items: [],
    }), mounted() {


        this.loadTransactions();

    }
}
