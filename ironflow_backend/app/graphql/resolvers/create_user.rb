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
      @user = User.find_by email: args[:user][:email]

      # ensures we found the user
      unless @user
        return OpenStruct.new(
          errors: "User #{args[:user][:email]} was not found."
        )
      end
      # ensures the user's password is correct
      unless @user.authenticate(args[:user][:password])
        return OpenStruct.new(
          errors: @user.errors.full_messages.join(', ')
        )
      end
      # return unless user.authenticate(input[:password])

      token = Adapter::Auth.new.encode_token("user_id: #{@user.id}")

      OpenStruct.new(
        user: @user,
        token: token
      )
    end
  end
  class GetProfile < GraphQL::Function
    argument :token, types.String

    type do
      name 'getProfilePayload'

      field :user, Types::UserType
      field :errors, types.String
    end

    def call(_obj, args, _ctx)
      @id = Adapter::Auth.new.decoded_token(args[:token])


      @user = User.find @id.to_i

      # ensures we found the user
      unless @user
        return OpenStruct.new(
          errors: "Invalid Token"
        )
      end
      # ensures the user's password is correct


      OpenStruct.new(
        user: @user
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
        ProfilesSkill.create_or_find_by(skill_id: skill, profile: @user.profile)
      end

      OpenStruct.new(
        errors: nil
      )
    end
  end
  class CreateQuestion < GraphQL::Function
    # TODO: define return fields
    QuestionInputType = GraphQL::InputObjectType.define do
      name 'QuestionInput'

      argument :statement, types.String
      argument :categories,-> {!types[!types.String]}

    end

    argument :user,-> {Types::CurrentUserInputType}


    argument :question, !QuestionInputType


    type do
      name 'AddQuestion'

      field :errors, types.String
    end


    # TODO: define resolve method
    def call(_obj, _args, _ctx)
      @user =  User.find Adapter::Auth.new.decoded_token _args[:user][:token]


      return unless @user

      @categories = _args[:question][:categories].map do |category|    Category.find_or_create_by(title: category)  end
      @question = Question.create statement: _args[:question][:statement], user: @user ,categories: @categories

      # ensures we created the user
      unless @question.valid?
         errors =  {question: @question.errors.full_messages}
        return OpenStruct.new(
          errors: errors.to_json
        )
      end

      OpenStruct.new(
        errors: nil
      )
    end
  end
  class CreateAnswer < GraphQL::Function
    # TODO: define return fields
    AnswerInputType = GraphQL::InputObjectType.define do
      name 'AnswerInput'

      argument :statement, types.String
      argument :question_id, types.String


    end

    argument :user,-> {Types::CurrentUserInputType}


    argument :answer, !AnswerInputType


    type do
      name 'AddAnswer'

      field :errors, types.String
    end


    # TODO: define resolve method
    def call(_obj, _args, _ctx)
      @id = Adapter::Auth.new.decoded_token _args[:user][:token]


       unless @id
           OpenStruct.new(
             errors: "invalid token"
           )
       end

        @user =  User.find @id


      @answer = Answer.create statement: _args[:answer][:statement], user: @user ,question_id: _args[:answer][:question_id].to_i

      # ensures we created the user
      unless @answer.valid?
         errors =  {answer: @answer.errors.full_messages}
        return OpenStruct.new(
          errors: errors.to_json
        )
      end

      OpenStruct.new(
        errors: nil
      )
    end
  end
end
