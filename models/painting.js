const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    paintingTitle: { type: String, required: true, minlength:3},
    artistName: { type: String, required: true, minlength:3 },
    image: { type: String},
    paintingHeight :{ type: Number},
    paintingWidth :{ type: Number},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;