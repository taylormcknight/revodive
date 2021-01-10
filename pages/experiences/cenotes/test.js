import gql from 'graphql-tag'

const CENOTE_QUERY = gql`
    query Cenotes {
        cenotes {
            id
            title
        }
    }
`
<Query query={CENOTE_QUERY}>
  {({loading, data, error}) => {
    if (error) {
      return <div>Error {JSON.stringify(error)}</div>
    }
    if (loading) {
      return <div>Loading..</div>
    }
    return (
      <ul>
        {data.cenotes.map((cenote) => {
          return (
            <li key={`cenote__${cenote.id}`}>
              <h3>{cenote.title}</h3>
            </li>
          )
        })}
      </ul>
    )
  }}
</Query>

export default CENOTE_QUERY