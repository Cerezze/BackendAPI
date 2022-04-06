const fs = require('fs');

module.exports = class Product {
    constructor(id, poster, blurb, timedate, review){
        this.id = id;
        this.poster = poster;
        this.blurb = blurb;
        this.timedate = timedate;
        this.review = review;
    }

    save(){
      console.log(this);
        fs.readFile("data/newFile.txt", (err, data) => {
            let reviews = JSON.parse(data);
            
            reviews.push(this);

           fs.writeFile("data/newFile.txt", JSON.stringify(reviews), (err) =>{
                if(err) throw err;
                console.log("saved");
            });
        });
    }

    fetchAll(cb){
      fs.readFile("data/newFile.txt", (err, data) =>{
        //console.log(JSON.parse(data));
        cb(JSON.parse(data));
      });
    }

    deleteOne(idToDelete){
      fs.readFile("data/newFile.txt", (err, data) =>{
        console.log(data);
        console.log(idToDelete);

        let reviewList = JSON.parse(data);

        const found = reviewList.find(i => i.id == idToDelete);

        const filteredResult = reviewList.filter(i => i.id !== found.id);

        fs.writeFile("data/newFile.txt", JSON.stringify(filteredResult), err => {
          if(err) throw err;
          console.log("delted");
        });
      });
    }

    findById(id, cb, obj){
      //get products
      fs.readFile("data/newFile.txt", (err, data) => {

        let reviews = JSON.parse(data);
        
        let extractedReview = reviews.find((i, index) => {
          return i.id == id;
        });

        cb(extractedReview);

        let filteredReviews = reviews.filter(i => {
          return i.id != id;
        });

        if(Object.keys(obj).length !== 0){
          obj.id = Math.random();

          let newReviews = [...filteredReviews, obj];
          
          fs.writeFile("data/newFile.txt", JSON.stringify(newReviews), (err) =>{
            console.log(err);
          });
        }
      });
    }
};