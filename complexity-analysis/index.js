const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

//* n = input_size => n = data

// O(n) => O => Big O Notation

// Complexity Values

/**
 * 1-> O(1)
 * 2-> O(log(n))
 * 3-> O(n)
 * 4-> O(n2), O(n3), O(n4) ...
 * 5-> O(n power of 2)
 * 6-> O(n!)
 */

// Explore O(1)
// O(1) => Constant Time

// Algorithm/Function works in the same way, irrespective of input
/**
 * data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * Example -> fn() => return data[0] + 3 => executes in constant time
 * data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...n];
 * Example -> fn() => return data[n] + 3 => executes in constant time
 *
 * Why this works in same way?
 * Because we don't have itearte to array to get the index
 * we already know the index we're just getting the value and adding 3 to it.
 *
 * Operations
 *    |
 *    |
 *    |
 *    |
 *    |        O(1)
 *    |_______________________
 *    |
 *    |_ _ _ _ _ _ _ _ _ _ _ _
 *            input
 */
