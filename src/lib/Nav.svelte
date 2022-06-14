<script>
  import { Styles, Navbar, Nav, NavbarToggler, NavItem, NavLink, NavbarBrand, Collapse, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Icon } from "sveltestrap"
  
  let isOpen = false
  const toggle = () => isOpen = !isOpen
</script>

<Navbar color="dark" dark>
  <NavbarBrand href="/" class="me-auto">svelte-app</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret><Icon name="link-45deg" /> Links</DropdownToggle>
        <DropdownMenu end dark>
          <DropdownItem><a href="https://github.com/Syrup" class="btn btn-dark"><Icon name="github" /> Github</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Collapse>
</Navbar>

