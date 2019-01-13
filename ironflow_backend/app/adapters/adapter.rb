module Adapter
  class Auth
    def encode_token(payload)
      # should store secret in env variable
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign(payload)
    end

    def auth_header(request:)
      # { Authorization: 'Bearer <token>' }
      request.headers['Authorization']
    end

    def decoded_token(request:)
      if auth_header(request: request)

        begin
          crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
          token = crypt.decrypt_and_verify auth_header(request: request).split(' ')[1]
          user_id = token.gsub('user-id:', '').to_i
          User.find_by id: user_id
        rescue e
          nil
        end
      end
    end

    def current_user(request:)
      if decoded_token(request: request)
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end
  end
end
