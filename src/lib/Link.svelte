<script>
  import { link } from "svelte-navigator"
  export { className as class, to, variant };
  let className = ""
  let to;
  let variant = "primary"
</script>

<a href={to} class={`link link-${primary} ${className}`} use:link><slot></slot></a>