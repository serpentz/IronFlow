class Skill < ApplicationRecord
  has_many :profiles_skill
  has_many :profiles, through: :profiles_skill
end
