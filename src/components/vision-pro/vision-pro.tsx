import { StickVideo } from './stick-video';

export const VisionPro = () => {
	return (
		<main>
			<StickVideo
				title="Introduction"
				content="Get started with Framer Motion and learn by exploring interactive examples."
				videoSrc="https://videos.pexels.com/video-files/20659487/20659487-uhd_2560_1440_24fps.mp4"
			/>

			<div className="h-screen flex items-center justify-center relative overflow-hidden">
				<img
					className="absolute w-full h-full inset-0 object-cover"
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
};
