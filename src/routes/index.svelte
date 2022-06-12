<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  import Link from "$lib/Link.svelte";
  import { Route, Routes } from "svelte-navigator"
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

<Routes>
<nav>
  <Link to="about" variant="success">About</Link>
</nav>

<Route path="/">
{#await promise}
<p>Loading...</p>
{:then users}
  {#each users as user}
  <p>{user.name}</p>
  {/each}
{:catch err}
<p>{err}</p>
{/await}
</Route>

</Routes>
