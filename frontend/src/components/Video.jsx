import Video from '../assets/video/poke2.mp4'

export default function IntroVideo () {
return (
    <video className='aspect-video'  autoPlay muted
    controls>
        <source src={Video} type="video/mp4" />
    </video>
)
} 
