import Icon from 'bs-icon'
import { FetchConfig } from 'http-react'
import Link from 'next/link'
import NavBar from './components/NavBar'
import './globals.css'
// import 'react-toastify/dist/ReactToastify.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <FetchConfig baseUrl='/api'>
        <html data-theme='bumblebee'>
          <head>
            <title>Drone Map</title>
            <meta name='description' content='Next.js' />
          </head>
          <body>
            <nav>
              <NavBar />
            </nav>
            <div className='p-8'>{children}</div>
            <Link
              as={'https://github.com/tfuray'}
              href='https://github.com/tfuray'
              target='_blank'
              className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
            >
              <Icon name='github' /> <span>Github</span>
            </Link>
            <ToastContainer />
          </body>
        </html>
      </FetchConfig>
    </ClerkProvider>
  )
}

