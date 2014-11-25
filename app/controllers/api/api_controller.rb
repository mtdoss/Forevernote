module Api
  class ApiController < ApplicationController
    before_action :require_signed_in!
  
    #probably need more validations here - should only be able to see own notebook
  end
end
