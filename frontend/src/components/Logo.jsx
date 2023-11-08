import SiteLogo from '../assets/logo/sitelogo.svg'

export default function Logo () {
    return (
        <div className='flex justify-center'>
            <img src={SiteLogo} className='absolute z-50 w-[300px] mt-5'/>
        </div>
        
    )

    
}