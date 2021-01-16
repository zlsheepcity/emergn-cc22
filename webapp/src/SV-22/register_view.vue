<template>
  <v-container fluid class="fluid">
    <v-row justify="center" align="center">
      <v-col cols="6" sm="12" md="6" xs="12" class="text-center">
        <h1>Registration for {{email}}</h1>
            <v-form ref="form" class="mx-2" v-model="isValid">
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="firstName" label="First Name" :rules="[v => !!v || 'Name is required']" required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="lastName" label="Last Name" :rules="[v => !!v || 'Last name is required']" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="password" type="password" :rules="passwordRules"
                        label="Password" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-checkbox v-model="gpoAgreement" :rules="[v => !!v || 'You must agree to continue!']"
                        required><div slot="label">I agree with <a @click.stop="()=>goto('doc')">SAP GPO</a></div></v-checkbox>
                </v-row>
                <v-row>
                    <v-checkbox v-model="gdprAgreement" :rules="[v => !!v || 'You must agree to continue!']"
                         required><div slot="label">I agree with <a @click.stop="()=>goto('doc')">SAP GDPR</a></div></v-checkbox>
                </v-row>
                </v-form>
                        <v-btn  @click="register(firstName, lastName, email, password)" :disabled="!isValid"> Register </v-btn>
                </v-col>
            </v-form>
    </v-row>
  </v-container>
</template>

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
    methods  = { ...methods,  goto (path) { 
        return this.$router.push(path);
        } 
    }

    // use store
    computed = { ...computed, Store ()    { return this.$store } }

    data = { ...data, email: "placeholder_email", password: "", loggedIn: false, userData: {}, Key: "", isValid: true}
    data = { ...data, firstName: '', lastName: ''}
    data = { ...data, password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        ]}
    data = { ...data, gpoAgreement: false, gdprAgreement: false }

// ---------------------------- ui actions

import AuthMaster from './AuthMaster'

    methods = {

        register : function (firstName, lastName, email, password) {
            this.$refs.form.validate()
            if(this.$data.isValid){
                AuthMaster.register({firstName, lastName, email, password})
                    .then(res => console.log(res));
                console.log("Registered:", this.$data.firstName, this.$data.lastName, this.$data.email);
            }
                
        },

        ...methods
    }

// ---------------------------- export ready

export default {
    name: 'Register',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
