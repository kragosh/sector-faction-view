import FactionItem, {Faction, FactionCardProps} from "./FactionItem";
import {useEffect, useState} from "react";

async function getFactionInformation() {
    const response = await fetch('https://api.bitdevil2k16.net/demo/leitstellen');
    const data = await response.json();

    let factionCards: FactionCardProps[] = []

    data.map((faction: Faction) => {
        faction.numbers.map((number) => {
            factionCards.push({
                key: number.number,
                name: faction.name,
                number: number.number,
                available: number.available,
                image: faction.image
            });
        });
    });
    return factionCards;
}

function FactionView(): JSX.Element {
    const [data, setData] = useState<FactionCardProps[]>([]);
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
            <div className="p-5 text-3xl text-center text-gray-300">Offen</div>
            {data.filter(faction => faction.available).map((faction) => {
                return (<FactionItem
                    key={faction.number}
                    name={faction.name}
                    number={faction.number}
                    available={faction.available}
                    image={faction.image}
                />)
            })}
            <div className="p-5 text-3xl text-center text-gray-300">Geschlossen</div>
            {data.filter(faction => !faction.available).map((faction) => {
                return (
                    <FactionItem
                        key={faction.number}
                        name={faction.name}
                        number={faction.number}
                        available={faction.available}
                        image={faction.image}
                    />)
            })}
        </div>
    );
}

export default FactionView;