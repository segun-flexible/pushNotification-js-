const push = require("web-push");

let keys = {
    publicKey: 'BNOqUAtgWKVA8NRDHiM4MPFSS2NiTrycvCQcS2n9JK1QV8lnCIRyBox1M6SgSYRKfCLNmFALCnlT_tCi0anuRpM',
    privateKey: 'jv7121qzsgQqPnSXJODSisUun5heSWXRJdgD_eYyGlo'
}

let sub = {};

push.setVapidDetails("contct@mysit.co",keys.publicKey,keys.privateKey);

//Send Notification
push.sendNotification(sub,"Test messgig")