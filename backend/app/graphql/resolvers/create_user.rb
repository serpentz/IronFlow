require_relative '../../adapters/adapter.rb'
module Resolvers
  class CreateUser < GraphQL::Function
    # TODO: define return fields

    argument :user, Types::UserInputType

    type do
      name 'CreateUserPayload'

      field :token, types.String
      field :user, Types::UserType
      field :errors, types.String
    end

    # TODO: define resolve method
    def call(_obj, args, _ctx)
      byebug
      @user = User.create args[:user].to_h

      # ensures we created the user
      unless @user.valid?
        return OpenStruct.new(
          errors: @user.errors.full_messages.join(', ')
        )

      end

      @token = Adapter::Auth.new.encode_token("user_id: #{@user.id}")

      OpenStruct.new(
        user: @user,
        token: @token
      )
    end
  end

  class SignInUser < GraphQL::Function
    argument :user, Types::UserInputType

    type do
      name 'SignInPayload'

      field :token, types.String
      field :user, Types::UserType
      field :errors, types.String
    end

    def call(_obj, args, _ctx)
      user = User.find_by email: args[:user][:email]

      # ensures we found the user
      unless user
        return OpenStruct.new(
          errors: "User #{args[:user][:email]} was not found."
        )
      end
      # ensures the user's password is correct
      unless user.authenticate(args[:user][:password])
        return OpenStruct.new(
          errors: user.errors.full_messages.join(', ')
        )
      end
      # return unless user.authenticate(input[:password])

      token = Adapter::Auth.new.encode_token("user_id: #{user.id}")

      OpenStruct.new(
        user: user,
        token: token
      )
    end
  end
  class AddHobby < GraphQL::Function
    # TODO: define return fields

    argument :hobbies, -> { !types[!types.Int] }
    argument :user, types.Int

    type do
      name 'AddHobbyResponse'

      field :errors, types.String
    end

    # TODO: define resolve method
    def call(_obj, _args, _ctx)
      @user = User.find _args[:user]

      # ensures we created the user
      unless @user
        return OpenStruct.new(
          errors: 'invalid token'
        )

      end

      _args[:hobbies].each do |hobby|
        HobbiesProfile.create(hobby_id: hobby, profile: @user.profile)
      end

      OpenStruct.new(
        errors: nil
      )
    end
  end
  class AddSkill < GraphQL::Function
    # TODO: define return fields

    argument :skills, -> { !types[!types.Int] }
    argument :user, types.Int

    type do
      name 'AddSkill'

      field :errors, types.String
    end

    # TODO: define resolve method
    def call(_obj, _args, _ctx)
      @user = User.find _args[:user]

      # ensures we created the user
      unless @user
        return OpenStruct.new(
          errors: 'invalid token'
        )

      end

      _args[:skills].each do |skill|
        ProfilesSkill.create(skill_id: skill, profile: @user.profile)
      end

      OpenStruct.new(
        errors: nil
      )
    end
  end
end
