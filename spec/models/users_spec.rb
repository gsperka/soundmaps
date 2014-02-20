require 'spec_helper'

feature "user browsing the website" do
  context "on homepage" do
    it "can visit home page" do
      visit users_path
      page.should have_content("Welcome to SoundMap")
    end

    it "can click link to signup page" do
      visit users_path
      click_link('signup')
      page.should have_content("Signup")
    end

    it "can click link to signin page" do
      visit users_path
      click_link('signin')
      page.should have_content("signin")
    end
  end
end
