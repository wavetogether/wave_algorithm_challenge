/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.keyMap = new Map();
  this.frequencyMapList = [new Map()];
  this.firstNonEmptyMapIndex = 0;
};

/** 
* @param {number} key
* @return {number}
*/
LFUCache.prototype.get = function(key) {
  if (this.capacity === 0) return -1;
  if (this.keyMap.get(key) === undefined) return -1;
  const {value, frequency} =  this.moveToNext(key);
  this.keyMap.set(key, {
    value,
    frequency,
  })
  return value;
};

LFUCache.prototype.moveToNext = function(key) {
  const {value, frequency} = this.keyMap.get(key);
  this.frequencyMapList[frequency].delete(key);

  if (frequency === this.firstNonEmptyMapIndex) {
    if (this.frequencyMapList[frequency].size === 0 ) {
      this.firstNonEmptyMapIndex += 1;
    }
  }

  if (this.frequencyMapList.length - 1 === frequency) {
    const map = new Map();
    map.set(key, value);
    this.frequencyMapList.push(map);
  } else {
    this.frequencyMapList[frequency + 1].set(key, value);
  }
  return {value, frequency: frequency + 1};
}

LFUCache.prototype.getHeadKeyOfMap = function(map) {
  for (const [key] of map) {
    return key;
  }
}

LFUCache.prototype.deleteFirstKeyInMap = function(map) {
  const keyToDelete = this.getHeadKeyOfMap(map);
  map.delete(keyToDelete);
  this.keyMap.delete(keyToDelete);
}

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return;

  const exists = this.keyMap.has(key);
  if (exists) {
    const {frequency} = this.moveToNext(key);
    this.keyMap.set(key, {
      value,
      frequency,
    })
  } else {
    if (this.keyMap.size === this.capacity) {
      this.deleteFirstKeyInMap(this.frequencyMapList[this.firstNonEmptyMapIndex]);
    } 
    this.frequencyMapList[0].set(key, value);
    this.keyMap.set(key, {
      value,
      frequency: 0,
    });
    this.firstNonEmptyMapIndex = 0;
  }
};

/** 
* Your LFUCache object will be instantiated and called as such:
* var obj = new LFUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
