<script>
  // { link } from "svelte-navigator"
  export { className as class, to, variant };
  let className = ""
  let to;
  let variant = "primary"
</script>

<a href={to} class={`link link-${variant} ${className}`}><slot></slot></a>
