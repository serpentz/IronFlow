module Adapter
  class Auth

    def secret
       Rails.application.credentials.secret_key_base.byteslice(0..31)
   end

    def algorithm
       ActiveSupport::MessageEncryptor.new(secret, cypher: 'aes-256-cbc')
    end

    def encode_token(payload)
      # should store secret in env variable
      token = algorithm.encrypt_and_sign(payload)
      token
    end

    def decoded_token(token)
      decoded_t = algorithm.decrypt_and_verify token

      user_id = decoded_t.split(" ")[1]
      user_id
    rescue Exception => e
      end
    def current_user(_token)
      decoded_token(_token)
    end
  end
end
