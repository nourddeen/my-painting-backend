const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    panitingTitle: { type: String, required: true },
    artistName: { type: String, required: true },
    image: { type: String},
    panitingHight :{ type: Number},
    panitingWidth :{ type: Number},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;