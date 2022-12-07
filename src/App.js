import { useState, useEffect } from "react";
import GiphyDisplay from "./components/GiphyDisplay";
import Button from "./components/Button";
import Form from "./components/Form";
import Random from "./components/Random";

function App() {
  const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`
  const [giphy, setGiphy] = useState(null)
  const [tag, setTag] = useState(null)
  const getTag = async (input) => {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=${input}`
    )
    const data = await response.json()
    setTag(data)
  }
  const getGiphy = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    )
    const data = await response.json()
    setGiphy(data)
  }
  return (
    <div className='outer-container'>
      <div className='left-container'>
        <Form getTag={getTag} />
        <GiphyDisplay tag={tag} />
      </div>
      <div className='right-container'>
        <Button getGiphy={getGiphy} giphy={giphy} />
        <Random giphy={giphy} />
      </div>
    </div>
  );
}

export default App;
