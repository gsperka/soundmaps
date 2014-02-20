class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user].permit(:username, :password, :password_confirmation))
    @user.save!
    redirect_to root_path
  end

end
