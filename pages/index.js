import useSWR from 'swr'
import React from "react";

const fetcher = (...args) => fetch(...args).then(res => res.json())
function ChiaOutput() {
  console.log('woah wtf')
  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div style={{whiteSpace: "pre-wrap"}} className="mono">
  { data.show } 
  { data.farm}
  </div>
}


function HomePage() {
  return (
    <div><ChiaOutput></ChiaOutput></div> 
    
  )

}

export default HomePage