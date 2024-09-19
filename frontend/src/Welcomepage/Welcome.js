import Navbar from './Navbar';
import './Welcome.css';
import source from './pexels_videos_1409899 (2160p).mp4';
const Welcome = () => {
  return (
    <div className='wel'>
      <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
       <video src={source} autoPlay loop muted playsInline className="fullscreen-video" />
       <Navbar /> 
        <svg className='svgtag' viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Welcome
          </text>
        </svg>
      
    </div>
  );
};

export default Welcome;
