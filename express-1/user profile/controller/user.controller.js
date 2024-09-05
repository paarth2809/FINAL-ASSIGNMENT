const user_model = require('../models/user.model');

exports.createProfile = async (req, res) => {
    try {
        const profile_body = req.body;
        const profile = await user_model.create(profile_body);
        return res.status(201).send(profile);
    } catch (err) {
        console.error("Error creating profile:", err);
        return res.status(500).send({
            error: "Profile not created due to server error"
        });
    }
};

exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await user_model.find();
        res.status(200).send(profiles);
    } catch (err) {
        console.error("Error fetching profiles:", err);
        res.status(500).send({
            error: "Failed to fetch profiles due to server error"
        });
    }
};

exports.getProfileByID = async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id, 10); // Ensure user_id is a number
        if (!userId) {
            return res.status(400).send({
                message: "ID not present in request parameters"
            });
        }
        const profile = await user_model.findOne({ user_id: userId });
        if (profile) {
            res.status(200).send(profile);
        } else {
            res.status(404).send({
                message: "Profile not found for the provided ID"
            });
        }
    } catch (err) {
        console.error("Error fetching profile:", err);
        res.status(500).send({
            error: "Failed to fetch profile due to server error"
        });
    }
};

exports.updateProfileByID = async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id, 10); // Ensure user_id is a number
        if (!userId) {
            return res.status(400).send({
                message: "ID not present in request parameters"
            });
        }
        const updateData = req.body;

        const updatedProfile = await user_model.findOneAndUpdate({ user_id: userId }, updateData, { new: true });
        if (updatedProfile) {
            res.status(200).send(updatedProfile);
        } else {
            res.status(404).send({
                message: "Failed to update profile for the provided ID"
            });
        }
    } catch (err) {
        console.error("Error updating profile:", err);
        res.status(500).send({
            error: "Failed to update profile due to server error"
        });
    }
};

exports.deleteProfileByID = async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id, 10); // Ensure user_id is a number
        if (!userId) {
            return res.status(400).send({
                message: "ID not present in request parameters"
            });
        }

        const deletedProfile = await user_model.findOneAndDelete({ user_id: userId });
        if (deletedProfile) {
            res.status(200).send({
                message: "Profile deleted successfully",
                profile: deletedProfile
            });
        } else {
            res.status(404).send({
                message: "Failed to delete profile for the provided ID"
            });
        }
    } catch (err) {
        console.error("Error deleting profile:", err);
        res.status(500).send({
            error: "Failed to delete profile due to server error"
        });
    }
};
