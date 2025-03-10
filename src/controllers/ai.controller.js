const aiservice = require('../services/ai.services');


module.exports.getReview = async (req, res) => {
    // res.send('AI route');
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }


    const response = await aiservice(code);
    res.send(response);

}

