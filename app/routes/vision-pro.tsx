import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  return (
    <main>
      <StickVideo
        title="Introduction"
        content="Get started with Framer Motion and learn by exploring interactive examples."
        videoSrc="https://videos.pexels.com/video-files/20659487/20659487-uhd_2560_1440_24fps.mp4"
      />

      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <img
          className="absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1706902734937-53502170bbf1?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <StickVideo
        title="Overview"
        content="Framer Motion is a simple yet powerful motion library for React."
        videoSrc="https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
      />

      <div className="text-center text-[clamp(20px,10vw,120px)] font-bold py-20">
        Code by Abiee.
      </div>
    </main>
  );
}

const StickVideo = ({
  title,
  content,
  videoSrc,
}: {
  title: string;
  content: string;
  videoSrc: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  return (
    <div>
      <motion.div className="h-screen sticky top-0 -z-10 overflow-hidden">
        <video
          style={{ maxWidth: "none" }}
          className="absolute w-full h-full inset-0 object-cover"
          muted
          loop
          autoPlay
          playsInline
          src={videoSrc}
        ></video>
        <motion.div
          style={{ opacity }}
          className="bg-black/50 absolute inset-0"
        ></motion.div>
      </motion.div>

      <div className="min-h-screen pb-[100vh] w-full text-white text-center px-5 md:px-10">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          <h2 className="mb-2 text-xl md:mb-4 md:text-3xl font-bold">
            {title}
          </h2>
          <p className="text-3xl font-bold md:text-5xl">{content}</p>
        </motion.div>
      </div>
    </div>
  );
};
