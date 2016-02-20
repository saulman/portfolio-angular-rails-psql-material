class Post < ActiveRecord::Base

	def as_json(options={})
    super(:include => [:addresses])
  end
  
end
