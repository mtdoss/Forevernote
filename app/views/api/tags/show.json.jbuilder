json.extract!(@tag, :id, :name, :created_at, :updated_at)

json.notes @tag.notes do |note|
  json.extract!(note, :id, :notebook_id, :body, :title, :created_at, :updated_at)
end