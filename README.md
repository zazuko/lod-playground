# Data-cube-curation

Needs a few things:

- OpenID Connect provider with JWT access tokens (see https://tools.ietf.org/html/draft-ietf-oauth-access-token-jwt-04)
- Three datasets, two for storing project mappings (with the query and update SPARQL services) and one for storing the output (with SPARQL Graph Store Protocol)
- A GitLab instance with a project setup in it to run the pipelines
