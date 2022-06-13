<script>
  // import 'bulma/css/bulma.css'
  // import '@fortawesome/fontawesome-free/css/all.css'
  import Link from "$lib/Link.svelte";
  import Github from "$lib/Github.svelte"
  // import Markdoc from "$lib/Markdoc.svelte";
  // import { Route, Router } from "svelte-navigator"
  import {
    Styles,
    Button,
    Container,
    Card,
    Fade,
    Icon
  } from "sveltestrap"
  import Nav from "$lib/Nav.svelte"
  // const file = fs.readFileSync("")
  
  let isGithubOpen = false;
  
  let toggleGithub = () => (isGithubOpen = !isGithubOpen)
  
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
<br />

<Card body>
  My project
  
  <Button on:click={toggleGithub}><Icon name="github" /> Github</Button>
  <Fade bind:isOpen={isGithubOpen}>
    <Github />
  </Fade>
</Card>

</Container>
