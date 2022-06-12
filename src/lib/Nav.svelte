<script>
  import { Styles, Navbar, Nav, NavbarToggler, NavItem, NavLink, NavbarBrand, Collapse } from "sveltestrap"
  
  let isOpen = false
  const toggle = () => isOpen = !isOpen
</script>

<Navbar color="light" light>
  <NavbarBrand href="/" class="me-auto">sveltestrap</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
