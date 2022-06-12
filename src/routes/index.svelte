<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  import Link from "$lib/Link.svelte";
  import { Route, Router } from "svelte-navigator"
  import { Styles } from "sveltestrap"
  
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

<Router>

<nav>
  <Link to="/" variant="success">Home</Link>
  <Link to="about" variant="success">About</Link>
</nav>

<Route path="/">
<h1>Home</h1>
</Route>

<Route path="about">
  <h1>Hello World!</h1>
</Route>

</Router>
