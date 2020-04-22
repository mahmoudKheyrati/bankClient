<script>

    export default {
        name:"About",
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>
<template>

    <div class="about" style="padding-top: 100px;">
        <h1>This is an about page</h1>

        <v-row justify="center">
            <v-btn
                    color="primary"
                    dark
                    @click.stop="dialog = true"
            >
                Open Dialog
            </v-btn>

            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Use Google's location service?</v-card-title>

                    <v-card-text>
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer/>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            Disagree
                        </v-btn>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            Agree
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>


    </div>
</template>
