<template>
    <v-container>
        <v-list two-line subheader>
            <v-subheader inset> حساب ها</v-subheader>

            <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="#4caf50"
                    >person
                    </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-content v-text="'نام : ' + nationalSearchItem.firstName"/>
                    <v-list-item-content v-text="'نام خانوادگی : ' + nationalSearchItem.lastName"/>
                    <v-list-item-content v-text="'تلفن همراه : ' +nationalSearchItem.phoneNumber"/>
                    <v-list-item-content v-text="'کد ملی : ' +nationalSearchItem.nationalCode"/>

                    <v-list two-line subheader>
                        <v-card-text>حساب ها : </v-card-text>
                        <v-list-item
                                v-for="item2 in nationalSearchItem.accounts"
                                :key="item2.accountNumber"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="'شماره حساب : ' + item2.accountNumber"/>
                                <v-list-item-title v-text="'وضعیت : ' + item2.status"/>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-list-item-content>
            </v-list-item>


        </v-list>

    </v-container>
</template>

<script>
    export default {
        name: "justfortest"
    }
</script>

<style scoped>

</style>