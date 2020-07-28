import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState([])
  // Helper states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Helper function to check for errors in the promise response
    function checkErrors(response) {
      // if (response.status >= 200 && response.status < 210) {
      //   setError(null)
      //   return response.json()
      // } else {
      //   setError(response.status)
      //   throw new Error(
      //     `Something went wrong on API server (status: ${response.status} "${response.statusText}").`
      //   )
      // }
      switch (response.status) {
        case 200:
        case 201:
          setError(null)
          return response.json()
        case 400:
          setError(response.status)
          console.error(
            `Something went wrong with a client (probably invalid JSON), or maybe with a server itself (bad JSON parsing/validation, status: ${response.status} "${response.statusText}").`
          )
          break
        case 500:
          setError(response.status)
          console.error(
            `Something went wrong on API server (status: ${response.status} "${response.statusText}").`
          )
          break
        default:
          setError(response.status)
          console.error(
            `Something unhandled went wrong there (status: ${response.status} "${response.statusText}").`
          )
          throw new Error(
            `Something unhandled went wrong there (status: ${response.status} "${response.statusText}").`
          )
      }
    }

    // Set a loader
    setLoading(true)

    // Fetch data
    fetch(url)
      .then(checkErrors)
      .then((responseJson) => {
        console.debug(responseJson)
        setData(responseJson)
      })
      .catch((error) => {
        // Log network error
        setError(error)
        console.error(
          `Something went wrong with the network (status: ${error}).`
        )
        // throw new Error(
        //   `Something went wrong with the network (status: ${error}).`
        // )
      })
      .finally(() => setLoading(false))

    // No cleaning needed
    // Depends on url passed
  }, [url])

  return [data, loading, error]
}

useJsonFetch.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.object,
}
