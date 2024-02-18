import {getFactionTypeName} from "./util";

export type Faction = {
    name: string;
    numbers: FactionNumbers[];
    anyavailable: boolean;
    category: number;
    abt: string;
    image: string;
}

export type FactionNumbers = {
    name: string;
    number: number;
    description: string;
    available: boolean;

}

export type FactionCardProps = {
    key: number;
    name: string;
    number: number;
    text: string;
    available: boolean;
    image: string;
    type: number;
    abt: string;
    additional: AdditonalFactionProps;

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
    return (
        <>
            <div className="flex justify-center">
                <div
                    className="flex items-center bg-neutral-900 bg-opacity-30 drop-shadow-lg rounded-3xl overflow-hidden p-4 m-4 w-full z-10">
                    <div className="w-2/12">
                        <img width="150px" src={faction.image} alt={faction.name}/>
                    </div>
                    <div className="w-10/12 pl-4 mr-5">
                        <div className="flex flex-row">
                            <div className="w-10/12">
                                <p className="font-bold text-xl text-white">{faction.name}</p>
                                <p className="text-gray-300 text-lg">{faction.text}</p>
                            </div>
                            <p className="w-2/12 text-right text-gray-300 text-3xl">{faction.number}</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-2/12">
                                <i className="text-yellow-500">{getFactionTypeName(faction.type)}</i>
                            </div>
                            <div className="w-8/12">
                                <p className="text-gray-600 text-center"></p>
                            </div>
                            <div className="w-2/12 text-right">
                                {(faction.available)
                                    ? <p className="text-green-500">verfügbar</p>
                                    : <p className="text-red-500">unbesetzt</p>
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