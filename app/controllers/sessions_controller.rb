class SessionsController < ApplicationController
  def login

  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user.authenticate(params[:session][:password])
      session[:current_user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  def logout
    session[:current_user_id] = nil
    redirect_to root_path
  end
end
