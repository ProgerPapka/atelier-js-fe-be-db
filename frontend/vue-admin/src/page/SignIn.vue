<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex md6 lg5 xl4>
                    <v-card>
                        <v-toolbar>
                            <router-link to="/" tag="span" style="cursor: pointer">
                                <v-toolbar-title v-text="'Atelier'"></v-toolbar-title>
                                <v-spacer></v-spacer>
                            </router-link>
                        </v-toolbar>
                        <v-card-text>
                            <v-alert :value="wrong" type="warning" color="grey">{{this.wrongText}}</v-alert>
                            <v-form>
                                <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                                              color="black" v-model="userName"
                                              @keyup.enter="loginHandler"></v-text-field>
                                <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                                              type="password" color="black" v-model="password"
                                              @keyup.enter="loginHandler"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn large @click="loginHandler">LogIn</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "SingIn",
        data() {
            return {
                userName: '',
                password: '',
                wrong: false,
                wrongText: ''
            }
        },
        methods: {
            loginHandler: function () {
                //todo тут необходимо переписать на oauth2 login
                if (this.userName === 'root' && this.password === 'root') {
                    this.wrong = false;
                    this.$router.push('/admin');
                } else {
                    this.wrong = true;
                }
                this.wrongHandler();
            },
            wrongHandler: function () {
                if (this.wrong && this.userName === '' && this.password === '') {
                    this.wrongText = 'You haven\'t entered username and password!';
                } else if (this.wrong && this.password === '') {
                    this.wrongText = 'You haven\'t entered password!';
                } else if (this.wrong && this.userName === '') {
                    this.wrongText = 'You haven\'t entered username!';
                } else if (this.wrong === true) {
                    this.wrongText = 'You\'ve entered an invalid username or password!';
                }
            }
        },
        computed: {}
    }
</script>