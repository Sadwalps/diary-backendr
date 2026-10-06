//import model
const diarydata = require('../model/diaryModel')

//controller for add diary data
exports.addDiaryController = async (req, res) => {
    console.log(`Inside add diary controller`)

    const { title, description, date } = req.body
    console.log(title, description, date);

    try {
        const existingDiary = await diarydata.findOne({ date })
        if (existingDiary) {
            res.status(406).json(`diary already added on this date`)
        } else {
            const newDiary = new diarydata({
                title, description, date
            })
            await newDiary.save()
            res.status(200).json(newDiary)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get diary datas
exports.getDiaryController = async (req, res) => {
    console.log(`Inside get diary controller`);

    try {
        const getdiarydata = await diarydata.find()
        res.status(200).json(getdiarydata)
    } catch (error) {
        res.status(401).json(error)
    }
}