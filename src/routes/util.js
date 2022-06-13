import fs from "fs"

const util = {
  readFile(path, encoding) {
    return fs.readFileSync(path, encoding)
  },
}

export default util
