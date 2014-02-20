class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :user_id
      t.references :users
      t.integer :longitude
      t.integer :latitude
      t.string :path
      t.timestamps
    end
  end
end
