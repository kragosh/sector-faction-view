import React from 'react';
import FactionView from "./FactionView";

function App() {
    return (
        <div className="App">
            <main>
                <div className="flex flex-row">
                    <div className="fixed left-0 -bottom-3 opacity-70">
                        <img width="450" src="images/palm1.png" alt="" />
                    </div>
                    <div className="fixed right-0 -bottom-3 opacity-70">
                        <img width="450" src="images/palm2.png" alt="" />
                    </div>
                </div>
                <div className="mt-2">
                    <FactionView/>
                </div>
            </main>
        </div>
    );
}


export default App;
