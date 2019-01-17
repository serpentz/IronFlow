class Question < ApplicationRecord
  validates :user, presence: true

  belongs_to :user
  has_many :answers
  has_many :category_questions
  has_many :categories, through: :category_questions
  attribute :statement, :string, default: "This is a statement for Question #{Question.all.size()}"


end
