module Api
  class NotebooksController < ApiController



    private

    def notebook_params
      params.require(:notebook).permit(:title)
    end

  end
end