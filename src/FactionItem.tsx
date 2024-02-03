import data from "./data";

export type Faction = {
    name: string;
    numbers: FactionNumbers[];
    anyavailable: boolean;
    image: string;
}

export type FactionNumbers = {
    name: string;
    number: number;
    available: boolean;

}

export type FactionCardProps = {
    key: number;
    name: string;
    number: number;
    available: boolean;
    image: string;

}

export type AdditonalFactionProps = {
    number: number;
    name: string;
    additionalImage: string;
    text: string;
    workingHours: string;
    type: string;
}

/**
 * @param faction
 * @constructor
 */
function FactionItem(faction: FactionCardProps): JSX.Element {

    let filtered = data.filter(row => row.number === faction.number)
    let addedProps: AdditonalFactionProps;
    if (filtered.length === 0) {
        addedProps = {
            number: 0,
            name: "",
            additionalImage: "",
            text: "",
            workingHours: "",
            type: "Sonstiges"

        }
    } else {
        addedProps = filtered[0];
    }

    return (
        <>
            <div className="flex justify-center">
                <div
                    className="flex items-center bg-neutral-900 shadow-lg rounded-lg overflow-hidden p-4 m-4 w-9/12">
                    <div className="w-2/12">
                        <img width="150px" src={faction.image} alt={faction.name}/>
                    </div>
                    <div className="w-10/12 pl-4 mr-5">
                        <div className="flex flex-row">
                            <div className="w-11/12">
                                <p className=" font-bold text-xl text-white">{addedProps.name || faction.name}</p>
                                <p className="text-gray-300 mb-5">{addedProps.text}</p>
                            </div>
                            <p className="w-1/12 text-right text-gray-300 text-3xl">{faction.number}</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-2/12">
                                <i className="text-gray-500">{addedProps.type}</i>
                            </div>
                            <div className="w-8/12">
                                <p className="text-gray-600 text-center"></p>
                            </div>
                            <div className="w-2/12 text-right">
                                {(faction.available)
                                    ? <p className="text-green-500">Verfügbar</p>
                                    : <p className="text-red-500">Nicht verfügbar</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
        ;
}

export default FactionItem;

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