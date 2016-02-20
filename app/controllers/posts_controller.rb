class PostsController < ApplicationController

	def index
		@post = Post.all
		respond_with(@posts) do |format|
			format.json { render :json => @post.as_json }
			format.html
		end
	end

	def create
	end

	def show
	end

	def update
	end

	def destroy
	end

end
