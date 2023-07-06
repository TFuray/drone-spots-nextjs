import Link from 'next/link'
import Header from 'components/Header'

export default function Home() {
  return (
    <div>
      <div>
        <Header>
          FPV Fly Spots
          <br/>
          {"{ Home Page }"}
      </Header>
      </div>
      <Link href='/posts' className='btn btn-ghost underline'>
        Find Spots
      </Link>
      <Link href='/search' className='btn btn-ghost underline'>
        Search By Location
      </Link>
    </div>
  )
}
