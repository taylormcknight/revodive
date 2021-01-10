// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const experiencecategories = [

	{
		id: 1,
		name: 'Springs',
		url: '/experiences/springs',
		image: '/images/experiences/springs/springs-cover.jpg'
	},/*
		{
		id: 2,
		name: 'Animal Enounters',
		url: '/experiences/animal-encounters',
		image: '/images/experiences/animal-encounters/animal-encounters-cover.jpg'
	},
	{
		id: 3,
		name: 'Cenotes',
		url: '/experiences/cenotes',
		image: '/images/experiences/cenotes/cenotes-cover.jpg'
	},
	{
		id: 4,
		name: 'Conservation Projects',
		url: '/experiences/conservation-projects',
		image: '/images/experiences/conservation-projects/conservation-projects-cover.jpg'
	},
	
	{
		id: 5,
		name: 'Blue Holes',
		url: '/experiences/blue-holes',
		image: '/images/experiences/blue-holes/blue-holes-cover.jpg'
	},
	{
		id: 5,
		name: 'Reefs',
		url: '/experiences/reefs',
		image: '/images/experiences/reefs/reefs-cover.jpg'
	},
	{
		id: 7,
		name: 'Wrecks',
		url: '/experiences/Wrecks',
		image: '/images/experiences/wrecks/wrecks-cover.jpg'
	},
	*/

]
export default (req, res) => {
  res.statusCode = 200
  res.json(experiencecategories)
}

