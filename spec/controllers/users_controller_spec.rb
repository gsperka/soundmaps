require 'spec_helper'

describe UsersController do

  let(:user) {User.create(username: 'user1', password: '1234')}

  it "gets success response from homepage" do
    get :index
    response.status.should eq(200)
  end

  # it "can login successfully" do
  #   visit root_path
  #   fill_in 'Username', with: user.username
  #   fill_in 'Password', with: '1234'
  #   click_button 'Log in'
  #   page.should have_content "Profile"
  # end
end
