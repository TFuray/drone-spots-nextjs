import Logo from './Logo'
import NavLinks from './NavLinks'

const NavBar = () => {
  return (
    <nav className='bg-slate-700'>
      <div className='pb-8 pt- pl-4 h-[72px] border-b z-50 bg-slate-700'>
        <NavLinks />
      </div>
    </nav>
  )
}
export default NavBar
