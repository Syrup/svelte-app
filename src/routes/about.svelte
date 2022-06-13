<script>
  import Nav from "$lib/Nav.svelte"
  import { Styles, Container } from "sveltestrap"
  let name = "Syrup"
  function changeName() {
    name = "Symio"
  }
</script>

<Styles />

<Nav />
<Container>

<button on:click={changeName}></button>
<h1>Hello {name}</h1>
</Container>
