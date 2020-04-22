<template>
    <v-card
            width="800"
            max-width="800"
            class="mx-auto"
            style="margin-top: 100px"
    >
        <v-toolbar
                color="light-blue"
                dark
        >


            <v-toolbar-title>همه تراکنش های بانک</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>

        <v-list two-line subheader>
            <v-subheader inset>تراکنش ها</v-subheader>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click="cl(item.title)"

            >
                <v-list-item-avatar>
                    <v-icon
                            :class="[item.iconClass]"
                            v-text="item.icon"
                    ></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>


        </v-list>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
                { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
                { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
            ],
            items2: [
                { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
                { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
            ],
        }),
        methods:{
            cl:function (text) {
                alert(text)
            }
        }
    }
</script>
<!--<template >-->
<!--    <v-app id="app">-->
<!--    <v-simple-table fixed-header height="300px">-->
<!--        <template v-slot:default>-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th class="text-left">Name</th>-->
<!--                <th class="text-left">Calories</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--                <v-card elevation="0" style="margin-top: 4px">-->
<!--            <tr v-for="item in desserts" :key="item.name">-->
<!--                <td>{{ item.name }}</td>-->
<!--                <td>{{ item.calories }}</td>-->
<!--            </tr>-->
<!--                </v-card>-->
<!--            </tbody>-->
<!--        </template>-->
<!--    </v-simple-table>-->
<!--    </v-app>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                desserts: [-->
<!--                    {-->
<!--                        name: 'Frozen Yogurt',-->
<!--                        calories: 159,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Ice cream sandwich',-->
<!--                        calories: 237,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Eclair',-->
<!--                        calories: 262,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Cupcake',-->
<!--                        calories: 305,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Gingerbread',-->
<!--                        calories: 356,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Jelly bean',-->
<!--                        calories: 375,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Lollipop',-->
<!--                        calories: 392,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Honeycomb',-->
<!--                        calories: 408,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Donut',-->
<!--                        calories: 452,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'KitKat',-->
<!--                        calories: 518,-->
<!--                    },-->
<!--                ],-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    #app{-->
<!--        margin-top: 100px;-->
<!--    }-->


<!--</style>-->