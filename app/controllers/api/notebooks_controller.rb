module Api
  class NotebooksController < ApiController
    def create
      @notebook = current_user.notebooks.new(notebook_params)

      if @notebook.save
        render json: @notebook
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @notebook = current_user.notebooks.find(params[:id])
      @notebook.try(:destroy)
      render json: {}
    end

    def index
      @notebooks = current_user.notebooks
      render json: @notebooks
    end

    def show
      @notebook = current_user.notebooks.find(params[:id])

      if @notebook.is_member?(current_user)
        render :show
      else
        render json: ["You don't have permission to see this"], status: 403
      end
    end

    private

    def notebook_params
      params.require(:notebook).permit(:title)
    end
  end
end