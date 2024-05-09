const express = require('express');                        
const router = express.Router();
const Flavours = require('./schema.js');

router.get('/', async (req, res) => {
    try {
        const Flavours = await Flavours.find();
        res.json(Flavours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const FlavoursFound = await Flavours.findById(req.params.id);
        if (!FlavoursFound) {
            return res.status(404).json({ error: "Flavours not found" });
        }
        res.json(FlavoursFound);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/add-Flavours', async (req, res) => {
    const newCream = new Flavours({
        CreamId: req.body.CreamId,
        Flavours:req.body.Flavours,
        Combinations: req.body.Combinations,
        origin: req.body.origin,
    });
    try {
        const saveCream = await newCream.save();
        res.json(saveCream);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedCream = await Flavours.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCream) {
            return res.status(404).json({ error: "Flavours not found" });
        }
        res.json(updatedCream);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCream = await Ice-cream.findByIdAndDelete(req.params.id);
        if (!deletedCream) {
            return res.status(404).json({ error: "Flavours not found" });
        }
        res.json({ message: "Flavours deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;