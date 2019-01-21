Types::CategoryType = GraphQL::ObjectType.define do
  name 'Category'

  field :id, !types.ID
  field :title, types.String
end
