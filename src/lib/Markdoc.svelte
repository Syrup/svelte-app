<script>
  import Markdoc from "@markdoc/markdoc"
  import util from "../routes/util"
  import path from "path"
  import fm from "front-matter"
  import Handlebars from "handlebars"
  
  export { paths as path, vars }
  let paths
  let vars
  
  const file = util.readFile(path.resolve("../markdown/" + path), "utf8")
  
  const fmm = fm(file)
  
  const handlebars = Handlebars.compile(file)
  let content = handlebars({
    ...vars,
    $fm: fmm
  })
  
</script>

<div>
  {@html content}
</div>
