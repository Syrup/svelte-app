<script>
  import Link from "$lib/Link.svelte";
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

<Link to="about">About</Link>

{#await promise}
<p>Loading...</p>
{:then users}
  {#each users as user}
  <p>{user.name}</p>
  {/each}
{:catch err}
<p>{err}</p>
{/await}
