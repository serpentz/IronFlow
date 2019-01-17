Types::ProfileType = GraphQL::ObjectType.define do
  name"Profile"

  field :id, !types.ID
  field :quote, !types.String
end
