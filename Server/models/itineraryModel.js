const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId },
    text: String, userName: String,
    userPic: String
});

const ItinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    activities: [{ name: String, img: String }],
    authorName: { type: String, required: true },
    authorPic: { type: String, required: true },
    price: { type: Number, min: 1, max: 5, required: true },
    duration: { type: Number, min: 1, required: true },
    likes: { type: Number, default: 0 },
    hashtags: [String],
    comments: [CommentSchema],
    usersLike: [String],
    cityId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
