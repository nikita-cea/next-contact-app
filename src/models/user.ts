import { Schema, model, models } from 'mongoose';

const usersModel = new Schema({
    name: String,
    email: String,
    mobile: String
});

const User = models.users || model("users", usersModel);

export default User;