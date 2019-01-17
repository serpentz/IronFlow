class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|

      t.integer :vote_count
      t.string :statement
      t.references :user, foreign_key: true
      t.references :question, foreign_key: true

      t.timestamps
    end
  end
end
