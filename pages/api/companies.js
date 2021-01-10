// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const companies = [
	{
		id: 1,
		name: 'Company test',
		url: '/company/',
		image: '/vendors/vendor-1.jpg'
	},
]
export default (req, res) => {
  res.statusCode = 200
  res.json(companies)
}

