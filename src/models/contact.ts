import { Schema, model, models } from 'mongoose';

const contactModel = new Schema({
    name: String,
    email: String,
    mobile: String,
    designation: String,
    id: String
});

const Contact = models.contacts || model("contacts", contactModel);

export default Contact;

