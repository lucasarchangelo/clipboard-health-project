const crypto = require("crypto");

const createHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

const createCandidateHash = (event) => {
  const data = JSON.stringify(event);
  return createHash(data);
};

const candidateConfig = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = event.partitionKey || createCandidateHash(event);
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";

  if (event) {
    return candidateConfig(event);
  }
  return TRIVIAL_PARTITION_KEY;
};
