import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/get-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.data}</h1>
      {/* {comments.map(comment => {
          return (
              <div key={comment.id}>
                  {comment.id}. {comment.text}
              </div>
          )
      })} */}
    </div>
  )
}