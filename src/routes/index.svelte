<script>
  // import 'bulma/css/bulma.css'
  // import '@fortawesome/fontawesome-free/css/all.css'
  import Link from "$lib/Link.svelte";
  // import Markdoc from "$lib/Markdoc.svelte";
  // import { Route, Router } from "svelte-navigator"
  import {
    Styles,
    Container,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Icon
  } from "sveltestrap"
  import Nav from "$lib/Nav.svelte"
  import repos from "../../static/data/repos.json"
  
  // const file = fs.readFileSync("")
  
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

{#each repos as repo}
<Card color="dark" class="mb-3 text-white">
  <CardHeader>
    <CardTitle>{repo.name}</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>by {@html repo.authors.map(a => `<a href=${a.link} target="_blank">${a.username}</a>`).join(", ")}</CardSubtitle>
    <CardText>{repo.text}</CardText>
    <a href={repo.repo} class="btn btn-outline-dark"><Icon name="box-arrow-up-right" /> Go to repo</a>
  </CardBody>
</Card>
{/each}

</Container>
