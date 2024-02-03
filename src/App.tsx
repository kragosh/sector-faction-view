import React from 'react';
import FactionView from "./FactionView";

function App() {
    return (
        <div className="App">
            <main>
                <div className="flex flex-row">
                    <div className="w-1/5 content-center">
                        <div className="size-64">
                            <img height="px" src="images/logo.webp"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-6xl p-5 text-gray-200"><img src="images/lsledger.png"/></div>
                    </div>
                </div>
                <FactionView/>
            </main>
        </div>
    );
}


export default App;
