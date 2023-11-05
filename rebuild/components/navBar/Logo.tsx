import Link from 'next/link'
import { RiMapFill } from 'react-icons/ri'
import { TbDrone } from 'react-icons/tb'

const Logo = () => {
  return (
    <div>
    <Link href='/'>
      <div className='h-[58px] w-[58px] relative'>
        <div className='absolute '>
          <RiMapFill stroke='gray' strokeWidth='1' size='68px' />
        </div>
        <div className='absolute left-4 top-4'>
          <TbDrone stroke='red ' strokeWidth='1' color='white' size='36px' />
        </div>
      </div>
    </Link>
</div>
  )
}
export default Logo
