module Api
  class TagsController < ApiController
    def index
      @tags = Tag.all
      render json: @tags
    end
  end
end