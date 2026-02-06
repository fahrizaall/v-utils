# v-utils

Small, typed utility functions for everyday use.

- 🌱 Tree-shakeable
- 📦 ESM + CJS
- 🧠 Fully typed
- ⚡ Zero dependencies

---

---

## Installation

```bash
npm install v-utils
````

or

```bash
pnpm add v-utils
```

or

```bash
yarn add v-utils
```

---

## Usage

```ts
import { clamp, debounce } from 'v-utils'

clamp(10, 0, 5) // → 5

const fn = debounce(() => {
  console.log('called')
}, 300)
```

---

## Utilities

### Simple utilities

* `clamp`
* `range`
* `sleep`
* `isNil`
* `noop`
* `unique`
* `chunk`

### Advanced utilities

* `debounce`
* `throttle`
* `memoize`

---

## TypeScript

Types are included out of the box.

```ts
import type { DebouncedFn } from 'v-utils'
```

---