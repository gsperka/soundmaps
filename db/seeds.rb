# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

User.create(username: 'user1', password: '1234', password_confirmation: '1234', email: Faker::Internet.email)
User.create(username: 'user2', password: '1234', password_confirmation: '1234', email: Faker::Internet.email)

20.times do
  Track.create(user_id: 1, longitude: Faker::Address.longitude, latitude: Faker::Address.latitude, title: Faker::Lorem.word, description: Faker::Lorem.sentence, url: 'http://a.tumblr.com/tumblr_lru9k44AkK1qjt2y4o1.mp3')
end

20.times do
  Track.create(user_id: 2, longitude: Faker::Address.longitude, latitude: Faker::Address.latitude, title: Faker::Lorem.word, description: Faker::Lorem.sentence, url: "http://a.tumblr.com/tumblr_lru9k44AkK1qjt2y4o1.mp3")
end
