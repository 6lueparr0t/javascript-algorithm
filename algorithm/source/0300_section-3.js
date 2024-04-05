// https://www.udemy.com/course/best-javascript-data-structures/?couponCode=KEEPLEARNING

/**

Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

*/

let instructor = {
    firstName: "Daehyun",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//     ◼                 ◼                     ◼
// firstName        isInstructor        favoriteNumbers

// Object.keys(instructor) - O(N)
// Object.values(instructor) - O(N)
// Object.entries(instructor) - O(N)
// hasOwnProperty - O(1)

/*

push - O(1)
pop - 0(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * log N)
forEach/map/filter/reduce/etc. - O(N)

*/