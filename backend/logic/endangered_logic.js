function recommendProtection(county, acreage) {

protection_profit = 0;
let protected_species = [];

    if (county === "Valley" || county === "Hill" || county === "Blaine" || county === "Phillips"){
    protection_profit = acreage * 0.75
    protected_species = ["Swift fox"];
    }
    else if (county === "Valley" || county === "Hill" || county === "Blaine" || county === "Phillips"):
        protection_profit = acreage * 0.75
        protected_species = ["Swift fox"];
        
    if (county === "Valley" || county === "Hill" || county === "Blaine" || county === "Phillips")
    protection_profit = acreage * 0.75
    protected_species = ["Swift fox"];

    if (county === "Valley" || county === "Hill" || county === "Blaine" || county === "Phillips")
        protection_profit = acreage * 0.75
        protected_species = ["Swift fox"];
        
}
    return {
        protection_profit,
        protected_species
    };

export default recommendProtection;