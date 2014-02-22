class TracksController < ActionController::Base


	def create
		@track = Track.new(track_params)
		url = @track.clip.url.to_s
		p url + "-----------------------------------------------------------"
		@track.url = url

		if @track.save
			puts 'ASDLFKAJ$RLFIJF$'
			 redirect_to root_path
		else
			puts 'failfailfailfail'
			# render 'new'
		end
	end

	def show
	end

	def track_params
		params.require(:track).permit(:clip, :title, :description, :longitude, :latitude)
	end
end
