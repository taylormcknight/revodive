// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cenotes = [
	{
		id: 1,
		name: 'Cenote 1',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
	{
		id: 2,
		name: 'Cenote 2',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
	{
		id: 3,
		name: 'Cenote 3',
		url: '/experiences/animal-encounters/orcas/orcas-norway',
		image: '/images/experiences/animal-encounters/orcas/orcas-norway.jpg',
	},
]
export default (req, res) => {
  res.statusCode = 200
  res.json(cenotes)
}