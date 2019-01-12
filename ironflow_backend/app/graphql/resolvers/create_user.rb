module Resolvers
  class CreateUser < GraphQL::Function
    # TODO: define return fields

    argument :user, Types::UserInputType

    type do
          name 'SigninPayload'

          field :token, types.String
          field :user, Types::UserType
          field :errors, types.String
        end

    # TODO: define resolve method
    def call(_obj, args, _ctx)


           @user = User.create args[:user].to_h


           # ensures we created the user
          if !@user.valid? then
            return OpenStruct.new({

              errors: @user.errors.full_messages.join(", ")
            })

          end
           # return unless user.authenticate(input[:password])

          crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
           token = crypt.encrypt_and_sign("user-id:#{ @user.id }")

           OpenStruct.new({
             user: @user,
             token: token
           })
    end

  end

  class CreateUser < GraphQL::Function
    # TODO: define return fields

    argument :user, Types::UserInputType

    type do
          name 'SigninPayload'

          field :token, types.String
          field :user, Types::UserType
          field :errors, types.String
        end

    # TODO: define resolve method
    def call(_obj, args, _ctx)


           @user = User.create args[:user].to_h


           # ensures we created the user
          if !@user.valid? then
            return OpenStruct.new({

              errors: @user.errors.full_messages.join(", ")
            })

          end
           # return unless user.authenticate(input[:password])

          crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
           token = crypt.encrypt_and_sign("user-id:#{ @user.id }")

           OpenStruct.new({
             user: @user,
             token: token
           })
    end

  end
end
