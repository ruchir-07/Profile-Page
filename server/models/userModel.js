const mongoose = require("mongoose");

const socialsSchema = new mongoose.Schema({
  linkedIn: {
    type: String,
  },
  gitHub: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  website: {
    type: String,
  },
});

const professionalSchema = new mongoose.Schema({
  highestEducation: {
    type: String,
  },
  currently: {
    type: String,
  },
});

const interestsSchema = new mongoose.Schema({
    appDev: {
        type: Boolean,
    },
    webDev: {
        type: Boolean,
    },
    gameDev: {
        type: Boolean,
    },
    dsa: {
        type: Boolean,
    },
    programming: {
        type: Boolean,
    },
    machineLearning: {
        type: Boolean,
    },
    dataScience: {
        type: Boolean,
    },
    others: {
        type: Boolean,
    }
})

const userSchema = new mongoose.Schema({
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
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  about_me: {
    type: String,
  },
  socials: {
    type: socialsSchema,
  },
  professionalInfo: {
    type: professionalSchema,
  },
  followers: {
    type: Array,
  },
  interests: {
    type: interestsSchema,
  },
});

module.exports = mongoose.model("User", userSchema);
