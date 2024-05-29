//import the model

const Todo = require("../models/ToDo");

//define route handler

exports.createTodo = async (req, res) => {
    try {
        //extract title & descrption from request body
        const { title, description } = req.body;
        //crete new toDo object and insert
        const response = await Todo.create({ title, description });
        //send a json response with a sucess flag  
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry Created Sucessfully '
        })

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)//server problem error
            .json({
                success: false,
                data: "Internal Server Error",
                message: err.message,
            })
    }
}