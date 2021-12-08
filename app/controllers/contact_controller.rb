class ContactController < ApplicationController
  def new
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)
    
        
  end
  
  
  private 
  def message_params 
    params.require(:message).permit(:sender, :email, :request, :conumber, :details)
  end
end
