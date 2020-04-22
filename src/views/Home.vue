<template>
    <v-app id="app">
        <div id="create">
            <v-speed-dial
                    v-model="fab"
                    bottom
                    left
                    open-on-hover
                    transition='slide-y-reverse-transition'

            >
                <template v-slot:activator>
                    <v-btn
                            v-model="fab"
                            color="#FF5722"
                            dark
                            fab
                    >
                        <v-icon v-if="fab">mdi-close</v-icon>
                        <v-icon v-else>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-btn
                        id="btn1"
                        @click="signup_clerk_dialog=true"
                        fab
                        dark
                        small
                        color="#3F51B5"
                >
                    <v-icon>group_add</v-icon>
                </v-btn>
                <v-btn
                        fab
                        dark
                        small
                        color="#F44336"
                        @click="add_account_to_account_owner_dialog=true"

                >
                    <v-icon>plus_one</v-icon>

                </v-btn>
                <v-btn
                        fab
                        dark
                        small
                        color="#4CAF50"
                        @click="new_account_dialog=true"
                >
                    <v-icon>person_add</v-icon>
                </v-btn>
            </v-speed-dial>


        </div>
        <div align="center">
            <v-card width="250px" height="250px"
                    style="margin-top: 100px;margin-right: 16px;display: inline-block"
                    color="red" @click="loadAccounts">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 48px;color: white">
                        حساب ها
                    </v-card-text>
                </v-content>
            </v-card>
            <v-card width="250px" height="250px" style="margin-right: 16px;display: inline-block"
                    color="#E91E63"
                    @click="block_dialog = true">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 26px;color: white">
                        بلاک کردن حساب
                    </v-card-text>
                </v-content>
            </v-card>
            <v-card width="250px" height="250px" style="margin-right: 16px;display: inline-block"
                    color="#9C27B0"
                    @click="close_dialog = true">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 36px;color: white">
                        بستن حساب
                    </v-card-text>
                </v-content>
            </v-card>

        </div>
        <div align="center" style="margin-top: 8px">
            <v-card width="250px" height="250px" style="margin-right: 16px;display: inline-block"
                    color="#673AB7"
                    @click="national_search_dialog= true">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 26px;color: white">
                        جستجو با کد ملی
                    </v-card-text>
                </v-content>
            </v-card>
            <v-card width="250px" height="250px" style="margin-right: 16px;display: inline-block"
                    color="#3F51B5"
                    @click="account_number_search_dialog = true">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 20px;color: white">
                        جستجو با شماره حساب
                    </v-card-text>
                </v-content>
            </v-card>
            <v-card width="250px" height="250px" style="margin-right: 16px;display: inline-block"
                    color="#2196F3"
                    @click="account_logs_dialog = true">

                <v-content v-ripple style="width: 100%; height: 100%;position: relative;">
                    <v-card-text
                            style="position: absolute; alignment: center;text-align: center;top: 40%;font-size: 26px;color: white">
                        تراکنش های حساب
                    </v-card-text>
                </v-content>
            </v-card>

        </div>


        <!--        <v-card-->
        <!--                max-width="600"-->
        <!--                class="mx-auto"-->
        <!--                style="margin-top: 100px; margin-bottom: 50px"-->

        <!--        >-->
        <!--            <v-toolbar-->
        <!--                    color="light-blue"-->
        <!--                    dark-->
        <!--            >-->

        <!--                <v-toolbar-title>حساب های کل بانک</v-toolbar-title>-->

        <!--                <v-spacer/>-->


        <!--            </v-toolbar>-->

        <!--            <v-list two-line subheader>-->
        <!--                <v-subheader inset> حساب ها</v-subheader>-->

        <!--                <v-list-item-->
        <!--                        v-for="item in this.items"-->
        <!--                        :key="item.accountNumber"-->

        <!--                >-->
        <!--                    <v-list-item-avatar>-->
        <!--                        <v-icon color="#4caf50"-->
        <!--                        >person-->
        <!--                        </v-icon>-->
        <!--                    </v-list-item-avatar>-->

        <!--                    <v-list-item-content>-->
        <!--                        <v-list-item-title v-text="'شماره حساب : ' + item.accountNumber"/>-->
        <!--                        <v-list-item-content v-text="'نام : ' + item.accountOwner.firstName"/>-->
        <!--                        <v-list-item-content v-text="'نام خانوادگی : ' + item.accountOwner.lastName"/>-->
        <!--                        <v-list-item-content v-text="'تلفن همراه : ' +item.accountOwner.phoneNumber"/>-->
        <!--                        <v-list-item-content v-text="'کد ملی : ' +item.accountOwner.nationalCode"/>-->

        <!--                    </v-list-item-content>-->

        <!--                    <v-list-item-action>-->
        <!--                        <v-btn color="#00BCD4" @click="accountDetail(item.accountNumber)">مشخصات بیشتر</v-btn>-->
        <!--                        <v-btn color="#607D8B" style="color: white" @click="accountLogs(item.accountNumber)">تراکنش-->
        <!--                            های این کاربر-->
        <!--                        </v-btn>-->


        <!--                        <v-btn icon>-->
        <!--                            <v-icon color="grey lighten-1">open</v-icon>-->
        <!--                        </v-btn>-->
        <!--                    </v-list-item-action>-->
        <!--                </v-list-item>-->


        <!--            </v-list>-->
        <!--        </v-card>-->


        <!-- this area for dialogs -->
        <!-- add new account for person dialog -->
        <v-dialog
                v-model="new_account_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title>ساختن حساب جدید برای کاربر جدید</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field
                                v-model="accounts.newAccounts.firstName"
                                id="firstName"
                                class="mt-3"
                                type="text"
                                color="#3F51B5"
                                label="نام"
                                outlined
                                light
                        />
                        <v-text-field
                                v-model="accounts.newAccounts.lastName"

                                id="lastName"
                                type="text"
                                color="#3F51B5"
                                label="نام خانوادگی"
                                outlined
                                light
                        />
                        <v-text-field
                                v-model="accounts.newAccounts.phoneNumber"

                                id="phoneNumber"
                                type="tel"
                                color="#3F51B5"
                                label="شماره موبایل"
                                outlined
                                light
                        />
                        <v-text-field
                                v-model="accounts.newAccounts.nationalCode"
                                id="nationalCode"
                                type="number"
                                color="#3F51B5"
                                label="کد ملی"
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
                            @click="new_account_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="newAccount"
                    >
                        ثبت نام
                    </v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>
        <!-- add account to account owner-->
        <v-dialog
                v-model="add_account_to_account_owner_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title>اضافه کردن اکانت</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=accounts.addAccounts.nationalCode
                                id="nationalCode"
                                type="number"
                                color="#3F51B5"
                                label="کد ملی"
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
                            @click="add_account_to_account_owner_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="addAccount"
                    >
                        اضافه کردن اکانت
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- sign up for new clerk-->
        <v-dialog
                v-model="signup_clerk_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title>اضافه کردن اکانت</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=accounts.signUpClerk.userName
                                id="userName"
                                type="text"
                                color="#3F51B5"
                                label="نام کاربری"
                                outlined
                                light
                        />
                        <v-text-field
                                v-model=accounts.signUpClerk.password

                                id="password"
                                type="password"
                                color="#3F51B5"
                                label="رمز عبور"
                                outlined
                                light
                        />
                        <v-text-field
                                v-model=accounts.signUpClerk.rePassword
                                id="rePassword"
                                type="password"
                                color="#3F51B5"
                                label="تکرار رمز عبور"
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
                            @click="signup_clerk_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="sign"
                    >
                        ثبت نام
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- accounts dialog-->
        <v-dialog
                v-model="accounts_dialog"
                max-width="750"

        >
            <v-card>
                <v-card-title>همه حساب های بانک</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-list two-line subheader>
                            <v-subheader inset> حساب ها</v-subheader>

                            <v-list-item
                                    v-for="item in this.items"
                                    :key="item.accountNumber"

                            >
                                <v-list-item-avatar>
                                    <v-icon color="#4caf50"
                                    >person
                                    </v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                            v-text="'شماره حساب : ' + item.accountNumber"/>
                                    <v-list-item-content
                                            v-text="'نام : ' + item.accountOwner.firstName"/>
                                    <v-list-item-content
                                            v-text="'نام خانوادگی : ' + item.accountOwner.lastName"/>
                                    <v-list-item-content
                                            v-text="'تلفن همراه : ' +item.accountOwner.phoneNumber"/>
                                    <v-list-item-content
                                            v-text="'کد ملی : ' +item.accountOwner.nationalCode"/>

                                    <v-list two-line subheader>
                                        <v-card-text>حساب ها :</v-card-text>
                                        <v-list-item
                                                v-for="item2 in item.accountOwner.accounts"
                                                :key="item2.accountNumber"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title
                                                        v-text="'شماره حساب : ' + item2.accountNumber"/>
                                                <v-list-item-title
                                                        v-text="'وضعیت : ' + item2.status"/>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <p>-----------------------------------------------------------------</p>

                                    </v-list>


                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn color="#607D8B" style="color: white"
                                           @click="accountLogs(item.accountNumber)">تراکنش
                                        های این حساب
                                    </v-btn>

                                </v-list-item-action>
                            </v-list-item>
                        </v-list>

                    </v-container>
                </v-card-text>


            </v-card>
        </v-dialog>

        <!-- account logs dialog-->
        <v-dialog
                v-model="accounts_log_dialog"
                max-width="750"

        >
            <v-card>
                <v-card-title>تراکنش های این حساب</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-list two-line subheader>
                            <v-subheader inset> تراکنش ها</v-subheader>

                            <v-list-item-title style="color: red"
                                               v-text="'موجودی : ' + current_credit"/>
                            <v-list-item
                                    v-for="item in this.log_items"
                                    :key="item.id"

                            >

                                <v-list-item-content>
                                    <v-list-item-title v-text="'شماره پیگیری : ' + item.id"/>
                                    <v-list-item-content v-text="'مبلغ : ' + item.amount"/>
                                    <v-list-item-content v-text="'توضیحات : ' + item.definition"/>
                                    <v-list-item-content v-text="'نوع : ' +item.logType"/>
                                    <v-list-item-content v-text="'تاریخ : ' +item.date"/>
                                    <img style="background-color: #546E7A" height="1px"/>

                                </v-list-item-content>

                            </v-list-item>


                        </v-list>

                    </v-container>
                </v-card-text>


            </v-card>
        </v-dialog>
        <!-- account detail dialog-->
        <v-dialog
                v-model="accounts_detail_dialog"
                max-width="750"

        >
            <v-card>
                <v-card-title>جزییات اکانت</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-list two-line subheader>
                            <!--                            <v-subheader inset>جزییات</v-subheader>-->
                            <!---->
                            <!--                            <v-list-item-title style="color: red" v-text="'نام : ' +this. account_details.firstName"/>-->
                            <!--                            <v-list-item-title style="color: red" v-text="'نام خانوادگی : ' + this.account_details.lastName"/>-->
                            <!--                            <v-list-item-title style="color: red" v-text="'تلفن همراه : ' + this.account_details.phoneNumber"/>-->
                            <!--                            <v-list-item-title style="color: red" v-text="'کد ملی : ' + this.account_details.nationalCode"/>-->
                            <!--                            <v-list-item-->
                            <!--                                    v-for="item in this.account_details.accounts"-->
                            <!--                                    :key="item.accountNumber"-->

                            <!--                            >-->

                            <!--                                <v-list-item-content>-->
                            <!--                                    <v-list-item-title v-text="'شماره حساب : ' + item.accountNumber"/>-->
                            <!--                                    <v-list-item-content v-text="'وضعیت : ' + item.status"/>-->

                            <!--                                    <img style="background-color: #546E7A" height="1px"/>-->

                            <!--                                </v-list-item-content>-->
                            <!--                                <v-list-item-action>-->
                            <!--                                    <v-btn color="#757575" @click="blockAccount(item.accountNumber)">بلاک کردن حساب-->
                            <!--                                    </v-btn>-->
                            <!--                                    <v-btn color="#F44336" style="color: white"-->
                            <!--                                           @click="closeAccount(item.accountNumber)">بستن حساب-->
                            <!--                                    </v-btn>-->

                            <!--                                    <v-btn icon>-->
                            <!--                                        <v-icon color="grey lighten-1">open</v-icon>-->
                            <!--                                    </v-btn>-->
                            <!--                                </v-list-item-action>-->

                            <!--                            </v-list-item>-->


                        </v-list>

                    </v-container>
                </v-card-text>


            </v-card>
        </v-dialog>
        <!-- block dialog-->
        <v-dialog
                v-model="block_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title>بلاک کردن اکانت</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=blockNumber
                                type="text"
                                color="#3F51B5"
                                label="شماره حساب"
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
                            @click="block_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="blockAccount(blockNumber)"
                    >
                        بلاک کردن
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- close dialog-->
        <v-dialog
                v-model="close_dialog"
                max-width="350"

        >
            <v-card>
                <v-card-title>بستن اکانت</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=closeNumber
                                type="text"
                                color="#3F51B5"
                                label="شماره حساب"
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
                            @click="close_dialog = false"
                    >
                        انصراف
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="closeAccount(closeNumber)"
                    >
                        بستن حساب
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- national code search dialog-->
        <v-dialog
                v-model="national_search_dialog"
                max-width="350"
        >
            <v-card>
                <v-card-title>جستجو با کد ملی</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=nationalNumber
                                type="text"
                                color="#3F51B5"
                                label="کدملی"
                                outlined
                                light
                        />
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="nationalSearch(nationalNumber)"
                    >
                        جستجو
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- account number search dialog-->
        <v-dialog
                v-model="account_number_search_dialog"
                max-width="350"
        >
            <v-card>
                <v-card-title>جستجو با شماره حساب</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=accountNumber
                                type="text"
                                color="#3F51B5"
                                label="شماره حساب"
                                outlined
                                light
                        />
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="accountNumberSearch(accountNumber)"
                    >
                        جستجو
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- account logs input dialog-->
        <v-dialog
                v-model="account_logs_dialog"
                max-width="350"
        >
            <v-card>
                <v-card-title>جستجو تراکنش ها</v-card-title>
                <v-card-text>
                    <v-container>

                        <v-text-field
                                v-model=accountNumber
                                type="text"
                                color="#3F51B5"
                                label="شماره حساب"
                                outlined
                                light
                        />
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="accountLogs(accountNumber)"
                    >
                        جستجو
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </v-app>

</template>

<script src="../js/home.js">


    export default {

        name: 'home',

        data: () => ({
            direction: 'top',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition',
        }),
    }
</script>

<style>
    /* This is for documentation purposes and will not be needed in your application */
    #create .v-speed-dial {
        position: absolute;
    }

    #create .v-btn--floating {
        position: relative;
    }
</style>