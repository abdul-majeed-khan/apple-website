import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { /*heroVideo, smallHeroVideo,*/ toteme, smallToteme } from "../utils";
import { useEffect, useState } from "react";


const Hero = () => {
 const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallToteme : toteme)

 const handleVideoSrcSet = () => {
  if(window.innerWidth < 760) {
    setVideoSrc(smallToteme)
  } else {
    setVideoSrc(toteme)
  }
 }

 useEffect(() => {
  window.addEventListener('resize', handleVideoSrcSet);

  return () => {
    window.removeEventListener('resize',handleVideoSrcSet)
  }
 }, [])

  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 1.5})
    gsap.to('#cta', {opacity: 1, y: -50, delay: 2})
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="w-full flex-center flex-col mt-10">
        <div className="absolute h-5/6 w-full pt-20 top-0 justify-center">
          <p id="hero" className="hero-title mb-5">Your 10X developer is here</p>
          <p id="hero" className="hero-title">I`m MJ</p>
        </div>
        <div className="w-6/12">
          <video className="pointer-events-none" autoPlay loop muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Explore</a>
        <p className="font-normal text-xl">My journey</p>
      </div>
    </section>
  )
}

export default Hero