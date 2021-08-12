const User = require('../models/user.models');

module.exports = {
    // getUsers: function(req, res){
    //     res.send("Berhasil dapatkan list semua user");
    // },

    getUsers: function(req, res){
        User.find()
            .then(function (result){
                res.status(200).json(result);
            })
            .catch(function (result){
                res.status(500).json(error);
            });
    },

    getUserByIdentityNumber: function(req, res){
        User.find({
            identity_number: req.params.identitynumber,
        })
            .then(function (result){
                res.status(200).json(result);
            })
            .catch(function (result){
                res.status(500).json(error);
            });
    },

    getUserByAccountNumber: function(req, res){
        User.find({
            account_number: req.params.accnumber,
        })
            .then(function (result){
                res.status(200).json(result);
            })
            .catch(function (result){
                res.status(500).json(error);
            });
    },

    createUser: function(req, res){
        User.create({
            user_name: req.body.user_name,
            account_number: req.body.account_number,
            identity_number: req.body.identity_number
        })
        .then(function(result){
            res.status(201).json(result);
        })
        .catch(function(result){
            res.status(500).json(error);
        });
    },

    updateUser: function(req, res){
        User.updateOne({
           _id:req.params.id
        },
        {
            user_name:req.body.user_name,
            account_number:req.body.account_number
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(result){
            res.status(500).json(error);
        });
    },

    deleteUser: function(req, res){
        User.deleteOne({
           _id:req.params.id
        })
        .then(function(result){
            res.status(200).json({
                msg: "Berhasil hapus data!"
            });
        })
        .catch(function(result){
            res.status(500).json(error);
        });
    },

};