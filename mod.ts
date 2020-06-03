#!/usr/bin/env -S deno

export async function getStdin() {
  let result = "";
  const fd = Deno.stdin;
  const decoder = new TextDecoder();
  let readed: number | null = null;
  while (true) {
    const buffer = new Uint8Array(20);
    readed = await fd.read(buffer);
    if (readed === null || readed === 0) {
      break;
    }
    const char = decoder.decode(buffer);
    // On Enter, exit
    if (char === "\n") {
      break;
    }
    result += char;
  }
  return result;
}

export async function getStdinBuffer() {
  let result;
  const fd = Deno.stdin;
  const buffer = new Uint8Array(20);
  let readed: number | null = null;
  while (true) {
    readed = await fd.read(buffer);
    if (readed === null || readed === 0) {
      break;
    }
    result = buffer;
  }
  return result;
}
