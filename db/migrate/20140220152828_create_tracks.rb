class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :user_id
      t.float :longitude  # stored as ruby object BigDecimal in database - to access longitude call .to_s
      t.float :latitude
      t.string :title
      t.text :description
      t.string :url
      t.timestamps
    end
  end
end
