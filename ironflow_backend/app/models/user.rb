class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 5}

  has_one :profile

  has_many :questions
  has_many :answers

  has_secure_password

  after_create :init

  def init
    Profile.create(user: self)
  end

end
