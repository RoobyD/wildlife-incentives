function recommendProtection(county, acreage) {

protection_profit = 0;
let protected_species = [];

    if (county === "Valley" || county === "Hill" || county === "Blaine" || county === "Phillips"){
    protection_profit = acreage * 0.75
    protected_species = ["Swift fox"];
    }

    if (county === "Petroleum" || county === "Fergus" || county === "Beaverhead" || county === "Rosebud" || county === "Garfield" || county ==="Phillips" || county === "Carter" || county === "Valley" || county === "Carbon"){
        protection_profit = acreage * 0.75
        protected_species = ["Large Sage Grouse"];
    }

    if (county === "Phillips"){
    protection_profit = acreage * 0.75
    protected_species = ["Black Footed Ferrets"];
    }
}
    return {
        protection_profit,
        protected_species
    };

export default recommendProtection;