class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :user_id
      t.integer :longitude
      t.integer :latitude
      t.string :title
      t.text :description
      t.string :url
      t.timestamps
    end
  end
end
