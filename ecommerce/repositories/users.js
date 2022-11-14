const fs = require("fs");
const crypto = require("crypto");

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

  //method1
  //   async getAll() {
  //     const contents = await fs.promises.readFile(this.filename, {
  //       encoding: "utf8",
  //     });
  //     console.log(contents);

  //     const data = JSON.parse(contents);

  //     return data;
  //   }
  // }

  //method2
  //getting method
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  async create(attrs) {
    attrs.id = this.randomId();

    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOneid(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async deleteid(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async updateid(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Record id ${id} not found`);
    }

    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
}

module.exports = new UsersRepository("users.json");

// const test = async () => {
//   const repo = new UsersRepository("users.json");

//   //await repo.create({ email: "tesfftjhhtjddd@test.com", password: "password" });

//   // const users = await repo.getAll();
//   // const users = await repo.getOneid("fb78d28e");
//   //const users = await repo.deleteid("fb78d28e");

//   console.log(users);
// };
// //creating data store file
// test();
