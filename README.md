# get_stdin ![ci](https://github.com/sant123/get_stdin/workflows/ci/badge.svg)

> Get [stdin](https://doc.deno.land/builtin/stable#Deno.stdin) as a string or buffer

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

### You can read whole files from stdin too

```ts
// example.ts
import { getStdin } from 'deno.land/x/get_stdin/mod.ts';

const input = await getStdin({ exitOnEnter: false });

console.log(`Received a bunch of (possibly) multiline text from stdin:\n${input}`);
```

```sh
$ echo lots\nof\nstuff\nhere > example.txt
$ cat example.txt | deno run example.ts
lots
of
stuff
here
```

## API

### getStdin(options?: GetStdinOptions)

Get `stdin` as a `string`.

### getStdinBuffer(options?: GetStdinOptions)

Get `stdin` as a `Buffer`.

### getStdinSync(options?: GetStdinOptions)

Get `stdin` as a `string` in sync mode.

### getStdinBufferSync(options?: GetStdinOptions)

Get `stdin` as a `Buffer` in sync mode.

### GetStdinOptions

- `exitOnEnter` (optional) - If `true`, stop reading the stdin once a newline char is reached. Defaults to `true`.

## Inspired

- Inspired by [get-stdin](https://github.com/sindresorhus/get-stdin) - Get stdin as a string or buffer
