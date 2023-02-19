import mongoose from "mongoose";


const userDataSchema = mongoose.Schema({

    firstName : {
        type : String,
        required : true,
        trim : true
    },

    surName : {
        type : String,
        required : true,
        trim : true
    },
    
    email : {
        type : String,
        unique : true,
        trim : true
    },

    phone : {
        type : String,
        unique : true,
        trim : true
    },

    username : {
        type : String,
        unique : true,
        trim : true
    },

    secondaryName : {
        type : String,
        trim : true,
        default : ''
    },

    password : {
        type : String,
        required : true,
        trim : true
    },

    birthDate : {
        type : String,
        required : true
    },

    birthMonth : {
        type : String,
        required : true
    },

    birthYear : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        enum : ['male', 'female', 'other'],
        required : true
    },

    avatar : {
        type : String,
        default : null
    },

    coverPhoto : {
        type : String,
        default : null
    },

    bio : {
        type : String,
        default : null
    },

    featured : {
        type : Array,
        default : []
    },

    work : {
        type : Array,
        default : null
    },

    education : {
        type : Array,
        default : null
    },

    currentTown : {
        type : String
    },

    homeTown : {
        type : String
    },

    relationship : {
        type : String,
        enum : ['Married', 'Single', 'In a relationship']
    },

    socialLinks : {
        type : Array,
        default : []
    },

    friends : {
        type : Array,
        default : []
    },

    friendsRequest : {
        type : Array,
        default : []
    },

    following : {
        type : Array,
        default : []
    },

    follower : {
        type : Array,
        default : []
    },

    block : {
        type : Array,
        default : []
    },

    posts : {
        type : Array,
        default : []
    },

    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    },

    accessToken :{
        type : String
    },
    
    joined : {
        type : Date
    },

    isActivate : {
        type : Boolean,
        default : false
    },

    status : {
        type : Boolean,
        default : false
    },

    trash : {
        type : Boolean,
        default : false
    }

}, {
    timestamps : true
});



const userModel = mongoose.model('users', userDataSchema);

export default userModel;


