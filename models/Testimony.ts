import mongoose from 'mongoose';

const TestimonySchema = new mongoose.Schema({
    name: { type: String, required: true },
    relation: { type: String, enum: ['FRIEND', 'FAMILY', 'COLLEAGUE', 'OTHER'], required: true, default: 'OTHER' },
    comment: { type: String, required: true },
    // Public URL when using external storage (e.g. Vercel Blob)
    imageUrl: { type: String, required: false },
    imageData: { type: String, required: false },
    whereWeFirstMet: { type: String, required: true },
    professionalRelation: { type: String, required: true },
    company: { type: String, required: false },
    position: { type: String, required: false },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], required: true, default: 'pending' },
});

const Testimony = mongoose.models.Testimony || mongoose.model('Testimony', TestimonySchema);

export default Testimony;