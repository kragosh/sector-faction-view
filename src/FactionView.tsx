import FactionItem, {Faction} from "./FactionItem";
import {useEffect, useState} from "react";

async function getFactionInformation() {
    const response = await fetch('/data.json');
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
        <div>
            {data.map((faction) => {
                return (
                    <FactionItem
                        name={faction.name}
                        telephone={faction.telephone}
                        description={faction.description}
                        imageUrl={faction.imageUrl}
                        available={faction.available}
                    />
                );
            })}
        </div>
    );
}

export default FactionView;