// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Lenis from "@studio-freight/lenis/types";


// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);

// //   const lenis = new Lenis();

// //     // Connect Lenis → ScrollTrigger
// //     lenis.on("scroll", ScrollTrigger.update);

//   useEffect(() => {
//     const video = videoRef.current;

//     // Set duration of scroll control
//     const scrollDuration = 2000; // px of scroll controlling the video

//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: `+=${scrollDuration}`,
//       scrub: 1, // sync video with scroll
//       onUpdate: (self) => {
//         if (video.duration) {
//           video.currentTime = self.progress * video.duration;
//         }
//       }
//     });

//     return () => ScrollTrigger.killAll();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-[200vh] text-center overflow-hidden"
//     >
//       {/* Video background */}
//       <video
//         ref={videoRef}
//         src="/videos/about.mp4"
//         className="absolute inset-0 w-full h-full object-cover"
//         muted
//         playsInline
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* First typography */}
//       <div className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <h2 className="text-5xl md:text-6xl font-semibold text-white opacity-100">
//           Build Something That Works
//         </h2>
//       </div>

//       {/* Second typography */}
//       <div className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <h2 className="text-5xl md:text-6xl font-semibold text-white opacity-100">
//           Designed With Intention
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default About;



"use client";

const About = () => {
  return (
    <section className="relative w-full h-[250vh] overflow-hidden">

      {/* Sticky video background */}
      <div className="sticky top-0 h-screen w-full">
        <video
          src="/videos/about.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Scroll content ABOVE the video */}
      <div className="absolute inset-0 z-10">

        {/* Block 1 */}
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-5xl text-center md:text-6xl font-semibold text-white">
            When she says, “Go sleep on the couch,”
            <br />you’ll smile.
          </h2>
        </div>

        {/* Block 2 */}
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-white">
            Designed With Intention
          </h2>
        </div>

      </div>
    </section>
  );
};

export default About;



