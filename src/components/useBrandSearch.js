import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useBrandSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [brands, setBrands] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBrands([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setBrands(prevBrands => {
        return [...new Set([...prevBrands, ...res.data.docs.map(b => b.title)])]
      })
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, brands, hasMore }
}