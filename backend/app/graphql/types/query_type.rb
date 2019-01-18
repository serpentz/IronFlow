
Types::QueryType = GraphQL::ObjectType.define do
  name"QueryType"

  field :users, !types[Types::UserType] do
    resolve -> (_obj, args, _ctx) do
        User.all
      end
    end

  field :user, Types::UserType do
      argument :id , !types.Int
      resolve -> (_obj, args, _ctx) do
          User.find(args[:id])
        end
      end

  field :questions, !types[Types::QuestionType] do
    resolve -> (_obj, args, _ctx) do
        Question.all
      end
    end

  end
