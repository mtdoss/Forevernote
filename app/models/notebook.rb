class Notebook < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :notes

  def is_member?(user)
    user.id == self.user_id
  end
end
