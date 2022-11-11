const { deterministicPartitionKey } = require("./dpk-refactor");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey, when given object that has partitionKey value", () => {
    const data = { object: "result", partitionKey: "1010101010" };
    const trivialKey = deterministicPartitionKey(data);
    const expectResult = "1010101010";
    expect(trivialKey).toEqual(expectResult);
  });

  it("Returns a hash of partitionKey, when given object that has partitionKey value and it is larger then MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = {
      object1: "11111111",
      object2: "11111111",
      object3: "11111111",
      object4: "11111111",
      object5: "11111111",
      object6: "11111111",
      object7: "11111111",
      object8: "11111111",
      object9: "11111111",
      object10: "11111111",
      object11: "11111111",
      object12: "11111111",
      object13: "11111111",
      object14: "11111111",
      object15: "11111111",
      object16: "11111111",
    };
    const data = { object: "result", partitionKey };
    const trivialKey = deterministicPartitionKey(data);
    const expectResult = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(partitionKey))
      .digest("hex");
    expect(trivialKey).toEqual(expectResult);
  });

  it("Returns the hash of data input, when given object without partitionKey", () => {
    const data = { object: "result" };
    const trivialKey = deterministicPartitionKey(data);
    const expectResult = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(data))
      .digest("hex");
    expect(trivialKey).toEqual(expectResult);
  });
});
