const decoder = new TextDecoder();

/**
 * Returns an Uint8Array from standard input
 */
export async function getStdinBuffer(): Promise<Uint8Array> {
  const bytes: number[] = [];

  while (true) {
    // Read bytes one by one
    const buffer = new Uint8Array(1);
    const readStatus = await Deno.stdin.read(buffer);

    // Found EOL
    if (readStatus === null || readStatus === 0) {
      break;
    }

    const byte = buffer[0];

    // On Enter, exit
    if (byte === 10) {
      break;
    }

    bytes.push(byte);
  }

  return Uint8Array.from(bytes);
}

/**
 * Returns a string from standard input
 */
export async function getStdin(): Promise<string> {
  const buffer = await getStdinBuffer();

  return decoder.decode(buffer);
}

/**
 * Returns an Uint8Array from standard input in sync mode
 */
export function getStdinBufferSync(): Uint8Array {
  const bytes: number[] = [];

  while (true) {
    // Read bytes one by one
    const buffer = new Uint8Array(1);
    const readStatus = Deno.stdin.readSync(buffer);

    // Found EOL
    if (readStatus === null || readStatus === 0) {
      break;
    }

    const byte = buffer[0];

    // On Enter, exit
    if (byte === 10) {
      break;
    }

    bytes.push(byte);
  }

  return Uint8Array.from(bytes);
}

/**
 * Returns a string from standard input in sync mode
 */
export function getStdinSync(): string {
  const buffer = getStdinBufferSync();

  return decoder.decode(buffer);
}
