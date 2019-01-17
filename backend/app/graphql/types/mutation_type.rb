module Types
  class MutationType < Types::BaseObject
    graphql_name 'Mutation'

    field :createUser, function: Resolvers::CreateUser.new
    field :loginUser, function: Resolvers::SignInUser.new
    field :addHobby, function: Resolvers::AddHobby.new
  end
end