const fs = require('fs');

exports.getReview = (req, res) => {
    fs.readFile("data/newFile.txt", function(err, data){
        res.render('index', {list: JSON.parse(data)});
    });
    
}

exports.getCreateReview = (req, res) =>{
    res.render('CreateReview');
}

exports.addReview =  (req, res) =>{
    fs.readFile("data/newFile.txt", function(err, data){
        let arr = JSON.parse(data);
        console.log(arr);

        arr.push(req.body);
        fs.writeFile("data/newFile.txt", JSON.stringify(arr), function(err){
                if(err) throw err;
                console.log("saved");
        });
        res.redirect('/CreateReview');
    });
}
