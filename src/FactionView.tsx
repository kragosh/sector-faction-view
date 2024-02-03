import FactionItem, {Faction} from "./FactionItem";
import {useEffect, useState} from "react";

async function getFactionInformation() {
    const response = await fetch('https://api.bitdevil2k16.net/demo/leitstellen');
    const data = await response.json();
    return data;
}

function FactionView(): JSX.Element {
    const [data, setData] = useState<Faction[]>([]);
    useEffect(() => {
        getFactionInformation()
            .then(data =>
                setData(data)
            );
        setInterval(() => {
            getFactionInformation()
                .then(data =>
                    setData(data)
                );
        }, 10000);
    }, [])
    return (
        <div className="cards">
            {data.map((faction) => {
                return (
                    <FactionItem
                        name={faction.name}
                        numbers={faction.numbers}
                        anyavailable={faction.anyavailable}
                        image={faction.image}
                    />
                );
            })}
        </div>
    );
}

export default FactionView;