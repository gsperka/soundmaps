class TracksController < ActionController::Base


	def create
		@track = Track.new(track_params)
		if @track.save
			@track.url = @track.clip.url.to_s
			@track.save
			 redirect_to root_path
		else
			# render 'new'
		end
	end

	def show
	end

	def track_params
		params.require(:track).permit(:clip, :title, :description, :longitude, :latitude)
	end
end
