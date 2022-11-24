import React from 'react'
import './VideoPlayer.css'
const VideoPlayer = ({video, handleVoteChange}) => {
  return (
    <>
        <div className="container">
            <div className='iframe-parent'>
                <iframe src={`https://${video.videoLink}`}
                className="iframe-main"
                frameBorder="0"
                allow="autoplay : encrypted-media"
                allowFullScreen
                title="video"
                ></iframe>
            </div>
        </div>
        <div className="container">
            <div className='video-bar'>
                <p className='playing-title'>{video.title}</p>
                <div className={"line"}>
                    <span className={"tag views-tag"}>{video.viewCount}</span>
                    <div className={"dot"}></div>
                    <span className={"tag content-rating-tag"}>{video.contentRating}</span>
                    <div className={"dot"}></div>
                    <span className={"tag release-date-tag"}>{video.releaseDate}</span>
                    </div>
                    </div>
                    <div className="vote-container">
                        <span className="vote-pill upvote-pill"
                        onClick={()=>handleVoteChange(video._id,"upVote","increase")}>
                            <span>{video.votes.upVotes}</span>
                        </span>
                        <span className='vote-pill downvote-pill'
                         onClick={()=>handleVoteChange(video._id,"downVote","increase")}>
                            <span>{video.votes.downVotes}</span>
                        </span>
                </div>

        </div>
    </>
  )
}

export default VideoPlayer
