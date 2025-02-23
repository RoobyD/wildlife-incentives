function recommendedFencing(currentFence, openness, acerage) {
    let recommendations = [];
    const acres = acerage;

    const sqmiles = (acres / 640);
    const milesfencing = (Math.sqrt(sqmiles) * 4);
    let fencingprofit = (milesfencing * 250);

    const fenceTypeMap = {
        "Traditional Barbed Wire": "barbed_wire",
        "Electric Fencing": "electric",
        "Wildlife Friendly Fencing": "wildlife_friendly_barbed"
    };

    const mappedFenceType = fenceTypeMap[currentFence] || currentFence;

    if (mappedFenceType === "barbed_wire") {
        if (openness === 5) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else if (openness === 4) {
            recommendations = ["smooth_wire", "wildlife_friendly_barbed"];
        } else if (openness === 3) {
            recommendations = ["wildlife_friendly_barbed", "electric"];
        } else if (openness <= 2) {
            recommendations = ["wildlife_friendly_barbed"];
        }
    } else if (mappedFenceType === "electric") {
        if (openness >= 4) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else if (openness === 3) {
            recommendations = ["smooth_wire"];
        } else {
            recommendations = ["wildlife_friendly_barbed"];
        }
    } else if (mappedFenceType === "wildlife_friendly_barbed") {
        if (openness >= 3) {
            recommendations = ["virtual_fencing", "smooth_wire"];
        } else {
            recommendations = ["smooth_wire"];
        }
    }

    let output = {
        recommendations,
        fencingprofit
    };

    return output;
}

module.exports = recommendedFencing;