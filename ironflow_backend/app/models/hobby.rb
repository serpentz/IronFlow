class Hobby < ApplicationRecord

  #profile relationship
  has_many :hobbies_profile
  has_many :profiles, through: :hobbies_profile

end
