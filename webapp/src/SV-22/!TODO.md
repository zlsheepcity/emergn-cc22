https://jira.emergn.com/browse/SV-22

# TODO

## checkpoint 1
Get authorized as SAP user

- Demo login view (vue)
- DataModel: auth_request, auth_responce
- AuthMaster.getAuth
- AuthService.getAuth + SAP Auth Service setup
- First deploy

## checkpoint 2
White list of users

- SAP Hana Setup + insert demo data
- Update view with forbidden access
- UserDBMaster.getAuth

## checkpoint 3
Get user details (role)

- Update view with user data from database
- DataModel: user_details
- AuthMaster.getUser
- UserDBMaster.getUser


## checkpoint 4
Send email with a key in direct link

- Update view with admin dashboard
- DataModel: invitation_params
- InviteMaster.createInvitation
- UserDBMaster.createInvitation
- InviteMaster.sendInvitation
- EmailController.sendInvitation

- Update view with URL decode
- AuthMaster.getAuthByKey
- UserDBMaster.getAuthByKey

## checkpoint 5

- Code refactoring
- Documentation
- Final deploy


# NICE TO HAVE

- Test coverage
