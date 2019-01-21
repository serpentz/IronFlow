class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question
  validates :user, presence: true
  validates :question, presence: true

  after_create :init

    def init
      self.statement  ||= "This is a statement for Answer #{self.id} for Question #{self.question.id} by User #{self.user.id}"
    end

end
