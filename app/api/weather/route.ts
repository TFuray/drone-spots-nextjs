

// export async function getServerSideProps(search: string) {
//   const API_KEY= process.env.API_KEY
//   const res = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`
//   )
//   const data = await res.json()
//   console.log(data)
//   return data
// }


export default async function handler(req, res) {
  const API_KEY= process.env.API_KEY
  const search = req.query.search
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}