import useSWR from 'swr'
import React from "react";

const fetcher = (...args) => fetch(...args).then(res => res.json())
function ChiaOutput() {
  console.log('woah wtf')
  const { data, mutate, error, isValidating } = useSWR('/api/hello', fetcher)

  if (error) return <div>failed to load</div>
  if (isValidating) return <div>loading...</div>
  return ( <div><button onClick={mutate}>refresh</button><div style={{whiteSpace: "pre-wrap"}} className="mono">
  { data.show } 
  { data.farm}
  </div></div>)
}


function HomePage() {
  return (
    <div>
    <ChiaOutput></ChiaOutput></div> 
    
  )

}

export default HomePage