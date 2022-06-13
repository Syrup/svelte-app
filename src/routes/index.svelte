<script>
  // import 'bulma/css/bulma.css'
  // import '@fortawesome/fontawesome-free/css/all.css'
  import Link from "$lib/Link.svelte";
  import Markdoc from "$lib/Markdoc.svelte";
  // import { Route, Router } from "svelte-navigator"
  import { Styles, Container } from "sveltestrap"
  import Nav from "$lib/Nav.svelte"
  
  const file = fs.readFileSync("")
  
  async function load() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/")
    let users = await res.json()
    
    if(res.ok) {
      return users
    }
  }
  
  let promise = load()
</script>

<Styles />

<Nav />
<Container>

<!-- <nav>
  <Link to="/" variant="success">Home</Link>
  <Link to="/about" variant="success">About</Link>
</nav>
  -->

<h1>Home</h1>

<Markdoc path="index.md" vars={{ name: "Syrup }} />
</Container>
