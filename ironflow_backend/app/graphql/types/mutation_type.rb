module Types
  class MutationType < Types::BaseObject
    graphql_name 'Mutation'

    field :createUser, function: Resolvers::CreateUser.new
    field :loginUser, function: Resolvers::SignInUser.new
    field :addHobby, function: Resolvers::AddHobby.new
    field :createQuestion, function: Resolvers::CreateQuestion.new
    field :createAnswer, function: Resolvers::CreateAnswer.new
    field :getProfile, function: Resolvers::GetProfile.new

  end
end
