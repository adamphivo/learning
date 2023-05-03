# OpenAPI

## Introduction

- The aim of the OpenAPI specification is to describe an API in a shared format.
- Formalize API using a OpenAPI description document -> Industry standard.
- Its format is machine-readable -> Generate automatic documentation.
- The OpenAPI Specification (OAS) is one the most broadly used specification for describing API contracts
- The OAS is public -> meetings and discussions are made public.
- Supported (part of ?) the Linux Foundation
- OpenAPI has an important ecosystem of [tools](https://tools.openapis.org), this contribute to its broad adoption.
- Describing your API using a specification such as the OAS is similar to locally describing your methods using interfaces : everything is made clear before-hand. What goes in and what goes out is determined (even before development).

## Structure of an OpenAPI Document

- See openapi.yml
- The root document is usually named openapi.json or openapi.yml
- It represents a JSON Object (YML is a superset of JSON)
- It can split into multiple documents for clarity

## API endpoints

- The object described by the Paths Object ("path" field) of the OpenAPI Document is the container of all the endpoints.
