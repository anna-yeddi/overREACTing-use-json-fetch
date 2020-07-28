import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function FetchedLoading(props) {
  const url = process.env.REACT_APP_DATA_URL + 'loading',
    opts = []

  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      <h2>Loading</h2>
      {loading && <p>Loading... Patience, please</p>}
      {error && <p>Oops, an error sneaked in here! Try to refresh the page.</p>}
      <div>{data.status}</div>
    </div>
  )
}

FetchedLoading.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any,
}

export default FetchedLoading
