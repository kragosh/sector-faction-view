type Faction = {
    name: string;
    numbers: FactionNumbers[];
    anyavailable: boolean;
    image: string;
}

type FactionNumbers = {
    name: string;
    number: number;
    available: boolean;

}


/**
 * @param faction
 * @constructor
 */
function FactionItem(faction: Faction): JSX.Element {
    return (
        <>
            {faction.numbers.map((number) => {
                return <div className="flex justify-center">
                    <div
                        className="flex items-center bg-neutral-800 shadow-lg rounded-lg overflow-hidden p-4 m-4 border w-9/12">
                        <div className="w-1/4">
                            <img height="400px" src={faction.image} alt={faction.name}/>
                        </div>
                        <div className="w-3/4 pl-4">
                            <p className="font-bold text-lg text-white">{faction.name}</p>
                            <p className="text-gray-300">Call us: {number.number}</p>
                            {(number.available)
                                ? <p className="text-green-500">Verfügbarkeit: Verfügbar</p>
                                : <p className="text-red-500">Verfügbarkeit: Nicht verfügbar</p>
                            }
                        </div>
                    </div>
                </div>
            })}

        </>
    )
        ;
}

export default FactionItem;
export type {Faction};

/**
 * <div class="flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4">
 * <!-- Logo Bereich -->
 * <div class="w-1/4">
 * <img src="pfad/zum/firmenlogo.png" alt="Firmenlogo" class="w-full h-auto">
 *</div>
 *
 * <!-- Text Bereich -->
 * <div class="w-3/4 pl-4">
 * <p class="font-bold text-lg">Firmenname</p>
 * <p class="text-gray-600">Leitstellentelefonnummer: 0123-456789</p>
 * <p class="text-gray-600">Hier steht ein Freitext.</p>
 * <p class="text-green-500">Verfügbarkeit: Verfügbar</p> <!-- Grüner Text für Verfügbarkeit -->
 * </div>
 * </div>
 */