Soundmaps
=========

Application that allows you to upload and sample soundbytes from across the globe.

Getting Started
===============

Run the following commands from the root directory after you have cloned the repo.

1) bundle

2) rake db:create

3) rake db:migrate

4) rake db:seed

Start a local server on your machine by using the following command.

1) rails server

Open browser and enter the URL 'localhost:3000' to view SoundMap.

Group Members:
==============

Jacky, Lydia, Brian, Gary


Useful links to guides for file uploading

https://devcenter.heroku.com/articles/paperclip-s3#update-database

https://github.com/thoughtbot/paperclip

Link to dotenv gem for adding s3 keys securely
https://github.com/bkeepers/dotenv



*********
Add a .env file to your root directory and add your s3 keys like so,

S3_BUCKET_NAME= your bucket name
AWS_ACCESS_KEY_ID= your access key
AWS_SECRET_ACCESS_KEY= your secret access key
