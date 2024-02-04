import FactionItem, {AdditonalFactionProps, Faction, FactionCardProps} from "./FactionItem";
import {useEffect, useState} from "react";
import AdditionalData from "./data";

type FactionOverview = {
    name: string;
    count: number;
    online: number;
}

interface IFactionOverviewDictionary {
    [index: string]: FactionOverview;
}

let factionOverview: FactionOverview[] = [];

async function getFactionInformation() {
    const response = await fetch('https://api.bitdevil2k16.net/demo/leitstellen');
    const data = await response.json();

    let factionCards: FactionCardProps[] = []

    data.map((faction: Faction) => {
        faction.numbers.map((number) => {
            factionCards.push({
                key: number.number,
                name: number.name,
                number: number.number,
                text: number.description,
                available: number.available,
                image: faction.image,
                additional: AdditionalData.find((row) => row.number === number.number) || getEmptyAdditionalData()
            });
        });
    });

    let factionOverviewDict: IFactionOverviewDictionary = {alle: {name: "Alle", count: 0, online: 0}};
    factionCards.map((faction: FactionCardProps) => {
        const type = faction.additional.type;
        if (factionOverviewDict[type] === undefined) {
            factionOverviewDict[type] = {
                name: type,
                count: 0,
                online: 0
            };
        }
        factionOverviewDict[type].count++;
        factionOverviewDict["alle"].count++;
        if (faction.available) {
            factionOverviewDict[type].online++;
            factionOverviewDict["alle"].online++;
        }
    });

    factionOverview = Object.values(factionOverviewDict);

    return factionCards;
}

function getEmptyAdditionalData(): AdditonalFactionProps {
    return {
        number: 0,
        name: "",
        additionalImage: "",
        text: "",
        workingHours: "",
        type: "Sonstiges"
    };
}


function FactionView(): JSX.Element {
    function applyFilter(e: any, key: string) {
        setFilter(key);
        console.log(key);
    }

    const [data, setData] = useState<FactionCardProps[]>([]);
    const [overview, setOverview] = useState<FactionOverview[]>([]);
    const [filter, setFilter] = useState<string>("Alle");
    useEffect(() => {
        getFactionInformation()
            .then(data => {
                    setData(data);
                    setOverview(factionOverview)
                }
            );
        setInterval(() => {
            getFactionInformation()
                .then(data => {
                        setData(data);
                        setOverview(factionOverview)
                    }
                );
        }, 10000);
    }, [])

    return (
        <>
            <div className="flex justify-center">
                <div className="w-9/12">
                    <div className="grid grid-cols-6">
                        {overview.map((faction) => {
                            let color: string = "text-gray-700";
                            if (faction.online > 0) {
                                color = "text-gray-100"
                            }

                            return (

                                <div onClick={(e) => applyFilter(e, faction.name)} key={faction.name}
                                     className={"rounded-lg text-center m-3 p-2 " + (filter === faction.name ? "bg-neutral-400" : "bg-neutral-900")}>
                                    <p className={color}>{faction.name} {faction.online}/{faction.count}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="cards">
                {data.filter(card => filter === "Alle" || card.additional.type === filter).filter(faction => faction.available).map((faction) => {
                    return (<FactionItem
                        key={faction.number}
                        name={faction.name}
                        text={faction.text}
                        number={faction.number}
                        available={faction.available}
                        image={faction.image}
                        additional={faction.additional}
                    />)
                })}
                {data.filter(card => filter === "Alle" || card.additional.type === filter).filter(faction => !faction.available).map((faction) => {
                    return (
                        <FactionItem
                            key={faction.number}
                            name={faction.name}
                            text={faction.text}
                            number={faction.number}
                            available={faction.available}
                            image={faction.image}
                            additional={faction.additional}
                        />)
                })}
            </div>
        </>
    );
}

export default FactionView;