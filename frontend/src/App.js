import './App.css';
import Home from './Components/Home/Home';
import VideoPage from './Components/VideoPage/VideoPage';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import { Box } from '@mui/system';
function App() {

  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/video/:id"  element={<VideoPage/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
