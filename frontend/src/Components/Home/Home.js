import React, { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios'


const endpoint = 'https://a3ec66ea-7b96-4a37-ab9c-67a84676de74.mock.pstmn.io/v1/videos'

const Home = () => {

    const allGenres = [
        { label: "All Genre", value: "All" },
        { label: "Education", value: "Education" },
        { label: "Sports", value: "Sports" },
        { label: "Comedy", value: "Comedy" },
        { label: "Lifestyle", value: "LifeStyle" },
    ]
    const age = [
        
            { label: "Any age group", value: "Anyone" },
            { label: "7+", value: "7" },
            { label: "12+", value: "12" },
            { label: "16+", value: "16" },
            { label: "18+", value: "18" },
        
    ]

    const [videoList, setVideoList] = useState([])
    const [genres, setGenres] = useState(["All"])
    const [content, setContent] = useState("Anyone")

    const { enqueueSnackbar } = useSnackbar();

    const performAPICall = async () => {
        let URL = ""
        if (content === "Anyone") {
            URL = endpoint + `?genres=${genres.join(",")}`
        }
        else {
            URL = endpoint + `?title=top&genres=${genres.join(",")}&contentRating=${content}%2B`
        }
        try {
            const response = await axios.get(URL);
            const videos = response.data.videos;
            setVideoList(videos);
            return videos;
        }
        catch (e) {
            if (e.response) {
                enqueueSnackbar(e.respose.message, { variant: "error" })
            } else {
                enqueueSnackbar("something went wrong. Check that backend is running",
                    { variant: "error" })
            }
        }
        return [];
    }

    const handleGenreChange = (genre) => {
        const newGenreValue = genre.value;

        if (newGenreValue === "all") {
            setGenres(["All"])
        }
        else {
            const genreWithoutAll = genres.filter((ele) => ele !== "All");
            let nextGenres = [];
            if (genreWithoutAll.includes(newGenreValue)) {
                nextGenres = genreWithoutAll.filter((ele) => ele !== newGenreValue)
            }
            else {
                nextGenres = [...genreWithoutAll, newGenreValue];
            }
            if (nextGenres.length === 0) {
                setGenres(["All"])
            }
            else {
                setGenres(nextGenres);
            }
        }
    }
    const handleContentChange = (content) => {
        setContent(content.value)
    }

    useEffect(() => {
        performAPICall();
    }, [genres, content])

    return (

        <div>
            <Dashboard
                allGenres={allGenres}
                age={age}
                videoList={videoList}
                handleGenreChange={handleGenreChange}
                handleContentChange={handleContentChange}
                selectedGenres={genres}
                selectedContent={content}
                refresh={performAPICall}
            />
        </div>
    )
}

export default Home
