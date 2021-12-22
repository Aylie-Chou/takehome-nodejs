### Summary

---

We plan to build an index page for articles. Please design an api server include database for serving article data to meet different use cases.
The server should have functions included in `spec` section.

### How to get start

---

1. Fork this repo.
2. Modify http server endpoint in index.js.
3. Add some article data.

- you can design your own schema & interface.
- you can refer to data/mock.json, but it is only an example. Please do not use it directly.

4. Add some functions to return required data.

- you can refer to src/example.js for example of getting latest selected article.

5. Update `Api document` section in README.md.

### Spec

---

1. latest article

- get latest created article.

2. selected articles

- get latest updated 4 articles with isStar flag.

3. search articles

- get articles matching query strings.
- user can query by title & created date.

### Api document

---

<some api usage document>
