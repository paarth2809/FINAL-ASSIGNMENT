const user_controller = require('../controller/user.controller');

module.exports = (app) => {
    app.post('/profile_app/api/v1/profiles', user_controller.createProfile);
    app.get('/profile_app/api/v1/profiles', user_controller.getAllProfiles);
    app.get('/profile_app/api/v1/profiles/:user_id', user_controller.getProfileByID);
    app.put('/profile_app/api/v1/profiles/:user_id', user_controller.updateProfileByID);
    app.delete('/profile_app/api/v1/profiles/:user_id', user_controller.deleteProfileByID);
};
