Soundmap
=========

This is a rails app that allows you to upload and listen to sounds from across the globe.

Getting Started
===============



1) Requirements: postgresql, Amazon S3 API keys in .env file (see below)

2) Run the following commands from the root directory after you have cloned the repo.

```
bundle

rake db:create

rake db:migrate

rake db:seed
```

3) Create file '.env' in app root directory and add your Amazon S3 API keys with the following syntax:

```
S3_BUCKET_NAME= your bucket name
AWS_ACCESS_KEY_ID= your access key
AWS_SECRET_ACCESS_KEY= your secret access key
```

4) Run the rails server:

```
rails server
```

5) Then go to 'localhost:3000' in your browser to view SoundMap.

Group Members:
==============

Jacky, Lydia, Brian, Gary


Useful links to guides for file uploading

https://devcenter.heroku.com/articles/paperclip-s3#update-database

https://github.com/thoughtbot/paperclip

Link to dotenv gem for adding s3 keys securely
https://github.com/bkeepers/dotenv



*********

