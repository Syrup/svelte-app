import fs from "fs"

const util = {
  readFile(path, encoding) {
    return fs.readFileSync(path, encoding)
  },
  
  readdir(path, encoding) {
    console.log(fs.readdir(path, encoding))
  }
}

export default util
