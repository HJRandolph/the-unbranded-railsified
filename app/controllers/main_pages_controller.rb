class MainPagesController < ApplicationController
  def index
    @contact = Contact.new
  end
end
