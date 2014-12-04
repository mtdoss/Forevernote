module Api
  class TagsController < ApiController
    def index
      @tags = current_user.tags
      render json: @tags
    end
  end
end