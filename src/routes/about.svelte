<script>
  import Nav from "$lib/Nav.svelte"
  let name = "Syrup"
  function changeName() {
    name = "Symio"
  }
</script>

<Nav />

<button on:click={changeName}></button>
<h1>Hello {name}</h1>