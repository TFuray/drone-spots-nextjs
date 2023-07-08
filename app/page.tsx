import Header from 'components/Header'
import Link from 'next/link'
import Map from 'components/Map'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center mb-5'>
        <Header>Fly Now</Header>
        <p>#1 Resource to find new places to fly</p>
      </div>
      <div>
        <Map />
      </div>

    </>
  )
}

{
  /* </div>
      <Link href='/posts' className='btn btn-ghost underline'>
        Find Spots
      </Link>
      <Link href='/search' className='btn btn-ghost underline'>
        Search By Location
      </Link> */
}
