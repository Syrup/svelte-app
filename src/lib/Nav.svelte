<script>
  import { Styles, Navbar, Nav, NavbarToggler, NavItem, NavLink, NavbarBrand, Collapse, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Icon } from "sveltestrap"
  
  let isOpen = false
  const toggle = () => isOpen = !isOpen
</script>

<Navbar color="dark" dark>
  <NavbarBrand href="/" class="me-auto"><Icon name="house-door" /> svelte-app</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="/about"><Icon name="person" /> About</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle data-bs-auto-close="false" nav caret><Icon name="link-45deg" /> Links</DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuClickable" end dark>
          <DropdownItem><a href="https://github.com/Syrup" class="btn btn-light"><Icon name="github" /> Github</a></DropdownItem>
          <DropdownItem><a href="https://trakteer.id/syrup" class="btn btn-danger">Trakteer</a></DropdownItem>
          <DropdownItem><a href="https://ko-fi.com/Sirup" class="btn btn-info">Ko-fi</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Collapse>
</Navbar>