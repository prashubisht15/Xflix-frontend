import React from 'react'
import Header from '../Header/Header'
import Explore from '../Explore/Explore'

const Dashboard = ({ allGenres, age, videoList, selectedGenres, handleGenreChange, handleContentChange, selectedContent }) => {
  return (
    <div>
      <Header allGenres={allGenres} age={age} videoList={videoList} handleGenreChange={handleGenreChange} handleContentChange={handleContentChange} selectedGenres={selectedGenres} selectedContent={selectedContent} />

      <Explore videoList={videoList} />

    </div>
  )
}

export default Dashboard
