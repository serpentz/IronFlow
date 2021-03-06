Types::QuestionType = GraphQL::ObjectType.define do
  name 'Question'

  field :id, !types.ID
  field :statement, !types.String
  field :view_count, types.Int
  field :user, -> { !Types::UserType }
  field :categories, -> { !types[Types::CategoryType] }

  field :answers, -> { !types[Types::AnswerType] }
end
