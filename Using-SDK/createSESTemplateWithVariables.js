const AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-southeast-1'
});

const ses = new AWS.SES(); 
/* ============================================Create Template==================================================*/

const params = {
    "Template": {
      "TemplateName": "SendInactiveEmail",
      "SubjectPart": "VG Payroll - {{name}} marked {{active_status}}",
      "HtmlPart": "<div style='position: absolute;top: center; left:center; border:1px solid red;padding:20px;'><h4>Hello</h4><br>User marked <span style='color:red'>{{active_status}}</span> by {{changedByName}}.<br><br><p>Emp Name : <b>{{name}}</b></p><br><p>Emp Code : <b>{{emp_code}}</b></p></div>",
      "TextPart": "Hello,\r\nUser marked {{active_status}} by {{changedByName}}.\r\n \r\nEmp Name : {{name}}\r\nEmp Code : {{emp_code}}"
    }
}

ses.createTemplate(params, (err, data) =>  {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});