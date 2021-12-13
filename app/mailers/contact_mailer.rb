class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.service_inquiry.subject
  #
  def service_inquiry(message)
    @sender = message.name
    @email = message.email

    @request = message.request
    
    @conumber = message.conumber
    @details = message.details

    mail to: "contact@the-unbranded.com", subject: "New Service Inquiry", from: 'contact@the-unbranded.com'
  end
end

 