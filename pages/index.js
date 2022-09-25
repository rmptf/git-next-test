export default function Home() {

  const dataMain = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    console.log(data)
  }

  const people = dataMain()

  const animals = ["dog ","cat"]

  return (
    <div>
      <h1>New Project Hello User One {animals}</h1>
    </div>
  )
}