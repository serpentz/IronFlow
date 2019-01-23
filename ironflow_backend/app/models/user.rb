class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 5 }

  has_one :profile

  has_many :questions
  has_many :answers

  has_secure_password

  after_create :init

  def init
    self.profile = Profile.create(user: self)
    self.image_url ||= "https://www.score.org/sites/all/themes/custom/score/src/images/fpo_avatar.png"
  end
end
