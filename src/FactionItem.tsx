type Faction = {
    name: string;
    telephone: string;
    description: string;
    imageUrl: string;
    available: boolean;
}

function FactionItem(faction: Faction): JSX.Element {
    return (
        <div className="flex justify-center">
            <div className="flex items-center bg-gray-900 shadow-lg rounded-lg overflow-hidden p-4 m-4 border w-9/12">
                <div className="w-1/4">
                    <img src={faction.imageUrl} alt={faction.name}/>
                </div>
                <div className="w-3/4 pl-4">
                    <p className="font-bold text-lg text-white">{faction.name}</p>
                    <p className="text-text-white">Call us: {faction.telephone}</p>
                    { (faction.available)
                        ? <p className="text-green-500">Verfügbarkeit: Verfügbar</p>
                        : <p className="text-red-500">Verfügbarkeit: Nicht verfügbar</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default FactionItem;
export type {Faction};

/**
 * <div class="flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4">
 *   <!-- Logo Bereich -->
 *   <div class="w-1/4">
 *     <img src="pfad/zum/firmenlogo.png" alt="Firmenlogo" class="w-full h-auto">
 *   </div>
 *
 *   <!-- Text Bereich -->
 *   <div class="w-3/4 pl-4">
 *     <p class="font-bold text-lg">Firmenname</p>
 *     <p class="text-gray-600">Leitstellentelefonnummer: 0123-456789</p>
 *     <p class="text-gray-600">Hier steht ein Freitext.</p>
 *     <p class="text-green-500">Verfügbarkeit: Verfügbar</p> <!-- Grüner Text für Verfügbarkeit -->
 *   </div>
 * </div>
 */