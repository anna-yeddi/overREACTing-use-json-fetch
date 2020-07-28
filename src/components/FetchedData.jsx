import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function FetchedData(props) {
  const url = process.env.REACT_APP_DATA_URL + 'data',
    opts = []

  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      <h2>Data</h2>
      {loading && <p>Loading... Patience, please</p>}
      {error && <p>Oops, an error sneaked in here! Try to refresh the page.</p>}
      <div>{data.status}</div>
    </div>
  )
}

FetchedData.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any,
}

export default FetchedData
