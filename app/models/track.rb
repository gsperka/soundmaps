class Track < ActiveRecord::Base

	has_attached_file :clip
  belongs_to :user

  # validates_attachment_content_type :clip, :content_type => "audio/mpeg"
  # validates_attachment_file_name :clip, :matches => /.+\.mp3/
  do_not_validate_attachment_file_type :clip
end
