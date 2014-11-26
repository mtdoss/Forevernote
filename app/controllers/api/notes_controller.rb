module Api
  class NotesController < ApiController
    # before_action #require_notebook_member!

    def create
      @note = current_notebook.notes.new(note_params)

      if @note.save
        render json: @note
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @note = Note.find(params[:id])
      if @note.update(note_params)
        render json: @note
      else
        render json: @note.erorrs.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @note = Note.find(params[:id])
      render :show
    end

    private

    def current_notebook
      if params[:id]
        @note = Note.find(params[:id])
        @notebook = @note.notebook
      elsif params[:note]
        @notebook = Notebook.find(params[:note][:notebook_id])
      end
    end

    def note_params
      params.require(:note).permit(:title, :body, :notebook_id)
    end

  end
end