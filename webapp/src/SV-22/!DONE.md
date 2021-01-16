in progress, 2021.1.16

## Check Jira Home

Examples are awesome!  
Компоненты наглядно показывают себя.  
Выводят результаты на экран или в консоль.  
zl

## AuthMaster/AuthService API
```js
    RNA.getAuth = (auth_request) => RNA.getAuthByService(auth_request);
    RNA.getUser = (user_request) => RNA.getUserByEmail(user_request);
    RNA.getAuthByKey = (key) => RNA.getUserAuthByKey(key);
    RNA.register = (registration_details) => RNA.registerUser(registration_details);
    RNA.changeName = (name_change_request) => RNA.changeUserName(name_change_request);
    RNA.changePassword = (password_change_request) => RNA.changeUserPassword(password_change_request);
    RNA.requestEmailChange = (email_change_request) => RNA.requestUserEmailChange(email_change_request);
    RNA.requestDeleteProfile = (profile_deletion_request) => RNA.requestDeleteUserProfile(profile_deletion_request);
```

## Cockpit

### Create-App manual

http://www.sapspot.com/retrieve-logged-in-user-details-in-cloud-foundry-using-web-ide/  

#### Build mta.yaml in MTA Editor rather than Code editor to avoid identation mistakes

#### Check parameters missed in tutorial
```
modules:
  - name: userid-approuter
    ...
    requires:
      - name: UserID_html5_repo_runtime
        parameters:
          disk-quota: 256M
          memory: 256M
```

#### Fixed Server.js
```

    /*eslint no-console: 0*/
    "use strict";

    const express = require('express');
    const passport = require('passport');
    const xsenv = require('@sap/xsenv');
    const JWTStrategy = require('@sap/xssec').JWTStrategy;
    const app = express();
    const services = xsenv.getServices({ uaa: { tag: "xsuaa" } });

    passport.use(new JWTStrategy(services.uaa));

    app.use(passport.initialize());
    app.use(passport.authenticate('JWT', { session: false }));

    app.get('/user', function (req, res, next) {
      var user = req.user;
      res.send(req.user.id);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, function () {
      console.log('app listening on port ' + port);
    });

```

#### Full code example
https://github.tools.sap/C5310768/UserID  

