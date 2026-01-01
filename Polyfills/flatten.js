function flattenArray (arr) {
  const result = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
  }

  return result
}

// Example
const arr = [1, [2, 3], [4, [5, [6, 7]]]]
console.log(flattenArray(arr))

function flattenObject (obj, parentKey = '', result = {}) {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key
    const value = obj[key]

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          flattenObject(item, `${newKey}.${index}`, result)
        })
      } else {
        flattenObject(value, newKey, result)
      }
    } else {
      result[newKey] = value
    }
  }
  return result
}

const obj = {
  user: {
    name: 'Bhavesh',
    address: {
      city: 'Mumbai',
      zip: 400001,
      location: {
        lat: 23,
        lon: 42
      }
    }
  },
  active: true,
  items: [
    { id: 1, name: 'bhavesh' },
    { id: 2, name: 'anand' }
  ]
}

// Example

console.log(flattenObject(obj))
