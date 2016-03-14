class BlogController < ApplicationController
	respond_to :html, :json
	before_action :get_post, except: [:index, :create]
  skip_before_action :verify_authenticity_token

	def index
	  	@post = Post.order(created_at: :desc)
	    #@movie = Movie.all
	    respond_with(@posts) do |format|
	      
			 format.json { render :json => @post.as_json }
     		format.html
	      # format.json  { render :json => { :posts => @post.as_json, 
	      #           						:movies => @movie.as_json }}
	     
	  	end
	end


	

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post.as_json, status: :ok
    else
      render json: {post: @post.errors, status: :no_content}
    end
  end       

  def show
      respond_with(@post.as_json)
  end
 

  def update
    if @post.update_attributes(post_params)
      render json: @post.as_json, status: :ok 
    else
      render json: {post: @post.errors, status: :unprocessable_entity}
    end
  end

  def destroy
    @post.destroy
    render json: {status: :ok}
  end

  private

  def post_params
    
    params.fetch(:post, {}).permit(:title, :subtitle,  :category,:content, :category_color)
  end

  def get_post
    @post = Post.find(params[:id])
    render json: {status: :not_found} unless @post
  end

end
