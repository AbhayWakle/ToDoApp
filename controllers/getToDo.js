//import the model

const Todo = require("../models/ToDo");

//define route handler

exports.getTodo = async (req, res) => {
    try {
        //fetch all items from db
        const todos = await Todo.find({});

        //response after fetching
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Entire Db Fetched",
            })
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "Error in Fetching",
            })

    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found With Given Id",
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Data With ${id} Fetched Successfully`,

        })
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "Error in Fetching",
            })


    }
}