const cors = require('cors')
const express = require('express');
const recommendedProtection = require("./logic/endangered_logic")
const recommendedFencing = require("./logic/fencing_logic.js")
const recommendedPeace = require("./logic/peace_logic.js")
const recommendedCam = require("./logic/cam_logic.js")

const app = express();

app.use(cors())
app.use(express.static('dist'));
app.use(express.json());

app.post('/api/submission', (req, res) => {
    try {
        const recProtection = recommendedProtection(req.body.county, req.body.acres)
        const recFencing = recommendedFencing(req.body.fencingStrategy, req.body.alternativeFencing, req.body.acres)
        const recPeace = recommendedPeace(req.body.acres, req.body.deterrents)
        const recCam = recommendedCam(req.body.county)

        // Combine all recommendations
        const recommendations = {
            protection: recProtection,
            fencing: recFencing,
            peace: recPeace,
            camera: recCam
        }

        console.log('Processing submission:', req.body);
        console.log('Generated recommendations:', recommendations);

        // Send response back to frontend
        res.json({
            success: true,
            message: 'Recommendations generated successfully',
            recommendations: recommendations
        });
    } catch (error) {
        console.error('Error processing submission:', error);
        res.status(500).json({
            success: false,
            message: 'Error generating recommendations',
            error: error.message
        });
    }
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend server is running!' });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});