/*
✅ Problem Statement:
Implement an Object (Hash Table) in JavaScript from scratch using arrays.
The object should support the following operations:
1. set(key, value)
2. get(key)
3. remove(key)

Collision handling must be done using Separate Chaining (array of key–value pairs).

--------------------------------------------------

✅ Input:
Operations:
set("name", "Bhavesh")
set("role", "Backend Engineer")
set("company", "Startup")

get("name")
get("role")

remove("role")
get("role")

--------------------------------------------------

✅ Output:
Bhavesh
Backend Engineer
undefined

--------------------------------------------------

✅ Approach:
1. Use an array called buckets.
2. Convert key → hash index using a hash function.
3. Each bucket stores an array of [key, value] pairs.
4. Handle collisions by pushing multiple pairs into the same bucket.

--------------------------------------------------

✅ Time Complexity:
Average Case:
- set → O(1)
- get → O(1)
- remove → O(1)

Worst Case (all keys collide):
- O(n)

--------------------------------------------------
*/

// class MyObject {
//   constructor (size = 16) {
//     this.buckets = new Array(size)
//   }

//   // Hash function
//   hash (key) {
//     let hash = 0
//     for (const char of key) {
//       hash += char.charCodeAt(0)
//     }
//     return hash % this.buckets.length
//   }

//   set (key, value) {
//     const index = this.hash(key)

//     if (!this.buckets[index]) {
//       this.buckets[index] = []
//     }

//     const bucket = this.buckets[index]

//     for (const pair of bucket) {
//       if (pair[0] === key) {
//         pair[1] = value
//         return
//       }
//     }

//     bucket.push([key, value])
//   }

//   get (key) {
//     const index = this.hash(key)
//     const bucket = this.buckets[index]

//     if (!bucket) return undefined

//     for (const pair of bucket) {
//       if (pair[0] === key) {
//         return pair[1]
//       }
//     }

//     return undefined
//   }

//   remove (key) {
//     const index = this.hash(key)
//     const bucket = this.buckets[index]

//     if (!bucket) return false

//     for (let i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === key) {
//         bucket.splice(i, 1)
//         return true
//       }
//     }

//     return false
//   }
// }

class MyObject {
  constructor (size = 16) {
    this.size = size
    this.buckets = new Array(size)
  }

  hash (key) {
    let hash = 0
    for (const char of key) {
      hash += char.charCodeAt(0)
    }
    return hash % this.size
  }

  set (key, value) {
    const index = this.hash(key)
    if (!this.buckets[index]) {
      this.buckets[index] = []
    }
    const bucket = this.buckets[index]
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value
        return
      }
    }
    bucket.push([key, value])
  }

  get (key) {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if (!bucket) return undefined
    for (const pair of bucket) {
      if (pair[0] === key) return pair[1]
    }
    return undefined
  }

  remove (key) {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if (!bucket) return false
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1)
        return true
      }
    }
    return false
  }
}

/* ---------------- RUN PROGRAM ---------------- */

const obj = new MyObject(5)

obj.set('name', 'Bhavesh')
obj.set('role', 'Backend Engineer')
obj.set('company', 'Startup')

console.log(obj.get('name')) // Bhavesh
console.log(obj.get('role')) // Backend Engineer

obj.remove('role')
console.log(obj.get('role')) // undefined
