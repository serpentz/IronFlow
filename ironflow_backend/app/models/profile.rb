class Profile < ApplicationRecord
  belongs_to :user


  #skills relationship
  has_many :profiles_skill
  has_many :skills, through: :profiles_skill

  #hobby relationship
  has_many :hobbies_profile
  has_many :hobbies, through: :hobbies_profile

  has_many :projects

end
