const _String = new String;
const _Number = new Number;

const DataModel = {

    // user authorization

    auth_request: {
        email: _String,
        password: _String,
    },

    auth_responce: {
        message: _String,
        token: _String,
    },

    //user data

    user_details : {
        id: _String,
        name: _String,
        company: _String,
        email: _String,
        role: _String,
        class: _String,
        region: _String,
        password: _String
    },

    user_request : {
        email: _String
    },

    //user profile change requests

    name_change_request :{
        user_id: _String,
        new_first_name: _String,
        new_last_name: _String
    },

    email_change_request :{
        user_id: _String,
        new_email: _String,
    },

    password_change_request :{
        user_id: _String,
        password: _String,
        new_password: _String,
    },

    profile_deletion_request : {
        user_id: _String,
    },

    //user profile change notification

    profile_change_notification :{
        user_id: _String,
        changed_parameter_name: _String,
        previous_parameter: _String,
        new_parameter: _String,
    },

    //user profile change response

    profile_change_response: {
        message: _String,
        token: _String,
    },

    //registration

    registration_details : {
        firstName: _String,
        lastName: _String,
        email: _String,
        password: _String
    },

    registration_response : {
        message: _String,
        token: _String,
    },

    //admin functions

    invitation_params: {
        client_email: _String,
        admin_id: _String //invitation sender
    },

    invitation_details: {
        id: _String,
        client_id: _String,
        client_email: _String,
        client_class: _String,
        client_region: _String,
        key: _String,
        access_link: _String, 
        admin_id: _String //invitation sender
    }

}
export default DataModel;
