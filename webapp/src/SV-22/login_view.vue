<template>
<v-container>
    <div>Login view: </div>
    <v-row>
        <v-col cols="4">
            <v-card class = "d-flex flex-column">
                <v-card-text>
                    <v-text-field placeholder="Email" v-model="email"/>
                    <v-text-field type="password" placeholder="Password" v-model="password"/>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="login(email, password)">
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="4" v-show="loggedIn">
            <v-card class = "d-flex flex-column">
                <v-card-title>Logged in user:</v-card-title>
                <v-card-text>
                    <div>id: {{userData.id}}</div>
                    <div>name: {{userData.name}}</div>
                    <div>company: {{userData.company}}</div>
                    <div>email: {{userData.email}}</div>
                    <div>role: {{userData.role}}</div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="4">
            <v-card class = "d-flex flex-column">
                <v-card-text>
                    <v-text-field placeholder="Key" v-model="Key"/>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="loginWithKey(Key)">
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style>
    .v-card {
        display: flex;
        flex-direction: column;
    }
    .v-card .v-card__text {
        flex-grow: 1;
    }
</style>

<script>
// ---------------------------- define export

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}

// ---------------------------- main logic

    // use router
    computed = { ...computed, Router ()   { return this.$router } }
    methods  = { ...methods,  goto (path) { return this.$router.push(path) } }

    // use store
    computed = { ...computed, Store ()    { return this.$store } }

    data = { ...data, email: "", password: "", loggedIn: false, userData: {}, Key: ""}

// ---------------------------- ui actions

import AuthMaster from './AuthMaster'

    methods = {

        //user
        login : function (email, password) {
            AuthMaster.getAuth({ email, password})
            this.$data.loggedIn = true
            AuthMaster.getUser({ email }).then(data => this.$data.userData = data)
            this.$data.email = ""
            this.$data.password = ""
        },

        loginWithKey: function (key) {
            AuthMaster.getAuthByKey(key).then(res => console.log(res))
            this.$data.Key = ""
        },

        ...methods
    }

// ---------------------------- export ready

export default {
    name: 'Login',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
