Shery.mouseFollower();
//Shery.makeMagnet(".magnet");
// GSAP ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  ScrollTrigger.matchMedia({
    // For large screens
    "(min-width: 1025px)": function() {
      gsap.to("#bottle", {
        rotate: -20,
        scale: 0.5,
        //left:"50%",
        scrollTrigger: {
          trigger: "#bottle",
          start: "top top",
          end: "bottom-=40% center",
          endTrigger: "#page5",
          scrub: 1,
          pin: true,
          //pinSpacing: true,
          //markers:true,
          onComplete: function() {
            // Function to run when the animation is complete
            console.log("Animation finished!");
          }
        }
      });
    },

    // For medium screens (tablets)
    // "(min-width: 911px)": function() {
    //   gsap.to("#bottle", {
    //     rotate: -20,
    //     scale: 0.5,
    //     x: "-20vw",
    //     scrollTrigger: {
    //       trigger: "#bottle",
    //       start: "top top",
    //       end: "bottom bottom",
    //       endTrigger: "#page5",
    //       scrub: 1,
    //       pin: true,
    //       ease: Power1,
    //     }
    //   });
    // },
  });

  // Timeline animation for page elements
  let t1 = gsap.timeline();
  t1.from("#main #page1_dog_image", {
    opacity: 0,
    duration: 1,
    scale: 0.1,
  });

  t1.from("#bottle", {
    opacity: 0,
    duration: 1,
    scale: 0.2,
  });

  t1.from("#nav_top>button", {
    xPercent: 200,
  });

  // Animations for other elements
  gsap.from("#page2_part1>button", {
    scrollTrigger: {
      trigger: "#page2_part1>button",
      start: "top 70%",
    },
    xPercent: -300,
    duration: 1,
  });

  gsap.from("#page6_part6>button", {
    scrollTrigger: {
      trigger: "#page6_part2>button",
      start: "top 70%",
    },
    xPercent: 600,
    duration: 1,
  });
}

// Initialize animations
initAnimations();