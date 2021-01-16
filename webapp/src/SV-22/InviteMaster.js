// dependencies

import InviteService from '@/jira/SV-22/InviteService.js';


// master api

const InviteMaster_Model = function () {
    let RNA = this;

    RNA.createInvitation = (invitation_params) => InviteService.createInvitation(invitation_params);
    RNA.sendInvitation = (invitation_details) => InviteService.sendInvitation(invitation_details)
}

// export ready

const InviteMaster = new InviteMaster_Model();
export default InviteMaster;