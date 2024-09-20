import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse, MoveDown } from "lucide-react";
import { type CSSProperties, useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.7],
    [0.1, 1, 0.4, 0.1]
  );
  const contentX = useTransform(scrollYProgress, [0, 0.7], ["102%", "-400%"]);
  const centerOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <motion.main
      ref={ref}
      className="h-[500vh] bg-neutral-950 text-neutral-100 overflow-x-clip"
      style={
        {
          "--scale": scale,
          "--opacity": opacity,
        } as CSSProperties
      }
    >
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[300px] md:h-[500px] flex items-center justify-center aspect-square after:absolute after:inset-0 after:border-[30px] after:border-sky-500 after:scale-[var(--scale)] before:absolute before:inset-0 before:border-[30px] before:border-transparent before:scale-[var(--scale)] before:z-20 after:border-opacity-[var(--opacity)]">
        <motion.p
          className="text-5xl md:text-9xl z-10 font-bold absolute top-1/2 left-full whitespace-nowrap"
          aria-hidden
          style={{ x: contentX, y: "-50%" }}
        >
          Best of luck
        </motion.p>
        <motion.p
          className="text-5xl md:text-9xl z-20 font-bold absolute top-1/2 left-full whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#f5f5f5]"
          style={{ x: contentX, y: "-50%" }}
        >
          Best of luck
        </motion.p>

        <motion.h2
          className="text-5xl font-bold relative z-20"
          style={{ opacity: centerOpacity }}
        >
          Code By Abiee.
        </motion.h2>

        <span className="absolute top-0 w-screen h-full bg-neutral-950 z-10 left-[calc(50%*var(--scale)+50%)] origin-left scale-[var(--scale)]"></span>
      </div>

      <div className="fixed py-4 bottom-1 pointer-events-none flex justify-center left-0 w-full text-4xl font-bold">
        <Mouse />
        <MoveDown />
      </div>
    </motion.main>
  );
}
