<script>
  export { className as class }, to, variant;
  let className = ""
</script>

<a href={to.startsWith("/") ? to : to.startsWith("https://") ? to : to.startsWith("http://") ? to : `/${to}` } target="_blank" class={`link link-${variant} ${className}`}><slot></slot></a>
