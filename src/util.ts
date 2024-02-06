export function getFactionTypeName(id : number) : string {
    switch(id) {
        case 0:
            return "Behörde";
        case 1:
            return "Notdienste";
        case 2:
            return "City of LS";
        case 3:
            return "Service";
        case 4:
            return "Gastro";
        case 5:
            return "Clubs";
        case 6:
            return "Autohäuser";
        default:
            return "Sonstiges";
    }
}
