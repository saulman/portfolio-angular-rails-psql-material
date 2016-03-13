# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.create([{ 
				title: 'The first time that I used Angular + Rails',
				subtitle: 'Education is everything',
				category: 'Education',
				content: "The code in this book is pulled from a git repository containing the Rails app we'll be building. The console output we'll see is generated directly from that code, so you should be able to follow along easily.
I'd still recommend you follow along at your terminal and editor. Even though you will just be typing in what you see, it'll get your fingers used to the workflow and code involved in a a Rails-powered Angular app.",
				category_color: '#ff8333'
			 }, 

			{ 	
				title: 'When we try to push to hard',
				subtitle: 'Motivation',
				category: 'Motivation',
				content: 'Some people want it to happen, some wish it would happen, others make it happen. -Michael Jordan',
				category_color: '#ff741a'
			}, 
			{ 	
				title: 'Why work can suck',
				subtitle: '',
				category: 'Life',
				content: "Let's assume for a moment that you were an alien that came to visit earth. What would your impression be if you observed employees today and how they work? Think about the things you would see. Everything from long commutes to stressful meetings, arguments and the constant attachment to a device that sends out messages and notifications. Sure, it's not all bad, but the big picture overview of work wouldn't be so positive.",
				category_color: '#ff6400'
			},
			{ 	
				title: 'Everything about Google Adsense',
				subtitle: 'Money Maker',
				category: 'WEB',
				content: "Google AdSense is a program run by Google that allows publishers in the Google Network of content sites to serve automatic text, image, video, or interactive media advertisements, that are targeted to site content and audience. These advertisements are administered, sorted, and maintained by Google. They can generate revenue on either a per-click or per-impression basis",
				category_color: '#00a383'
			}
		])