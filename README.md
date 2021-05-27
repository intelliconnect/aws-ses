# AWS SES
[**Amazon Simple Email Service (SES)**](https://aws.amazon.com/ses/) is a cost-effective email service built on the reliable and scalable infrastructure that Amazon.com developed to serve its own customer base. With Amazon SES, you can send transactional email, marketing messages, or any other type of high-quality content to your customers.

![AWS SES](/images/aws-ses.png)

## Pre Requisites : 
* Access to [AWS SES Console](https://console.aws.amazon.com/ses/)
* Verified Source Email to Send Email From
* AWS CLI

#### Steps to Verify Source Email: 
1. Sign in to the AWS Management Console and open the [Amazon SES console](https://console.aws.amazon.com/ses/)
2. In the console, use the region selector to choose the AWS Region where want to verify the email address, as shown in the following image.
![AWS Version](/images/verify-email-address-region.png)
3. In the left navigation bar, choose Email Addresses under Identity Management.
4. Choose Verify a **New Email Address**.
5. In the Verify a **New Email Address** pop up box, type your Email Address and then choose **Verify This Email Address**.

* You'll receive an email with the subject line: "Amazon Web Services - Email Address Verification Request in region RegionName," where RegionName is the name of the AWS Region you selected in step 2. Click the link in the email.

* In the list of email addresses, if the email address was verified, the value in the Status column will be "verified".

 
#### Steps to Install AWS CLI: 
1. Install AWS CLI : 
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```
- Check aws cli version
```
aws --version
```
![AWS Version](/images/terminal.png)

2. Configure your credentials
```
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-west-2
Default output format [None]: json
```

### To create access keys for an IAM user
* Sign in to the AWS Management Console and open the [IAM console](https://console.aws.amazon.com/iam/).
* In the navigation pane, choose **Users**.
* Choose the name of the user whose access keys you want to create, and then choose the **Security credentials** tab.
* In the **Access keys** section, choose **Create access key**.
* To view the new access key pair, choose **Show**. You will not have access to the secret access key again after this dialog box closes. Your credentials will look something like this:
```
Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```
* To download the key pair, choose **Download** .csv file. 
* Store the keys in a secure location. You will not have access to the secret access key again after this dialog box closes.
* Keep the keys confidential in order to protect your AWS account and never email them. Do not share them outside your organization, even if an inquiry appears to come from AWS or Amazon.com. No one who legitimately represents Amazon will ever ask you for your secret key.
* After you download the .csv file, choose **Close**. When you create an access key, the key pair is active by default, and you can use the pair right away

This repository will help you understand the usage of AWS SES for sending Emails by using Templates.

### Manage Templates and Send Emails Using : 
- **AWS CLI** [refer here](https://github.com/intelliconnect/aws-ses/tree/main/Using-CLI) 
- **AWS SDK** for NODEJS [refer here](https://github.com/intelliconnect/aws-ses/tree/main/Using-SDK) 
