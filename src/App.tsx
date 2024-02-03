import React from 'react';
import FactionView from "./FactionView";

function App() {
    return (
        <div className="App">
            <main>
                <div className="flex flex-row">
                    <div className="w-2/12 content-center">
                        <div className="size-56">
                        </div>
                    </div>
                    <div className="">
                        <div className="text-3xl p-5 w-10/12 text-gray-200">
                            <img src="images/lsledger.png"/>
                            <i>Serving good and evil since 2k24</i>
                        </div>
                    </div>
                </div>
                        <FactionView/>
            </main>
        </div>
    );
}


export default App;
