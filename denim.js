module.exports = {
  destination: {
    default: function (data) {
      return data.name;
    }
  },

  prompts: {
    name: {
      message: "What would you like your application to be named?",
      validate: function (val) {
        return !!val.trim() || "A name must be entered!";
      }
    },
    description: {
      message: "Please provide a description of your application:",
      validate: function (val) {
        return !!val.trim() || "A description must be entered!";
      }
    }
  }
};
