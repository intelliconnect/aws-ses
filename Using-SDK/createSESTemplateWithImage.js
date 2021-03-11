const AWS = require("aws-sdk");

AWS.config.update({
  region: 'eu-west-1'
});

const ses = new AWS.SES(); 
/* ============================================Update Template==================================================*/
const params = {
    "Template": {
      "TemplateName": "SampleEmailWithImage",
      "SubjectPart": "Sample Email with Images - Sent from SES - Template",
      "HtmlPart": '<table class="x_1500102379m_-1784988919211699870document" align="center">\
      <tbody>\
         <tr>\
            <td valign="top">\
               <table class="x_1500102379m_-1784988919211699870container" width="600" cellspacing="0" cellpadding="0" border="0" align="center">\
                  <tbody>\
                     <tr>\
                        <td>\
                           <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">\
                              \
                              <tbody>\
                                 <tr>\
                                    <td class="x_1500102379m_-1784988919211699870container" style="background-size :  initial; ">\
                                       <table width="100%">\
                                          <tbody>\
                                             <tr>\
                                                <td class="x_1500102379m_-1784988919211699870container">\
                                                   <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">\
                                                      <tbody>\
                                                         <tr>\
                                                            <td style="padding :  0 15px 0 15px; ">\
                                                               <table class="x_1500102379m_-1784988919211699870container" style="margin-bottom :  5px; margin-top :  5px; " width="100%" cellspacing="0" cellpadding="0" border="0" align="center">\
                                                                  <tbody>\
                                                                     <tr>\
                                                                        <td style="border-collapse :  collapse; border-spacing :  0; margin :  0; padding :  0; " valign="top" align="center">\
                                                                           <img id="1615454585797110001_imgsrc_url_1" alt="Example Logo" style="width :  12%; max-width :  100%; padding :  0px; outline :  none; border :  none; display :  block; " width="68" src="https://gallery.eomail5.com/05ef481b-44ee-11ea-be00-06b4694bee2a%2F1615367467845-intelliconnect_logo.jpg">\
                                                                        </td>\
                                                                     </tr>\
                                                                  </tbody>\
                                                               </table>\
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">\
                                                      <tbody>\
                                                         <tr>\
                                                            <td style="text-decoration :  none; padding-top :  10px; padding-bottom :  10px; " class="x_1500102379m_-1784988919211699870container" width="100%"><h1 style="margin-top :  0px; margin-bottom :  0px; font-size :  26px; line-height :  1.25; text-align :  center; color :  #313638; ">Thank You for Signing Up!</h1></td>\
                                                         </tr>\
                                                      </tbody>\
                                                   </table></td>\
                                                         </tr>\
                                                      </tbody>\
                                                   </table>\
                                                </td>\
                                             </tr>\
                                          </tbody>\
                                       </table>\
                                    </td>\
                                 </tr>\
                              </tbody>\
                           </table>\
                        </td>\
                     </tr>\
                  </tbody>\
               </table>\
            </td>\
         </tr>\
      </tbody>\
   </table>',
    "TextPart": "Hello,\r\nThis is sample email with some images."
    }
}

ses.createTemplate(params, (err, data) =>  {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
