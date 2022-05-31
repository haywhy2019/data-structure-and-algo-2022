
import { defaultToString } from '../util';
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
      this.toStrFn = toStrFn; // {1}
      this.table = {}; // {2}
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
}