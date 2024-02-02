type Faction = {
    name: string;
    telephone: string;
    description: string;
    imageUrl: string;
    available: boolean;
}

function FactionItem(faction: Faction): JSX.Element {
    return (
        <div>
            <h1>{faction.name}</h1>
            <img src={faction.imageUrl} alt={faction.name}/>
            <p>{faction.description}</p>
            <p>Call us: {faction.telephone}</p>
        </div>
    );
}

export default FactionItem;
export type { Faction };
