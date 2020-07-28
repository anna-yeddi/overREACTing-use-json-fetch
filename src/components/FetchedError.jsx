import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function FetchedError(props) {
  const url = process.env.REACT_APP_DATA_URL + 'error',
    opts = []

  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      <h2>Error: {error}</h2>
      {loading && <p>Loading... Patience, please</p>}
      {error && <p>Oops, an error sneaked in here! Try to refresh the page.</p>}
    </div>
  )
}

FetchedError.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any,
}

export default FetchedError
