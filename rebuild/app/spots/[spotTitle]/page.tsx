import authOptions from '@/app/api/auth/authOptions'
import prisma from '@/lib/prismadb'
import { get } from 'http'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'
import Link from 'next/link'
import Comment from './components/comment'

interface Props {
  params: { spotTitle: string }
}

const SpotPage = async ({ params }: Props) => {
  // const title = await prisma.spot.findUnique
  const session = await getServerSession(authOptions)

  const spotTitle = parseInt(params.spotTitle)

  const spot = await prisma.spot.findUnique({
    where: { id: spotTitle }
  })

  const comments = await prisma.comment.findMany({
    where: {
      spotId: parseInt(params.spotTitle)
    }
  })

  return (
    <>
      {/* <div>{spot?.title}</div> */}

      <section className= 'body-font overflow-hidden'>
        <div className='container px-5 py-14 mx-auto'>
          <div className='flex flex-col -m-12 items-center'>
            <div className='m-12 p-5 md:w-3/5 flex flex-col items-start bg-slate-300 rounded-lg'>
              <h2 className='sm:text-3xl text-2xl title-font font-medium  mt-4 mb-2'>
                {spot?.title}
              </h2>
              <span className='inline-block py-1 px-2 mb-2 rounded bg-gray-800 text-white text-opacity-75 text-xs font-medium tracking-widest'>
                {spot?.city}, {spot?.state}
              </span>
              {spot && (
                <Image
                  src={spot.imageUrl}
                  alt=''
                  width={600}
                  height={400}
                  priority
                />
              )}
              <p className='leading-relaxed mb-8 mt-2 w-2/3'>{spot?.description}</p>

              <a className='inline-flex items-center'>
                <img
                  alt='blog'
                  src={`${session?.user?.image}`}
                  className='w-12 h-12 rounded-lg flex-shrink-0 object-cover object-center'
                />
                <span className='flex-grow flex flex-col pl-4'>
                  <span className='title-font font-medium'>
                    {session?.user?.name}
                  </span>
                  <span className='text-gray-500 text-xs tracking-widest mt-0.5'>
                    FPV PILOT
                  </span>
                </span>
              </a>
            </div>

            <div className='p-8 md:w-1/2 flex flex-col items-start'>
              <span className='inline-block title-font py-1 rounded text-2xl font-medium  mt-4 mb-2'>
                COMMENTS
              </span>
              <div className='flex gap-2 flex-col w-full'>
                {comments.map(comment => (
                  <div key={comment.id}>
                    <Comment comment={comment} />
                  </div>
                ))}
              <div>
                <button className='btn btn-accent mb-3'>
                  <Link href={`/spots/${params.spotTitle}/newComment`}>
                    Add Comment
                  </Link>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpotPage
