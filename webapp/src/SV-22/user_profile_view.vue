<template>
  <v-container>
    <div>User Profile</div>
    <v-row>
      <v-col cols="4">
        <v-card class="d-flex flex-column">
          <v-card-text>
            <v-card-title
              >{{ userData.firstName }} {{ userData.lastName }}</v-card-title
            >
            <v-card-text>{{ userData.class }}</v-card-text>
            <v-card-text>{{ userData.region }}</v-card-text>
            <v-card-text>{{ userData.email }}</v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="d-flex flex-column">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="First Name"
                  v-model="newFirstName"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Last Name"
                  v-model="newLastName"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-card-actions>
                <v-btn @click="changeName(newFirstName, newLastName)"
                  >Change name</v-btn
                >
              </v-card-actions>
            </v-row>
          </v-container>
          <v-card-text>
            <v-form v-model="newPasswordValid">
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    type="password"
                    label="Password"
                    v-model="password"
                  ></v-text-field>
                </v-col>
                  <v-col cols="4">
                    <v-text-field
                      type="password"
                      label="New Pasword"
                      v-model="newPassword"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      type="password"
                      label="Confirm New Password"
                      v-model="confirmedPassword"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="changePassword(password, newPassword, confirmedPassword)"
              :disabled="!newPasswordValid"
              >Change password</v-btn
            >
          </v-card-actions>
          <v-container>
            <v-row>
              <v-col>
                <v-form v-model="newEmailValid">
                  <v-text-field
                    type="email"
                    label="New Email"
                    v-model="newEmail"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col>
                <v-card-actions>
                  <v-btn
                    @click="requestEmailChange(newEmail)"
                    :disabled="!newEmailValid"
                    >Request email change</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-card-actions>
                <v-btn @click="requestDeleteProfile()">Delete profile</v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// ---------------------------- define export

let props = [];
let components = {};
let methods = {};
let computed = {};
let watch = {};
let data = {};

// ---------------------------- main logic

// use router
computed = {
  ...computed,
  Router() {
    return this.$router;
  },
};
methods = {
  ...methods,
  goto(path) {
    return this.$router.push(path);
  },
};

// use store
computed = {
  ...computed,
  Store() {
    return this.$store;
  },
};

data = {
  ...data,
  email: "placeholder_email",
  password: "",
  newEmail: "",
  newEmailValid: true,
  newPasswordValid: true,
};
data = {
  ...data,
  password: "",
  newPassword: "",
  confirmedPassword: "",
  newFirstName: "",
  newLastName: "",
};
data = {
  ...data,
  userData: {
    id: "placefolder_id",
    firstName: "firstName",
    lastName: "lastName",
    password: "password",
    email: "placeholder_email",
    class: "placeholder_class",
    region: "placeholder_region",
  },
};
data = {
  ...data,
  passwordRules: [
    (v) => !!v || "Password is required",
    (v) =>
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
      "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
  ],
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) =>
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      ) || "E-mail must be valid",
  ],
};

// ---------------------------- ui actions

import AuthMaster from "./AuthMaster";

methods = {
  changeName: function (newFirstName, newLastName) {
    if (newFirstName != "" && newLastName != "") {
      AuthMaster.changeName({ newFirstName, newLastName }).then((res) =>
        console.log(res)
      );
      this.$data.userData.firstName = newFirstName;
      this.$data.userData.lastName = newLastName;

      this.$data.newFirstName = "";
      this.$data.newLastName = "";
    }
  },

  changePassword: function (password, newPassword, confirmedPassword) {
    if (
      password === this.$data.userData.password &&
      newPassword === confirmedPassword
    ) {
      AuthMaster.changePassword({ id: "id", password, newPassword }).then((res) =>
        console.log(res)
      );
      this.$data.userData.password = newPassword;
      this.$data.password = ''
      this.$data.newPassword = ''
      this.$data.confirmedPassword = ''
    }
  },

  requestEmailChange: function (newEmail) {
    if (newEmail != "" && this.$data.newEmailValid) {
      AuthMaster.requestEmailChange({ id: "id", newEmail }).then((res) =>
        console.log(res, newEmail)
      );
      this.$data.newEmail = "";
    }
  },

  requestDeleteProfile: function () {
    AuthMaster.requestDeleteProfile({ id: "id" }).then((res) => console.log(res));
  },

  ...methods,
};

// ---------------------------- export ready

export default {
  name: "UserProfile",
  props,
  components,
  methods,
  computed,
  watch,
  data() {
    return data;
  },
};

// ---------------------------- end script
</script>
