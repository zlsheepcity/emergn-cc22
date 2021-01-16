const AuthService_Model = function () {
    let RNA = this;

    // Public API

    RNA.getAuth = (auth_request) => RNA.getAuthByService(auth_request);
    RNA.getUser = (user_request) => RNA.getUserByEmail(user_request);
    RNA.getAuthByKey = (key) => RNA.getUserAuthByKey(key);
    RNA.register = (registration_details) => RNA.registerUser(registration_details);
    RNA.changeName = (name_change_request) => RNA.changeUserName(name_change_request);
    RNA.changePassword = (password_change_request) => RNA.changeUserPassword(password_change_request);
    RNA.requestEmailChange = (email_change_request) => RNA.requestUserEmailChange(email_change_request);
    RNA.requestDeleteProfile = (profile_deletion_request) => RNA.requestDeleteUserProfile(profile_deletion_request);

    // Private methods

    RNA.getAuthByService = (auth_request) => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const auth_responce = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(auth_responce);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.getUserByEmail = (user_request) => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoUserDataPlaceholder = f => {
                const auth_responce = {
                    id: 'placeholder-user-id',
                    name: 'placeholder-name',
                    company : 'placeholder-company',
                    email: user_request.email,
                    role: 'placeholder-role',
                    key: 'placeholder-key'
                };
                resolve(auth_responce);
            }

            setTimeout(DemoUserDataPlaceholder, 100);

        })
    },

    RNA.getUserAuthByKey = (key) => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const auth_responce = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                    key
                };
                resolve(auth_responce);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.registerUser = () => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const registration_responce = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(registration_responce);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.changeUserName = (name_change_request) => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const profile_change_response = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(profile_change_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.changeUserPassword = (password_change_request) => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const profile_change_response = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(profile_change_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.requestUserEmailChange = () =>{
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const profile_change_response = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(profile_change_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.requestDeleteUserProfile = () => {
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const profile_change_response = {
                    message: 'placeholder-message',
                    token: 'placeholder-token',
                };
                resolve(profile_change_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    }

}
const AuthService = new AuthService_Model();
export default AuthService;
