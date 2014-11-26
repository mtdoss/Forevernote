class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :notebook_id, null: false

      t.timestamps
    end
  end
end
