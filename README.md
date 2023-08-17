<h1 align="center">Any Pagination 📄</h1>

<p align="center">Useful and easy helper to create pagination components.</p>

## Table of contents

- [Instalation](#instalation-)
- [Usage](#usage-)
- [Types](#types-)
- [API Reference](#api-refernce-)
- [Examples](#examples-)

## Instalation 📦

```bash
$ npm install any-pagination
```

or

```bash
$ yarn add any-pagination
```

## Usage ✨

```javascript
import { paginate } from "any-pagination";

const pages = paginate({
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
import { paginate } from "any-pagination";

const pages = paginate({
  total: 230,
  perPage: 10,
  currentPage: 15,
});

// [1,0,14,15,16,0,23]
```

The rendered pagination should have the following structure:

![Alt text](/.github/example.png)

You are free to handle all the events, styles and behaviours of your component, the `paginate` helper only helps you to build the structure of your pagination component.

Output array:

**number {n ∈ N} (1,2,3...∞)** indicates a page number

**zero (0)** indicates the ellipsis separator, (...)

## Types 🦺

Any-Pagination was made with `TypeScript` ❤️ so, you can use the configuration types as you need:

```javascript
import type { PaginationConfig } from "any-pagination";

const config: PaginationConfig;
```

## API Refernce 📃

| Item                 | Description                                          | Type                                     |
| -------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `paginate`           | The helper function to make the pagination structure | `(config: PaginationConfig) => number[]` |
| `config.total`       | The total numbers of items in your database          | `number`                                 |
| `config.perPage`     | The number of items showed per page                  | `number`                                 |
| `config.currentPage` | The current page in your pagination                  | `number`                                 |

## Examples ✔

- [React](https://stackblitz.com/edit/any-pagination-react?file=src%2FPagination.js)
- [Svelte](https://stackblitz.com/edit/any-pagination-svelte?file=src%2FPagination.svelte)
- [Vue](https://stackblitz.com/edit/any-pagination-vue?file=src%2FPagination.vue)
