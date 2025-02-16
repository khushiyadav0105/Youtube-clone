import './PlayVideo.css'
import PropTypes from 'prop-types';
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {useState, useEffect} from 'react'
import { API_KEY } from '../../data';

const PlayVideo = ({videoId}) => {

    const [apiData,setApiData] = useState(null);
    const fetchVideoData = async ()=>{
        //fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

        await fetch(videoDetails_url).then(res=>res.json).then(data=>setApiData(data.items[0]));
    }

    useEffect(()=>{
        fetchVideoData()
    },[])

  return (
    <div className='play-video'>

        <iframe 
    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
></iframe>



        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125
                </span>
                <span><img src={dislike} alt="" />2
                </span>
                <span><img src={share} alt="" />Share
                </span>
                <span><img src={save} alt="" />Save
                </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning easy </p>
            <p>Subscribe to gain more insights about this topic</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>I liked this video very much</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>5</span>

                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>I liked this video very much</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>5</span>

                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>I liked this video very much</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>5</span>

                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>I liked this video very much</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>5</span>

                    </div>
                </div>
            </div>

        
        </div>  


    </div>
  )
}
PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired, // videoId should be a string and required
  };
  

export default PlayVideo