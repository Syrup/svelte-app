<script lang="ts">
  import repos from "../../static/data/repos.json"
  import {
    Styles,
    Container,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    CardFooter,
    Icon,
    Row,
    Col
  } from "sveltestrap"
</script>

<Row>
{#each repos as repo}
<Col sm={{ size: 'auto', offset: 1 }}>
  <Card color="light" class="mb-3">
    <CardHeader>
      <CardTitle>{repo.name}</CardTitle>
    </CardHeader>
    <CardBody>
      <CardSubtitle class="text-muted">by {@html repo.authors.map(a => `<a href=${a.link} target="_blank" class="link-seocndary" style="text-decoration: none;">${a.username}</a>`).join(", ")}</CardSubtitle>
      <hr />
      <CardText>{repo.text}</CardText>
      <a href={repo.repo} class="btn btn-outline-secondary"><Icon name="box-arrow-up-right" /> Go to repo</a>
    </CardBody>
    <CardFooter class="text-muted">Copyright &copy; 2022 Syrup</CardFooter>
  </Card>
</Col>
{/each}
</Row>
