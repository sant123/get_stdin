# get_stdin ![ci](https://github.com/rjoydip/get_stdin/workflows/ci/badge.svg)

> Get stdin as a string or buffer

## Usage

```js
// example.ts
import { getStdin, getStdinBuffer } from 'deno.land/x/get_stdin/mod.ts';

console.log(await getStdin());
//=> 'unicorns'

console.log(await getStdinBuffer());
//=> Uint8Array(8) [
//   117, 110, 105,
//   99, 111, 114,
//   110, 115
// ]
```

### There's a sync mode too

```js
// example.ts
import { getStdinSync, getStdinBufferSync } from 'deno.land/x/get_stdin/mod.ts';

console.log(getStdinSync());
//=> 'unicorns'

console.log(await getStdinBufferSync());
//=> Uint8Array(8) [
//   117, 110, 105,
//   99, 111, 114,
//   110, 115
// ]
```

```sh
$ echo unicorns | deno run --allow-run ./example.ts
unicorns
```

### Also you can read like a cli application

```js
// example.ts
import { getStdin } from 'deno.land/x/get_stdin/mod.ts';

console.log("¿What's your name?");
const guest = await getStdin();

console.log(`Hellou ${guest || 'Stranger'}`);
//=> 'Hellou Deno'
```

## API

### getStdin()

Get `stdin` as a `string`.

### getStdinBuffer()

Get `stdin` as a `Buffer`.

### getStdinSync()

Get `stdin` as a `string` in sync mode.

### getStdinBufferSync()

Get `stdin` as a `Buffer` in sync mode.

## Inspired

- Inspired by [get-stdin](https://github.com/sindresorhus/get-stdin) - Get stdin as a string or buffer
