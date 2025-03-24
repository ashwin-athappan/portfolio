import mongoose from 'mongoose';

const TestimonySchema = new mongoose.Schema({
    name: {type: String, required: true},
    relation: {type: String, enum: ['FRIEND', 'FAMILY', 'COLLEAGUE', 'OTHER'], required: true, default: 'OTHER'},
    comment: {type: String, required: true},
    imageUrl: { type: String , required: false, default: "default_user_image" },
});

const Testimony = mongoose.models.Testimony || mongoose.model('Testimony', TestimonySchema);

export default Testimony;