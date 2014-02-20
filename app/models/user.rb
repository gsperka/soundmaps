class User < ActiveRecord::Base
  has_secure_password
  has_many :tracks

  validates :password_digest, :presence => true, :length => { :minimum => 6 }
  validates :email, :uniqueness => true #:format => /.+@.+\..+/ # imperfect, but okay
  validates :username, :presence => true




end
