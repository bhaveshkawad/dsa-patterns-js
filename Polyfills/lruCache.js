/*
✅ Problem Statement:
Implement an LRU (Least Recently Used) Cache in JavaScript.

The cache should:
1. Store key–value pairs up to a fixed capacity.
2. Return the value using get(key) in O(1) time.
3. Insert/update values using put(key, value) in O(1) time.
4. Remove the LEAST RECENTLY USED item when capacity is exceeded.

Order of usage must be preserved.

--------------------------------------------------

✅ Input:
capacity = 3

put(1, "A")
put(2, "B")
put(3, "C")
get(1)
put(4, "D")
get(2)
put(5, "E")
get(3)
get(4)
get(5)

--------------------------------------------------

✅ Output:
A
-1
-1
D
E

--------------------------------------------------

✅ Approach:
1. Use JavaScript Map because it preserves insertion order.
2. Least Recently Used (LRU) item is at the START of the Map.
3. Most Recently Used (MRU) item is at the END of the Map.
4. On get(key):
   - If key exists, delete it and reinsert it to move it to MRU position.
5. On put(key, value):
   - If key exists, delete it first.
   - Insert key-value pair.
   - If size exceeds capacity, remove the first key from Map.

--------------------------------------------------

✅ Time Complexity:
get → O(1)
put → O(1)

--------------------------------------------------
*/

class LRUCache {
  constructor (capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get (key) {
    if (!this.cache.has(key)) {
      return -1
    }

    const value = this.cache.get(key)

    // Move key to most recently used
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put (key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }

    this.cache.set(key, value)

    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }
  }
}

/* ---------------- RUN PROGRAM ---------------- */

const lru = new LRUCache(3)

lru.put(1, 'A')
lru.put(2, 'B')
lru.put(3, 'C')

console.log(lru.get(1)) // A

lru.put(4, 'D') // removes key 2
console.log(lru.get(2)) // -1

lru.put(5, 'E') // removes key 3
console.log(lru.get(3)) // -1

console.log(lru.get(4)) // D
console.log(lru.get(5)) // E
