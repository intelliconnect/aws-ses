# AWS CLI to Manage Templates and Send Emails

**Commands for Managing email templates from Terminal :** 

1. ### Viewing a list of email templates
    ```aws ses list-templates```
2. ### Viewing the contents of a specific email template
    ```aws ses get-template --template-name MyTemplate```
3. ### Create
    ```aws ses create-template --cli-input-json file://mytemplate.json```
4. ### Update
    ```aws ses update-template --cli-input-json file://path/to/update_template.json```
5. ### Delete
    ```aws ses delete-template --template-name MyTemplate```


*(Make sure your CLI version is up to date to execute above commands)*

References : 
1. [Send Personalized Email Api](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html)
2. [Manage Templates](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-manage-templates.html)
