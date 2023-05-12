const db = require("../models");
const User = db.user
const sequelize=require("sequelize");
const Op = sequelize.Op;

const handleError = (err, res) => {
    res.status(500).send({
      error: err.message
    });
  };
// create customer

exports.create =async (req,res)=>{
   await User.create({
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        phoneNumber:req.body.phoneNumber
    }).then((User)=>{
        res.json({
            message:"user created", User
        });
    })
    .catch(err => {
        console.log(err);
        handleError(err,res)
      });

};

//find all
exports.findAll = async(req,res)=>{
   await User.findAll()
    .then((User)=>{
        res.json({
            data:User,
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while listing the customer."
        });
});
}
//find by id
exports.findByPk =(req,res)=>{
    User.findByPk(req.params.id)
    .then((User)=>{
        res.json({
            data:User
        })
    }) 
    .catch(err => {
        handleError(res, err);
      });
}

//updatecustomer 
exports.update=(req,res)=>{
    const id = req.params.id;
    console.log(id)
    User.update(
            {
                userName:req.body.userName,
                userEmail:req.body.userEmail,
                phoneNumber:req.body.phoneNumber
    },
    {where:{id:req.params.id}}
    ).then(()=>{
        res.json({
            message:"user update",
        })
    })
    .catch(err => {
        handleError(res, err);
      });
}

//deletecustomer
exports.delete = (req,res)=>{
    const id = req.params.id;
    User.destroy({
        where:{id:id},
    }).then(()=>{
        res.json({
            message:"user deleted"
        })
    })
}