# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

User.create(username: 'user1', password: '1234')

50.times do 
  Track.create(user_id: 1, longitude: Faker::Address.longitude, latitude: Faker::Address.latitude, title: Faker::Lorem.word, description: Faker::Lorem.sentence, url: Faker::Internet.url)
end