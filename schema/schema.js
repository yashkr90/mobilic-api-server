import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  income: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  phone_price: {
    type: String,
    required: true,
  },
});


const Data = mongoose.model('Data', UserSchema);

export default Data;

// "first_name": "Inglis",
//     "last_name": "McMurty",
//     "email": "imcmurty0@youku.com",
//     "gender": "Male",
//     "income": "$1.36",
//     "city": "Las Flores",
//     "car": "Hummer",
//     "quote": "optimize web-enabled relationships",
//     "phone_price": "22236"
