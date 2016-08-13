userID = require('../models/').userID;
userPages = require('../models/').userpage;
userContent = require('../models/').usercontent;


module.exports = {
    //Get a list of all authors using model.findAll()
    index(req, res) {
        userPages.findAll({
                //Return all books that have a matching author_id for each Author
                include: usercontent
            })
            .then(function(userPages) {
                res.status(200).json(userPages);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },
    //Get an author by the unique ID using model.findById()
    show(req, res) {
        userPages.findById(req.params.id, {
                //Return all books that have a matching author_id for the author
                include: usercontent
            })
            .then(function(userPages) {
                res.status(200).json(userPages);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    create(req, res) {
        userPages.create(req.body)
            .then(function(newPage) {
                res.status(200).json(newPage);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    update(req, res) {
        userPages.update(req.body, {
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
        userPages.destroy({
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
