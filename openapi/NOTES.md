# OpenAPI

## Ressources

- (Official tutorial)[https://learn.openapis.org/]
- (Organizing a large OpenAPI Document)[https://davidgarcia.dev/posts/how-to-split-open-api-spec-into-multiple-files/]

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
- Each endpoints is described by its path :

```yml
# Path object
/users:
  # Operation object
  get:
    summary:
    description:
    reponses:
      "200":
        description: "OK"
        content:
        ...
  put:
  post:
```

## Content of Message bodies

- The content field first describe the content format -> [Media Type](https://spec.openapis.org/oas/v3.1.0#media-type-object)
- The content is described in the `schema` field.

```yml
content:
  application/json:
    schema:
      type: array
      minItems: 0
      maxItems: 100
      items:
        type: integer
  text/html:
  text/*:
```

- We can _describe_ JSON objects :

```yml
# An example of a response containing a user and his/her posts
content:
  application/json:
    schema:
      type: object
      properties:
        name:
          type: string
        age:
          type: integer
        password:
          type: string
        posts:
          type: array
          items:
            type: object
            properties:
              title:
                type: string
              body:
                type: string
              likes:
                type: integer
```

- As we can see a single OpenAPI Document can quickly grow in length -> _Descriptions_ can resides in other files to improve clarity and maintainability.

## Parameters and Payload of an Operation

- We saw how to describe the **output data** of an Operation.
- How can we describe the **input data** ?
- We can describe **parameters** and **request body**.

### Describing parameters

```yml
paths:
    # Path parameter -> /users/1234
    /users/{id}:
        get:
            parameters:
                - name: id
                in: path
                required: true
                schema:
                    type: integer
    # Query parameter -> /users?id=1234
    /users:
        get:
            parameters:
                - name: id
                in: query
                schema:
                    type: integer
```

- [!] In case of path parameters the _required_ field **MUST** be present and **MUST** be set to true
- Parameter type -> We can describe the parameter _via_ a **Schema Object**.

### The request body object

```yml
paths:
    /users/{id}:
        post:
            parameters:
                - name: id
                in: path
                required: true
                schema:
                type: string
            requestBody:
                content:
                    application/json:
                        schema:
                            type: object
                            properties:
                                name:
                                    type: string
```

## Reusing descriptions

- As seen before, at one point we will need the extract descriptions to make the OpenAPI Document more modular and maintainable.
- Reusable pieces of descriptions can be declated in the _Components Object_ located in the root _OpenAPI Object_.

## API Servers

- API servers can be described in a _Server Object_
