// dependencies

import AuthService from '@/jira/SV-22/AuthService.js';


// master api

const AuthMaster_Model = function () {
    let RNA = this;

    RNA.getAuth = (auth_request) => AuthService.getAuth(auth_request);
    RNA.getUser = (user_request) => AuthService.getUser(user_request);
    RNA.getAuthByKey = (key) => AuthService.getAuthByKey(key);
    RNA.register = (registration_details) => AuthService.register(registration_details);
    RNA.changeName = (name_change_request) => AuthService.changeName(name_change_request);
    RNA.changePassword = (password_change_request) => AuthService.changePassword(password_change_request);
    RNA.requestEmailChange = (email_change_request) => AuthService.requestEmailChange(email_change_request);
    RNA.requestDeleteProfile = (profile_deletion_request) => AuthService.requestDeleteProfile(profile_deletion_request);
}

// export ready

const AuthMaster = new AuthMaster_Model();
export default AuthMaster;
