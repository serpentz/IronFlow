class AddViewcount < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :view_count, :integer 
  end
end
