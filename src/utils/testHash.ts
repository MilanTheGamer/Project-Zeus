import crypto from "crypto";
let createHah = crypto.createHash("sha256");

const hash = createHah.update("b'5'").digest("hex");

export default hash;
