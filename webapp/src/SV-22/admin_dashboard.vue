<template>
<v-container>
    <div>Admin dashboard</div>
    <v-row>
        <v-col cols="4">
            <v-card class = "d-flex flex-column" height="300">
                <v-card-text>
                    <v-text-field placeholder="Client email" v-model="invitationEmail"/>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="sendInvite(invitationEmail)">
                        Send Invite
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="4" v-show="invitationSent">
            <v-card class = "d-flex flex-column">
                <v-card-title>Invitation created & sent:</v-card-title>
                <v-card-text>
                    <div>id: {{invitationData.id}}</div>
                    <div>client id: {{invitationData.client_id}}</div>
                    <div>client email: {{invitationData.client_email}}</div>
                    <div>key: {{invitationData.key}}</div>
                    <div>access link: {{invitationData.access_link}}</div>
                    <div>admin id: {{invitationData.admin_id}}</div>
                    <div>status: {{invitationData.status}}</div>
                </v-card-text>
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

    data = { ...data, invitationEmail: "", invitationSent: false, invitationData: {}, userData: {} }

// ---------------------------- ui actions

import InviteMaster from './InviteMaster'

    methods = {

        //admin
        sendInvite: function (email){
            InviteMaster.createInvitation({client_email: email, admin_id: this.$data.userData.id})
                .then(invitationDetails => {
                    this.$data.invitationData = invitationDetails;
                    InviteMaster.sendInvitation(invitationDetails)
                        .then(res => this.$data.invitationData = {
                            ...this.$data.invitationData, status: res.status
                            })
                    })
                
            this.$data.invitationSent = true
            this.$data.invitationEmail = ""
        },

        ...methods
    }

// ---------------------------- export ready

export default {
    name: 'Admin',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
