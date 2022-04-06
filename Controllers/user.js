const fs = require('fs');
const Product = require('../Models/review');

exports.getReview = (req, res) => {
    let product = new Product();
    product.fetchAll(i => {
        res.render('index', {list: i});
    });
}

exports.getCreateReview = (req, res) =>{
    res.render('CreateReview');
}

exports.addReview = (req, res) =>{
    let id = Math.random();
    let poster = req.body.poster;
    let blurb = req.body.blurb;
    let timedate = req.body.timedate;
    let review = req.body.review;
    const product = new Product(id, poster, blurb, timedate, review);
    product.save();

    res.redirect("/CreateReview");
}

exports.deleteReview = (req, res) => {
    console.log(req.body);
    let product = new Product();

    product.deleteOne(req.body.id);

    res.redirect('/');
}

exports.getUpdateReview = (req, res) => {
    let review = new Product();
    review.findById(req.params.reviewId, i => {
        res.render('UpdateReview', {review: i});
    }, req.body); 
}