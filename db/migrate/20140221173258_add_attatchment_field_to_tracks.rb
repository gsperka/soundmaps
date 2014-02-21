class AddAttatchmentFieldToTracks < ActiveRecord::Migration
  def up
  	add_attachment :tracks, :clip
  end

  def down
  	remove_attachment :tracks, :clip
  end
end
