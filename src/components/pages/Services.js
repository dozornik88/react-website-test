import React, { useState, useRef, useCallback } from 'react'
import useBrandSearch from '../useBrandSearch'
import "../../App.css";

export default function Services() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    brands,
    hasMore,
    loading,
    error
  } = useBrandSearch(query, pageNumber)

  const observer = useRef()
  const lastBrandElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {brands.map((brand, index) => {
        if (brands.length === index + 1) {
          return <div ref={lastBrandElementRef} key={brand}>{brand}</div>
        } else {
          return <div key={brand}>{brand}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}

