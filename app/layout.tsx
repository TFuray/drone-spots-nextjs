import { FetchConfig } from 'http-react'
import './globals.css'
import Link from 'next/link'
import Icon from 'bs-icon'

function MainLayout({ children }) {
  return (
    <FetchConfig baseUrl='/api'>
      <html data-theme='coffee'>
        <head>
          <title>Drone Mapr</title>
          <meta name='description' content='A Starter with Next.js' />
        </head>
        <body>
          <div className='p-8'>{children}</div>
          <Link
            as={'https://github.com/tfuray'}
            href='https://github.com/tfuray'
            target='_blank'
            className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
          >
            <Icon name='github' /> <span>Github</span>
          </Link>
        </body>
      </html>
    </FetchConfig>
  )
}

export default MainLayout
