import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
function App() { 
  return (
    <>
      <ProfileViewerWithSearch/>
      {/* <QuoteFetcherLoader /> */}
      <QuoteFetcher/>
      {/* <Counter/> */}
    </>
  )
}

export default App
