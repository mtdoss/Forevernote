json.extract!(@notebook, :id, :title, :created_at, :updated_at)

json.notes @notebook.notes do |note|
  json.extract!(note, :id, :notebook_id, :body, :title, :created_at, :updated_at)
end
