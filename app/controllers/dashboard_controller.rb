class DashboardController < ApplicationController
	respond_to :html, :json

	def index
	 @post = Post.all
    #@movie = Movie.all
    

    respond_with(@info) do |format|
       format.json  { render :json => {:posts => @post.as_json }}

      # format.json  { render :json => { :posts => @post.as_json, 
      #           						:movies => @movie.as_json }}
      format.html
    end
	end
end
