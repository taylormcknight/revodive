// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const springs = [
	{
		"id": 1,
		"name": "Royal Springs",
		"image": "/images/experiences/springs/springs-cover.jpg",
		"description": "test",
		"gps": "coordinates",
		"street": "20051 157th Lane",
		"city": "O'Brien",
		"state": "Florida",
		"zip": "32038",
		"depth": 30,
		"clarity": 30,
		"marinelife": "sunfish, turtles",
		"accessibility": "auto",
		"restrooms": "No",
		"price": "Free",
		"reviews": 55,
		"price": 3500,
		"url": '/experiences/springs/florida/royal-springs',
		"slug": 'royal-springs',
		usermedia: [
			{
				"id": 1,
				"author": "Royal Springs",
				"url": '/experiences/springs/royal-springs',
				"image": "/images/experiences/springs/royal-springs/ugc/royal-springs-1.jpg",
			},
			{
				"id": 2,
				"author": "Royal Springs",
				"url": '/experiences/springs/royal-springs',
				"image": "/images/experiences/springs/royal-springs/ugc/royal-springs-2.jpg",
			}
		]
	},
	{
		"id": 2,
		"name": "Test Springs",
		"image": "/images/experiences/springs/springs-cover.jpg",
		"description": "test",
		"gps": "coordinates",
		"street": "20051 157th Lane",
		"city": "O'Brien",
		"state": "Florida",
		"zip": "32038",
		"depth": 30,
		"clarity": 30,
		"marinelife": "sunfish, turtles",
		"accessibility": "auto",
		"restrooms": "No",
		"price": "Free",
		"reviews": 55,
		"price": 3500,
		"url": '/experiences/springs/florida/royal-springs',
		"slug": 'test-springs',
	},
];

export default (req, res) => {
  res.statusCode = 200
  res.json(springs)
}

