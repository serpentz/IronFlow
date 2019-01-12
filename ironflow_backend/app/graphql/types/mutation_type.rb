module Types
  class MutationType < Types::BaseObject
    graphql_name 'Mutation'

    field :createUser, function: Resolvers::CreateUser.new
  end
end
