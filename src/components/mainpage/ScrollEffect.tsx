"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-45, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden">
      <motion.div
        className="scroller text-nowrap whitespace-nowrap"
        style={{ x }}
      >
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section className="bg-[#b70027] text-[#fe2a29] py-5 overflow-hidden flex justify-center">
      <div className="max-w-[1100px] w-full">
        <ParallaxText baseVelocity={2}>
          FIGHT TO PROTECT OUR CHILDREN | FIGHT AGAINST OPPRESSION | FIGHT TO
          MAKE CRYPTO GREAT AGAIN |
        </ParallaxText>
      </div>
    </section>
  );
}
