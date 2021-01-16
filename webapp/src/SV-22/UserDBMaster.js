const UserDBMaster_Model = function () {
    let RNA = this;

    // Public API

    RNA.getAuth = (auth_request) => RNA.ConfirmAuth(auth_request);
    RNA.createInvitation = (invitation_params) => 'placeholder'
    

    // Private methods


    RNA.ConfirmAuth = (auth_request) => {
        return new Promise( (resolve, reject) => {

            const demo_auth_responce = {
                user_id: '1',
                message: 'placeholder-message',
                token:   'placeholder-token',
            };
            setTimeout( f=>resolve(demo_auth_responce), 100);

        })
    }

}
const UserDBMaster = new UserDBMaster_Model();
export default UserDBMaster;
