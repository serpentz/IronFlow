class CreateHobbiesProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :hobbies_profiles do |t|
      t.belongs_to :profile, foreign_key: true
      t.belongs_to :hobby, foreign_key: true

      t.timestamps
    end
  end
end
