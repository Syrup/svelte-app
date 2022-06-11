<script>
  async function load() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/")
    let users = await res.json()
    
    if(res.ok) {
      return users
    }
  }
  
  let promise = load()
</script>

{#await promise}
<p>Loading...</p>
{:then users}
  {#each users as user}
  <p>{user.name}</p>
  {/catch}
{:catch err}
<p>{err}</p>
{/await}
