module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs', {title: 'Manger on Duty Login'})
    }
}