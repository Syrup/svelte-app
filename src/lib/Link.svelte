<script>
  import { Link } from "svelte-navigator"
  export { className as class, to, variant };
  let className = ""
  let to;
  let variant = "primary"
</script>

<Link bind:to={to} class={`link link-${variant} ${className}`}><slot></slot></Link>