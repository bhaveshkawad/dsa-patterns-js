/*
✅ Problem Statement:
Implement Promise.all from scratch in JavaScript.

Promise.all should:
1. Accept an iterable (array) of promises or values
2. Resolve with an array of results when ALL promises resolve
3. Preserve the order of results (same as input order)
4. Reject immediately if ANY promise rejects

--------------------------------------------------

✅ Input:
p1 = Promise.resolve(10)
p2 = new Promise(resolve => setTimeout(() => resolve(20), 1000))
p3 = 30

Promise.all([p1, p2, p3])

--------------------------------------------------

✅ Output:
[10, 20, 30]

--------------------------------------------------

✅ Failure Input:
p1 = Promise.resolve(10)
p2 = Promise.reject("Error occurred")

Promise.all([p1, p2])

--------------------------------------------------

✅ Failure Output:
Error occurred

--------------------------------------------------

✅ Approach:
1. Return a new Promise.
2. Create a results array of same length as input.
3. Keep a counter to track resolved promises.
4. For each item:
   - Wrap it with Promise.resolve() (to handle non-promises)
   - On resolve:
       • store result at correct index
       • increment counter
       • if all resolved → resolve results array
   - On reject:
       • immediately reject the outer promise

--------------------------------------------------

✅ Time Complexity:
O(n)  → where n is number of promises

--------------------------------------------------
*/

function myPromiseAll (promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let completed = 0

    if (promises.length === 0) {
      resolve(results)
      return
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value
          completed++

          if (completed === promises.length) {
            resolve(results)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  })
}

/* ---------------- RUN PROGRAM ---------------- */

const p1 = Promise.resolve(10)
const p2 = new Promise(resolve => setTimeout(() => resolve(20), 1000))
const p3 = 30

myPromiseAll([p1, p2, p3])
  .then(result => {
    console.log(result) // [10, 20, 30]
  })
  .catch(error => {
    console.error(error)
  })

/* -------- FAILURE CASE -------- */

const p4 = Promise.resolve(100)
const p5 = Promise.reject(new Error('Error occurred'))

myPromiseAll([p4, p5])
  .then(console.log)
  .catch(console.error) // Error occurred
