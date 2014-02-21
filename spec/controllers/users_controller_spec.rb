require 'spec_helper'

describe UsersController do
  it "gets success response from homepage" do
    get :index
    response.status.should eq(200)
  end

  # it "can login successfully" do
  #   fill_in 'Login', with: 'user1'
  #   fill_in 'Password', with: '1234'
  #   click_button 'Log in'

end
