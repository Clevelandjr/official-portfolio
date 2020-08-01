import React from 'react';


import Social from "./components/Social";
import Profile from "./components/Profile";

class App extends React.Component {
    render() {
        return (
            <main className="sg-container sg-home">
                <Profile />
                <Social />
            </main>
        )
    }
}

export default App;