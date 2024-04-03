/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';

function App() {
    const [likes, setLikes] = useState(0);

    function HandleClick () {
        setLikes(likes + 1)
    }

    return (
        <>
        <Header name="Pop" />
        <button onClick={HandleClick}>Like ({likes})</button>
        </>
    );
}

export default App
