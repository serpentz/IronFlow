
  Types::UserInputType  = GraphQL::InputObjectType.define do
    name"UserInput"

      argument :name, types.String
      argument :email, types.String
      argument :password, types.String

  end
