userID = require('../models/').userID;
userPages = require('../models/').userpage;

module.exports = {
    //Get a list of all authors using model.findAll()
    index(req, res) {
        userID.findAll({
                //Return all books that have a matching author_id for each Author
                include: userpage
            })
            .then(function(userIDs) {
                res.status(200).json(userIDs);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    //Get an author by the unique ID using model.findById()
    show(req, res) {
        userID.findById(req.params.id, {
                //Return all books that have a matching author_id for the author
                include: userpage
            })
            .then(function(userIDs) {
                res.status(200).json(userIDs);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },
    create(req, res) {
        userID.create(req.body)
            .then(function(newUser) {
                res.status(200).json(newUser);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    update(req, res) {
        userID.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(function(updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    delete(req, res) {
        userID.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    }
}
