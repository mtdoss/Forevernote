class Note < ActiveRecord::Base
  validates :title, :notebook_id, presence: true

  belongs_to :notebook
end
