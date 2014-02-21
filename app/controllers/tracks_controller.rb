class TracksController < ActionController::Base


	def create
		@track = Track.new(track_params)

		if @track.save
			puts 'ASDLFKAJ$RLFIJF$'
			# redirect_to @track
		else
			puts 'failfailfailfail'
			# render 'new'
		end
	end

	def show
	end

	def track_params
		params.require(:track).permit(:clip, :title, :description)
	end
end
