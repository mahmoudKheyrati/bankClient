<template>


    <v-app id="app">
        <div style="padding-top: 150px; padding-right: 100px">
            <v-card width="350px" height="350px"
                    color="" elevation=4 class="pa-4"
                    style="border-radius: 10px;position: absolute">
                <v-card-text style="text-align: center; font-size: 24px; color: #3F51B5; ">
                    <b>
                        وارد شوید!
                    </b>
                </v-card-text>
                <v-text-field
                        v-model="username"
                        id="userName"
                        class="mt-8"
                        color="#3F51B5"
                        label="نام کاربری"
                        outlined
                        light

                />
                <v-text-field
                        id="password"
                        v-model="password"
                        class="mt-3"
                        type="password"
                        color="#3F51B5"
                        label="رمز عبور"
                        outlined
                        light

                />
                <v-btn id="loginBtn" raised large color="#3F51B5"
                       style="vertical-align: center; position: absolute; color: white"
                       @click=" login"

                >
                    ورود
                </v-btn>

                <v-snackbar
                        style="margin-top: 75px"
                        v-model="snackbar"
                        top
                        :color='color'
                        left
                >
                    {{text}}
                    <v-btn
                            color="white"
                            text
                            @click="snackbar = false"
                    >
                        بستن
                    </v-btn>
                </v-snackbar>

            </v-card>


        </div>


    </v-app>
</template>

<script src="../js/login.js">


</script>

<style scoped>
    @import "../css/main.css";

    #app {
        background-image: url("../img/login.svg");
        object-fit: cover;
        background-repeat: no-repeat;
        font-family: IRANSans, serif;
    }
</style>