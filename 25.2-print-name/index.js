const obj = {
  firstName: "Emanuel",

  logName() {
    console.log(this.firstName);
  },

  logNameDelayed() {
    setTimeout(this.logName.bind(this), 1000);
  },
};

obj.logNameDelayed();
