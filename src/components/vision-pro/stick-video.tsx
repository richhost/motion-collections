import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type StickVideoProps = {
	title: string;
	content: string;
	videoSrc: string;
};

export const StickVideo = (props: StickVideoProps) => {
	const { title, content, videoSrc } = props;

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

	return (
		<div>
			<motion.div className="h-screen sticky top-0 -z-10 overflow-hidden">
				<video
					style={{ maxWidth: 'none' }}
					className="absolute w-full h-full inset-0 object-cover"
					muted
					loop
					autoPlay
					playsInline
					src={videoSrc}
				></video>
				<motion.div style={{ opacity }} className="bg-black/50 absolute inset-0"></motion.div>
			</motion.div>

			<div className="min-h-screen pb-[100vh] w-full text-white text-center px-5 md:px-10">
				<motion.div ref={ref} className="max-w-4xl mx-auto">
					<h2 className="mb-2 text-xl md:mb-4 md:text-3xl font-bold">{title}</h2>
					<p className="text-3xl font-bold md:text-5xl">{content}</p>
				</motion.div>
			</div>
		</div>
	);
};
