const InviteService_Model = function () {
    let RNA = this;

    // Public API

    RNA.createInvitation = (invitation_params) => RNA.createInvitationWithEmail(invitation_params);
    RNA.sendInvitation = (invitation_details) => RNA.sendInvitationByEmail(invitation_details);

    // Private methods

    RNA.createInvitationWithEmail = (invitation_params)=>{
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const invitation_details_response = {
                    status: 'placeholder-status-invitation-created',
                    id: '1',
                    client_id: '2',
                    client_email: invitation_params.client_email,
                    access_link: 'placeholder-access-link', 
                    key: 'placeholder-key',
                    admin_id: invitation_params.admin_id  //invitation sender
                };
                resolve(invitation_details_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    },

    RNA.sendInvitationByEmail = (invitation_details)=>{
        return new Promise( (resolve, reject) => {

            // temporary placeholder

            const DemoPlaceholder = f => {
                const invitation_sent_response = {
                    status: 'placeholder-status-invitation-sent',
                    invitation_id: invitation_details.id,
                };
                resolve(invitation_sent_response);
            }

            setTimeout(DemoPlaceholder, 100);

        })
    }

}
const InviteService = new InviteService_Model();
export default InviteService;