function recommendedFencing(currentFence, openness, acerage) {
    let recommendations = [];
    acres = acerage;

    const sqmiles = (acres / 640)
    const milesfencing = (Math.sqrt(sqmiles) * 4)
    fencingprofit = (milesfencing * 250)

    if (currentFence === "barbed_wire") {
        if (openness === 5) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else if (openness === 4) {
            recommendations = ["smooth_wire", "wildlife_friendly_barbed"];
        } else if (openness === 3) {
            recommendations = ["wildlife_friendly_barbed", "electric"];
        } else if (openness <= 2) {
            recommendations = ["wildlife_friendly_barbed"];
        }
    } else if (currentFence === "electric") {
        if (openness >= 4) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else if (openness === 3) {
            recommendations = ["smooth_wire"];
        } else {
            recommendations = ["wildlife_friendly_barbed"];
        }
    } else if (currentFence === "wildlife_friendly_barbed") {
        if (openness >= 3) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else {
            recommendations = ["smooth_wire"];
        }
    }

    output = {
        recommendations,
        fencingprofit
    }

    return output;
 }
 
 module.exports = recommendedFencing