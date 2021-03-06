import { Link } from "react-router-dom";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

import useVideList from "../hooks/useVideoList";
function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideList(page);
	return (
		<div>
			{/* if videos array length is greate than 0 */}
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					next={() => setPage(page + 6)}
					loader={'Loading...'}
				>
					{videos.map((video) =>
						video.noq > 0 ? (
							<Link to={`/quiz/${video.youtubeID}`} state={{videoTitle: video.title}} key={video.youtubeID}>
								<Video
									title={video.title}
									id={video.youtubeID}
									noq={video.noq}
									key={video.youtubeID}
								/>
							</Link>
						) : (
							<Video
								title={video.title}
								id={video.youtubeID}
								noq={video.noq}
								key={video.youtubeID}
							/>
						)
					)}
				</InfiniteScroll>
			)}
			{!loading && videos.length === 0 && <div> No data found</div>}
			{error && <div>There was an error</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}

export default Videos;
