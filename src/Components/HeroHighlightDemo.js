// import React from "react";
// import { motion } from "framer-motion";
// import { HeroHighlight, Highlight } from "./hero-highlight";

// export function HeroHighlightDemo() {
//   return (
//     <HeroHighlight>
//       <div className="text-center mx-auto">
//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
//           Let us find your <Highlight className="text-black dark:text-white">perfect</Highlight>
//         </h2>
//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
//           <Highlight className="text-black dark:text-white">Product.</Highlight>
//         </h2>
//         <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
//           Chat and Try It Out!
//         </p>
//       </div>
//     </HeroHighlight>
//   );
// }

// export default HeroHighlightDemo;


"use client";
import React from "react";
import { Highlight } from "./hero-highlight";

export function HeroHighlightDemo() {
  return (
    <div className="text-center mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
        Let us find your <Highlight>perfect</Highlight>
      </h2>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
        <Highlight>Product.</Highlight>
      </h2>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
        Chat and Try It Out!
      </p>
    </div>
  );
}

export default HeroHighlightDemo;
