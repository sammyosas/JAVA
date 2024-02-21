function findMinMax(arr) {
    // Initialize variables to hold the maximum and minimum values
    let max = arr[0]; // let's Assume the first element as maximum
    let min = arr[0]; //let's Assume the first element as minimum
    
    // repeat through the array to find the maximum and minimum values
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is greater than the current maximum
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
        // Check if the current element is smaller than the current minimum
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }
    
    // Return the maximum and minimum values as a string
    return `${max}, ${min}`;
}

// Example usage:
console.log(findMinMax([3, 7, 2, 9, 1]));       // should return 9, 1
console.log(findMinMax([-1, -5, -3, -9, -2])); // should return -1, -5
console.log(findMinMax([10, 0, 5, 15, 8]));   // should return 15, 0

// Test Exercises:
console.log(findMinMax([10, -7, 12, 39, -1, -5, 0, 21, 9 , -19, -1, -3, 13]));
console.log(findMinMax([0, 1, 11, -1 , -(-1), 10, -111]));
console.log(findMinMax([80, 1, +11, -1 , 1, 10, 8]));



function calculateDaysToReachTop(columnHeight, dayDistance, nightDistance) {
    // If the distance the snail crawls during the day is greater than or equal to the height of the column,
    // the snail will reach the top on the first day.
    if (dayDistance >= columnHeight) {
        return 1; // Snail reaches the top on the first day
    }

    // switch on variables to track the number of days and the total distance covered by the snail.
    let days = 0; // Initialize days counter
    let totalDistance = 0; // Initialize total distance covered by the snail

    // Continue looping until the total distance covered by the snail is equal to or overrun the height of the column.
    while (totalDistance < columnHeight) {
        // Increase in the number of days since the snail is making progress.
        days++;

        // Add the distance covered by the snail during the day to the total distance.
        totalDistance += dayDistance; // Progress during the day

        // If the total distance covered by the snail is equal to or surpass the height of the column,
        // the snail has reached the top of the column, so exit the loop.
        if (totalDistance >= columnHeight) {
            break; // If snail reaches or surpass the top during the day
        }

        // Subtract the distance the snail slides down during the night from the total distance.
        totalDistance -= nightDistance; // Regression during the night
    }

    // Return the number of days it took for the snail to reach the top of the column.
    return days;
}

// for Example:
console.log(calculateDaysToReachTop(10, 3, 2));   // Output should be 8
console.log(calculateDaysToReachTop(20, 7, 2));   // Output should be 5
console.log(calculateDaysToReachTop(5, 2, 1));    // Output should be 4
