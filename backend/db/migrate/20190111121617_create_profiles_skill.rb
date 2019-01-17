class CreateProfilesSkill < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles_skills do |t|
      t.belongs_to :profile, foreign_key: true
      t.belongs_to :skill, foreign_key: true

      t.timestamps
    end
  end
end
