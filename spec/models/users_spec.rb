require 'spec_helper'

feature "user browsing the website" do
  context "on homepage" do
    it "can visit home page" do
      visit root_path
      expect(page).to have_content("SoundMap")
    end

    it "can click link to signup page" do
      visit root_path
      click_link "Sign Up"
      expect(page).to have_content("Please Sign Up")
    end
  end
end
