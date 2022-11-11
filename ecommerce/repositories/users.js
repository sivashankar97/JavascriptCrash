const fs = require("fs");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("creating repsoitore require  filename");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async checkForFile() {}
}

const repo = new UsersRepository("users.json");

//creating data store file
