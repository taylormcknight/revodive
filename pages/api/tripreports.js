// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const animals = [
	{
		id: 1,
		name: 'Orca',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
	{
		id: 2,
		name: 'Blue Whale',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
	{
		id: 3,
		name: 'Whale Shark',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
]
export default (req, res) => {
  res.statusCode = 200
  res.json(animals)
}