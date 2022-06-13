<script>
  import Markdoc from "@markdoc/markdoc"
  import fs from "fs"
  import path from "path"
  import fm from "front-matter"
  import Handlebars from "handlebars"
  
  export { paths as path, vars }
  let paths
  let vars
  
  const file = fs.readFileSync(path.join("..", "markdown", paths), "utf8")
  
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
