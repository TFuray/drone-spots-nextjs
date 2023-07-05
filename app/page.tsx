import Link from 'next/link'
import Header from 'components/Header'

export default function Home() {
  return (
    <div>
      <Header>Next.js with TypeScript and MongoDB</Header>
      <Link href='/posts' className='btn btn-ghost underline'>
        Posts
      </Link>
      <Link href='/weather' className='btn btn-ghost underline'>
       Weather
      </Link>
    </div>
  )
}
