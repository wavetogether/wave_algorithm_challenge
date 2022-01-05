/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
     people.sort((a, b) => b - a);
     let i = 0; // 
     let len = people.length;

     for (; i < len; i++) {
         if (people[i] + people[len - 1] <= limit) {
            len--;
         }
     } 
     return i;
 }
