# get_stdin ![ci](https://github.com/rjoydip/get_stdin/workflows/ci/badge.svg)

> Get stdin as a string or buffer

## Usage

```js
// example.ts
import { getStdin, getStdinBuffer } from "deno.land/x/get_stdin/mod.ts";

console.log(await getStdin());
//=> 'unicorns'
console.log(await getStdinBuffer());
//=> Uint8Array(20) [
//      104, 101, 108, 108, 111, 10, 0,
//      0,   0,   0,   0,   0,  0, 0,
//      0,   0,   0,   0,   0,  0
//   ]
```

```sh
$ echo unicorns | deno run --allow-run ./example.ts
unicorns

```

## API

### getStdin()

Get `stdin` as a `string`.

### getStdinBuffer()

Get `stdin` as a `Buffer`.

## Inspired

- Inspired by [get-stdin](https://github.com/sindresorhus/get-stdin) - Get stdin as a string or buffer
