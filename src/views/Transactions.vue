<template >
    <v-card
            max-width="600"
            class="mx-auto"
            style="margin-top: 100px; margin-bottom: 50px"

    >
        <v-toolbar
                color="light-blue"
                dark
        >

            <v-toolbar-title>تراکنش های کل بانک</v-toolbar-title>



        </v-toolbar>

        <v-list   two-line subheader>
            <v-subheader inset>تراکنش ها</v-subheader>

            <!-- 1  for ripple effect-->
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click="1"
            >
                <v-list-item-avatar>
                    <v-icon
                            :class="[item.iconClass]"
                            v-text="item.icon"
                    />
                </v-list-item-avatar>

                <v-list-item-content >
                    <v-list-item-title v-text="'از حساب :' + item.fromAccountNumber"/>
                    <v-list-item-content v-text="'به حساب : ' + item.toAccountNumber"/>
                    <v-list-item-content v-text="'مقدار : ' + item.amount"/>
                    <v-list-item-content v-text="'توضیحات : ' +item.definition"/>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset/>


        </v-list>
    </v-card>
</template>
<script src='../js/transactions.js'/>