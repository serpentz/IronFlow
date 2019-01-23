Types::UserType = GraphQL::ObjectType.define do
  name 'User'

  field :id, types.ID
  field :name, types.String
  field :email, !types.String
  field :profile, -> { Types::ProfileType }
  field :answers,->{types[Types::AnswerType]}

  field :questions, -> { types[Types::QuestionType] }
end
