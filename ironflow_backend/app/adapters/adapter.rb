module Adapter
  class Auth
    def encode_token(payload)
      # should store secret in env variable
      byebug
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign(payload)
      token
    end

    def decoded_token(token)
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      decoded_t = crypt.decrypt_and_verify token
      user_id = decoded_t.gsub('user-id:', '').to_i
      User.find_by id: user_id
    rescue e
      nil
    end

    def current_user(_token)
      decoded_token(token)
    end
  end
end
