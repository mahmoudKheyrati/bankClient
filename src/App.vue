<template>
    <v-app id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <div>
            <div>
                <v-app-bar id="appBar" fixed light>

                    <router-link to="/">
                    <v-toolbar-title id="title">سامانه بانک</v-toolbar-title>
                    </router-link>
                    <v-spacer/>

                    <template v-if="$vuetify.breakpoint.smAndUp">

                        <router-link to="/transactions">
                        <v-btn icon @click="getTransactions">
                            <v-icon>receipt</v-icon>
                        </v-btn>
                        </router-link>
                        <v-btn icon @click="transfer_money_dialog=true">
                            <v-icon>compare_arrows</v-icon>
                        </v-btn>
                        <v-btn icon @click="charge_account_dialog=true">
                            <v-icon>arrow_upward</v-icon>
                        </v-btn>

                        <v-btn icon
                               @click="get_money_dialog=true">
                            <v-icon>arrow_downward</v-icon>
                        </v-btn>
                        <v-btn icon @click="logout_dialog=true">
                            <v-icon>power_settings_new</v-icon>
                        </v-btn>


                    </template>
                </v-app-bar>
            </div>
        </div>
        <!-- this area for dialogs-->
        <!-- logout dialog -->
        <v-dialog
                v-model="logout_dialog"
                max-width="300"
                dark
        >
            <v-card>
                <v-card-title >آیا میخواهید از اکانت خود <br>
                    خارج شوید؟</v-card-title>


                <v-card-actions>
                    <v-spacer/>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="logout_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="logout"
                    >
                        خروج از اکانت
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- transfer dialog-->
        <v-dialog
                v-model="transfer_money_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title >انتقال وجه (حساب به حساب)</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model="transfer_money.fromAccount"
                                id="fromAccount"
                                type="number"
                                color="#3F51B5"
                                label="مبدا"
                                outlined
                                light

                        />
                        <v-text-field
                                v-model="transfer_money.toAccount"

                                id="toAccount"
                                type="number"
                                color="#3F51B5"
                                label="مقصد"
                                outlined
                                light

                        />
                        <v-text-field
                                v-model="transfer_money.amount"

                                id="amount"
                                type="number"
                                color="#3F51B5"
                                label="مقدار"
                                outlined
                                light

                        />
                        <v-textarea
                                v-model="transfer_money.definition"
                                id="definition"
                                type="text"
                                color="#3F51B5"
                                label="توضیحات"
                                outlined
                                light

                        />

                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="transfer_money_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="transferMoney"
                    >
                        انجام تراکنش
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- get money dialog-->
        <v-dialog
                v-model="get_money_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title >دریافت وجه نقدی</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model="get_money.accountNumber"
                                id="fromAccount"
                                type="number"
                                color="#3F51B5"
                                label="شماره حساب"
                                outlined
                                light

                        />

                        <v-text-field
                                v-model="get_money.amount"

                                id="amount"
                                type="number"
                                color="#3F51B5"
                                label="مقدار"
                                outlined
                                light

                        />
                        <v-textarea
                                v-model="get_money.definition"
                                id="definition"
                                type="text"
                                color="#3F51B5"
                                label="توضیحات"
                                outlined
                                light

                        />

                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="get_money_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="getMoney"
                    >
                        دریافت وجه
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- charge account dialog-->
        <v-dialog
                v-model="charge_account_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title >واریز وجه به حساب</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model="charge_account.accountNumber"
                                id="fromAccount"
                                type="number"
                                color="#3F51B5"
                                label="شماره حساب"
                                outlined
                                light

                        />

                        <v-text-field
                                v-model="charge_account.amount"

                                id="amount"
                                type="number"
                                color="#3F51B5"
                                label="مقدار"
                                outlined
                                light

                        />
                        <v-textarea
                                v-model="charge_account.definition"
                                id="definition"
                                type="text"
                                color="#3F51B5"
                                label="توضیحات"
                                outlined
                                light

                        />

                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="charge_account_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="chargeAccount"
                    >
                        واریز وجه
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <router-view/>
    </v-app>
</template>
<style>
    #app {
        font-family: IRANSans, serif;
    }

    /*@import "css/main.css";*/

</style>
<script src="./js/main.js"></script>

