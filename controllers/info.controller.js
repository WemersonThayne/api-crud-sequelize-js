
module.exports = app => {
    app.get(`/info`, function (req, res) {
        res.send({ version: 'v.0.0.1' });
    });   
}