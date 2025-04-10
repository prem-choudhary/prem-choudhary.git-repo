// 1. Reverse an Array
function reverseArray(arr) {
    return arr.reverse();
}

// 2. Find Maximum and Minimum in an Array
function findMinMax(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// 3. Check if Array is Sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

// 4. Rotate an Array by K Positions
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// 5. Find Duplicates in an Array
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}

// 6. Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0, result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// 7. Find Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return Array.from(set1).filter(item => set2.has(item));
}

// 8. Find Union of Two Arrays
function arrayUnion(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

// 9. Move Zeros to End
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}

// 10. Find Subarray with Given Sum
function subarrayWithSum(arr, target) {
    let sum = 0, map = new Map();
    map.set(0, -1);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - target)) {
            return arr.slice(map.get(sum - target) + 1, i + 1);
        }
        map.set(sum, i);
    }
    return [];
}

function subarrayWithSum(arr, target) {
    if (!Array.isArray(arr)) {
        console.error("Invalid input: Not an array!");
        process.exit(1); // Terminates Node.js script with error code
    }
    let sum = 0, map = new Map();
    map.set(0, -1);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - target)) {
            return arr.slice(map.get(sum - target) + 1, i + 1);
        }
        map.set(sum, i);
    }
    return [];
}