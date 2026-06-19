import Watch from "../models/Watches.js";

export const getWatches = async(req,res) => {
    try{
        const {category} = req.query;

        let filter = {}

        if (category){
            filter.category = category
        }

        const watches = await Watch.find(filter);

        res.status(200).json({
            success : true,
            count : watches.length,
            watches,
            message : "These are the collection of watches!!"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            success : false,
            message : err.message

        })
    }
}

export const createWatch = async (req, res) => {
  try {
    const watch = await Watch.create(req.body);

    res.status(201).json({
      success: true,
      watch,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};