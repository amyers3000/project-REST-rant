
const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: {type: String, default: '/images/chia-fruit-drink.jpg'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: { 
        type: Number, 
        min:[1673, 'Surley not that old?!'], 
        max:[new Date().getFullYear(), ' This year has not happened yet!']
        },
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)