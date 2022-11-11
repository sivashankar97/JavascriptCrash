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
    const records = await this.getAll();
    records.push(attrs);

    await fs.promises.writeFile(this.filename, JSON.stringify(records));
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");

  await repo.create({ email: "testddd@test.com", password: "password" });

  const users = await repo.getAll();

  console.log(users);
};
//creating data store file
test();
