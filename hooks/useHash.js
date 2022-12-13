import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";

// function hashMessage(message) {
//   console.log("message in bytes", utf8ToBytes(message));
//   console.log("message hashed in bytes", keccak256(utf8ToBytes(message)));
//   return keccak256(utf8ToBytes(message));
// }

const useHashMessage = (message) => {
  return toHex(keccak256(utf8ToBytes(message)));
};

export default useHashMessage;
