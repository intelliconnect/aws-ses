const AWS = require("aws-sdk"); 

AWS.config.update({
    region: 'eu-west-1'
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

//For First Template
const params = {
    "Source": "VG <tech.support@vg-industrial.com>",
    "Template": "SendInactiveEmail",
    "Destination": {
        "ToAddresses": [ "shivanjali.nimbalkar@intelliconnect-tech.com" ]
    },
    "TemplateData": "{ \"name\":\"Shivanjali\", \"active_status\": \"Active\",\"changedByName\":\"chriswakare\", \"emp_code\": \"E09999\" }"
}

const response = ses.sendTemplatedEmail(params, (err, data) =>  {
    if (err) {
        console.log(err, err.stack); // an error occurred
    }
    else{
        console.log(data);           // successful response
    }     
});

//For Second Template
const params_1 = {
    "Source": "VG <tech.support@vg-industrial.com>",
    "Template": "SampleEmailWithImage",
    "Destination": {
        "ToAddresses": [ "shivanjali.nimbalkar@intelliconnect-tech.com" ]
    },
    "TemplateData": "{}"
}

const response_1 = ses.sendTemplatedEmail(params_1, (err, data) =>  {
    if (err) {
        console.log(err, err.stack); // an error occurred
    }
    else{
        console.log(data);           // successful response
    }     
});