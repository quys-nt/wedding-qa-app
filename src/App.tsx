import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Mainvisaul from './components/MainVisual/Mainvisaul'
import Schedule from './components/Schedule/Schedule'
import Local from './components/Local/Local'
import ThanksYou from './components/ThanksYou/ThanksYou'
import Footer from './components/Footer/Footer'
import Invitation from './components/Invitation/Invitation'
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    ScrollTrigger.refresh();
    if (window.innerWidth < 1024) {
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      });
    }
    return () => {
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize", // Trở về mặc định
      });
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".invitation_img-left",
        { xPercent: -100, opacity: 0 },
        {
          xPercent: 0, opacity: 1, duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.invitation_img-left',
            start: "top center",
            toggleActions: "play none none reverse",
            markers: true,
          }
        }
      )
      gsap.fromTo(
        ".invitation_img-right",
        { xPercent: 100, opacity: 0 },
        {
          xPercent: 0, opacity: 1, duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.invitation_img-right',
            start: "top center",
            toggleActions: "play none none reverse",
            markers: true,
          }
        },
      )
      // gsap Local
      const timelineLocal = gsap.timeline({
        scrollTrigger: {
          trigger: '.local',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: true,
        }
      });
      timelineLocal.fromTo(
        ".local_heading-local",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4 }
      )
        .from(
          ".itemLeft",
          { x: -100, opacity: 0, duration: 0.8 },
        )
        .from(
          ".itemRight",
          { x: 100, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
      // gsap Schedule
      gsap.fromTo('.schedule_animation', {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        delay: 0.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.schedule',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
      //gsap thanks
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.items01',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: true,
        }
      })

      const tl2 = gsap.timeline({
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.items02',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: true,
        }
      })

      tl.from(
        ".title01", {
        y: -30,
        opacity: 0,
        ease: "back.out(1.7)",
      }).from(
        ".intro01", {
        y: 30,
        opacity: 0,
      })

      tl2.from(
        ".title02", {
        y: -30,
        opacity: 0,
        ease: "back.out(1.7)",
      }).from(
        ".intro02", {
        y: 30,
        opacity: 0,
      })
    });
    return () => ctx.revert();
  }, []);
  return (
    <main>
      <Mainvisaul />
      <Invitation />
      <Local />
      <Schedule />
      <ThanksYou />
      <Footer />
    </main>
  )
}

export default App
