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
    Collapse,
    Icon,
    Row,
    Col
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
<Container fluid class="mt-3">
  <h1>Home</h1>
  <br />
  <Card body>
    <h4>My project</h4>
    <br />
    <Row>
      <Col sm={{ size: "auto" }}>
        <Button id="github" class="mb-3"><Icon name="github" /> Github</Button>
      </Col>
    </Row>
    <Collapse toggler="#github">
      <Github />
    </Collapse>
  </Card>
</Container>