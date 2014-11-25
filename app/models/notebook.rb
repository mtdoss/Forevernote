class Notebook < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :user


  def is_member?(user)
    user.id == self.user_id
  end
end
