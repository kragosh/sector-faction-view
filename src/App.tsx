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
                        <div className="text-3xl p-4 w-10/12">
                            <img src="images/lsledger.png"/>
                            <p className="mt-3"><i>Serving good and evil since 2k24</i></p>
                        </div>
                    </div>
                </div>
                        <FactionView/>
            </main>
        </div>
    );
}


export default App;
