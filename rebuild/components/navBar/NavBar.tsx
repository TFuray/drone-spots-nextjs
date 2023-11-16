import Login from './Login'
import Logo from './Logo'
import NavLinks from './NavLinks'

const NavBar = () => {
  return (
    <nav className='bg-slate-700'>
      <div className=' pb-8 pl-4 h-[72px] border-b z-50 bg-slate-700'>
      <div className=' flex gap-8 justify-between place-items-center	'>
        <NavLinks />
        <div className='grow'></div>
        <Login />
        </div>
      </div>
    </nav>
  )
}
export default NavBar
