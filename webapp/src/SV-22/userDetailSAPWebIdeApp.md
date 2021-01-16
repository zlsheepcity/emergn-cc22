#### Retreive logged in user email in SAP Web Ide

Follow: http://www.sapspot.com/retrieve-logged-in-user-details-in-cloud-foundry-using-web-ide/

Build **mta.yaml** in MTA Editor rather than Code editor to avoid identation mistakes <br>

When changing **Server.js**
 change <br>
 `const services = xsenv.getServices({ uaa:'uaa_UserDetail' }); ` <br>
 to <br>
 `const services = xsenv.getServices({ uaa: { tag: "xsuaa" }});` <br>

TODO: Welcome authenticated user