class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const uint16Array = new Uint16Array(this.buffer);
    let result = "";
    for (let i = 0; i < uint16Array.length; i++) {
      result += String.fromCharCode(uint16Array[i]);
    }
    return result;
  }
}

export default ArrayBufferConverter;
