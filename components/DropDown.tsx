import Link from "next/link"

const DropDown = () => {
  return (
    <div className='drawer drawer-end z-40'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content m-auto'>
        {/* Page content here */}
        <label htmlFor='my-drawer-4' className='drawer-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-40 min-h-auto bg-base-200 z-100 text-base-content'>
          {/* Sidebar content here */}
          <li>
          <Link href='/settings'></Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DropDown
