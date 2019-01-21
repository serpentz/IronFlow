Types::AnswerType = GraphQL::ObjectType.define do
  name 'Answer'

  field :id, !types.ID
  field :statement, !types.String
  field :user, -> { Types::UserType }
end
