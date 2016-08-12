userContent = require('../models/').usercontent;


module.exports = {
    index(req, res) {
        userContent.findAll({
                //Return all user content that matches the request
                include: usercontent
            })
            .then(function(userPages) {
                res.status(200).json(userPages);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },
    show(req, res) {
        userContent.findById(req.params.id, {
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
        userContent.create(req.body)
            .then(function(newContent) {
                res.status(200).json(newContent);
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    },

    update(req, res) {
        userContent.update(req.body, {
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
        userContent.destroy({
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
