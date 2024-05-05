import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import '../styles/FootballStreaming.css'

const FootballStreaming = () => {

      const [isLoading, setIsLoading] = useState(true);
      const [liveStreamId, setLiveStreamId] = useState('');
      const [error, setError] = useState(null);
      
      const videoOptions = {
          playerVars: {
              autoplay: 0, // Don't autoplay the video
              controls: 1, // Show player controls
              rel: 0, // Don't show related videos at the end
              showinfo: 0, // Don't show video info
              modestbranding: 1, // Hide YouTube logo
              liveStream: 1, // Specify this for live streams
            },
        };
        
        // const onReady = () => {
        //       setIsLoading(false);
        //     };

            const FOOTBALL_API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY;
            const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
            
            useEffect(() => {

            const fetchLiveStreamStatus = async () => {
                try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?key=${FOOTBALL_API_KEY}&channelId=${CHANNEL_ID}&eventType=live&type=video&part=snippet`
                );
                const data = response.data;
                if (data.items.length > 0) {
                    const liveStreamId = data.items[0].id.videoId;
                    setLiveStreamId(liveStreamId);
                    setIsLoading(false);
                } else {
                    setError('No match currently being streamed. Check again later');
                    setIsLoading(false);
                }
                } catch (error) {
                setError('Error fetching live stream status');
                setIsLoading(false);
                }
            };
        
            const interval = setInterval(fetchLiveStreamStatus, 60000);
            fetchLiveStreamStatus();
            return () => clearInterval(interval);
            }, [FOOTBALL_API_KEY, CHANNEL_ID]);
    
  return (
    <div className="video-section__container">
<div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>MATCH STREAMING</p>
          ))}
        </div>

  <div className="actual-video-section">
    <div className="video-section">
        {isLoading && <div className="loader"></div>}
        {error ? (
            // <YouTube videoId={'Sm3VK1Lyi9c'} opts={videoOptions} onReady={onReady} />
            <p className='error-text'>No match currently being streamed, check back later.</p>
            // <p className='error-text'>COMING SOON</p>
          ) : ( liveStreamId ? (
              <YouTube videoId={liveStreamId} opts={videoOptions} />
          ) :
                <p className='error-text'>No match currently being streamed, check back later</p>
          )}
    </div>
  </div>
</div>
  )
}

export default FootballStreaming