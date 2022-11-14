const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const scrypt = util.promisify(crypto.scrypt);

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

    const salt = crypto.randomBytes(8).toString("hex");
    const buf = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buf.toString("hex")}.${salt}`,
    };
    records.push(record);

    await this.writeAll(records);

    return record;
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  async comparePasswords(saved, supplied) {
    const [hashed, salt] = saved.split(".");
    const hashedSupplied = await scrypt(supplied, salt, 64);
    return hashed === hashedSupplied;
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
      let founds = true;
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          founds = false;
        }
      }
      if (founds) {
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
