// Weekly reading log
// This paticuler array will help store each of the days reading activity, including the boot title and minutes read
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// This function adds a new reading entry to the readingLog array
/**
 * Adds a new reading entry to the reading log.
 * @param {string} day - The day of the week.
 * @param {string} book - The title of the book read.
 * @param {number} minutes - Minutes spent reading.
 */
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
// This function will calculate the total number of minutes spent reading from log
/**
 * Calculates the total number of minutes spent reading.
 * @param {Array} log - An array of reading entries.  
 * @returns {number} The total minutes read.
 */
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes; // Add the minutes from each entry to the total
  }
  return total; // Return the final total minutes
}

// Returns the book read most frequently
// This function find and returns the book that was read mostly durnig the week
/**
 * Finds the book that was read the most time during the week.
 * @param {Array} log - An array of reading entries
 * @returns {string|null} The title of the most frequently read book.
 */
function mostReadBook(log) {
  const bookCounts = {}; //  This ject will count how many times each book appears
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; // First time viewing this book
    } else {
      bookCounts[entry.book]++; // Book has already been seen, add 1 to its count
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;  // Update the most read book
      maxCount = bookCounts[book];  // Update the highest count
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// This function prints out a summary of each days reading activity
/**
 * Prints a summary of reading activity for each day in the log. 
 * @param {Array} log - An array of reading entries. 
 */
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Add a new reading entry for Saturday
addReadBook("Saturday", "Dune", 50);

// Print a summary of all reading activity
printDailySummary(readingLog);

// Print the total number of minutes read during the week
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Print the book that was read the most times
console.log("Most read book:", mostReadBook(readingLog));
