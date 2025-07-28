import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, scale: 1, delay: 0.5, duration: 1, ease: "power2.out" })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1, duration: 0.8, ease: "power2.out" })
  }, [])

  return (
    <section className="w-full nav-height bg-gradient-to-b from-stone-900 via-amber-900/20 to-stone-800 relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title" style={{transform: 'scale(0.8)'}}>iPhone 13 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-light text-lg text-stone-400 tracking-wide">Only for the purpose of web design illustration</p>
      </div>
    </section>
  )
}

export default Hero