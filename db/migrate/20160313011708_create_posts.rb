class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :subtitle
      t.string :category
      t.string :content
      t.string :category_color

      t.timestamps null: false
    end
  end
end
