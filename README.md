# Zazuko's sample LOD stack

This stack includes:

-   a frontend proxy (traefik)
-   a triplestore (fuseki) accessible through <http://fuseki.localhost/>
-   a trifid instance accessible through <http://data.localhost/>
-   a data-cube-curation instance accessible through <http://datacube.localhost/>
-   a OpenID Connect provider (dex) accessible through <http://dex.localhost/>
-   a S3 server (minio) accessible through <http://s3.localhost/>

## Triplestore config

The triplestore has three databases ; two for `data-cube-curation` and one for the actual data.

The `data` one has two endpoint:

-   <http://fuseki.localhost/data>: SPARQL Graph Store Protocol (read and write)
-   <http://fuseki.localhost/data/sparql>: SPARQL query endpoint

## Load the initial data

There is a sample turtle file included that can be loaded.

```sh
docker-compose up -d # ensure the stack is running
docker-compose exec loader curl -X PUT -H Content-Type:text/turtle -T /data/sample.ttl -G http://fuseki.localhost/data
```

Then try to view a subject in trifid: <http://data.localhost/person/sheldon-cooper>
