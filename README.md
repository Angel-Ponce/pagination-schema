<h1 align="center">Pagination Schema 📄</h1>

<p align="center">Useful and easy helper to create pagination components out of the box.</p>

## Table of contents

- [Installation](#instalation-)
- [Usage](#usage-)
- [Types](#types-)
- [API Reference](#api-refernce-)
- [Examples](#examples-)

## Installation 📦

```bash
$ npm install pagination-schema
```

or

```bash
$ yarn add pagination-schema
```

## Usage ✨

```javascript
import generate from "pagination-schema";

const pages = generate({
  total: 100,
  perPage: 5,
  currentPage: 1,
});

// the output array:

[1, 2, 3, 0, 18, 19, 20];

// now, you can make your custom pagination component using the output array
```

### What does the output array mean? 🤔

The output array indicates the structure of the pagination component, for example:

```javascript
import generate from "pagination-schema";

const pages = generate({
  total: 230,
  perPage: 10,
  currentPage: 15,
});

// [1,0,14,15,16,0,23]
```

The rendered pagination should have the following structure:

![Alt text](/.github/example.png)

You are free to handle all the events, styles and behaviors of your component, the `generate` helper only helps you to build the structure of your pagination component.

Output array:

**number {n ∈ N} (1,2,3...∞)** indicates a page number

**zero (0)** indicates the ellipsis separator, (...) [or another separator symbol]

## Types 🦺

Pagination Schema was made with `TypeScript` ❤️ so, you can use the configuration types as you need:

```javascript
import type { PaginationConfig } from "pagination-schema";

const config: PaginationConfig;
```

## API Reference 📃

| Item                 | Description                                          | Type                                     |
| -------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `generate`           | The helper function to make the pagination structure | `(config: PaginationConfig) => number[]` |
| `config.total`       | The total numbers of items in your database          | `number`                                 |
| `config.perPage`     | The number of items showed per page                  | `number`                                 |
| `config.currentPage` | The current page in your pagination                  | `number`                                 |

## Examples ✔

- [React](https://stackblitz.com/edit/pagination-schema-react?file=src%2FPagination.js)
- [Svelte](https://stackblitz.com/edit/pagination-schema-svelte?file=src%2FPagination.svelte)
- [Vue](https://stackblitz.com/edit/pagination-schema-vue?file=src%2FPagination.vue)
- [Angular](https://stackblitz.com/edit/pagination-schema-angular?file=src%2Fpagination%2Fpagination.component.html)
