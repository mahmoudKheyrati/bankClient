// export default {
//     data: () => ({

//     }),
//     login_form: () => ({
//             username: '',
//             password: ''
//         }
//     )
// }
// eslint-disable-next-line no-unused-vars
import router from "../router";

export default {
    data: function () {

        return {
            name: 'Login',
            username: '',
            password: '',
            snackbar: false,
            text: '',
            color: '#F44336'
        }
    },
    // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
    methods: {

        login: function () {


            let username = this.username
            let password = this.password


            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://127.0.0.1:5000/Login", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("username=" + username + "&password=" + password);
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) return;
                if (xhttp.status === 200) {
                    var json = JSON.parse(xhttp.responseText)
                    // eslint-disable-next-line no-console
                    console.log(json);
                    if (json['is_ok'] === true) {
                        this.color = '#4caf50'
                        this.snackbar = true
                        this.text = 'با موفقیت وارد شدید'
                        setTimeout(function () {
                            router.push('/')
                        },4000)


                    } else {
                        this.color = '#F44336'
                        this.snackbar = true
                        this.text = 'نام کاربری یا رمز نامعتبر است'
                    }
                }


            }


        }

    }

    ,
    metaInfo() {
        return {
            title: 'Super Secret | Login'
        }
    }
}