<script>
  export let to;
  export { className as class }
  let className = ""
</script>

<a href={to.startsWith("/") ? to : to.startsWith("https://") ? to : to.startsWith("http://") ? to : `/${to}` } target="_blank" class={"link link-primary " + className}><slot></slot></a>
