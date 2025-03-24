import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    email: {type: String, required: true},
    message: {type: String, required: true},
    contactDate: {type: Date, default: Date.now},
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;