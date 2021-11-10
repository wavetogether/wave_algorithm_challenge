
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
     let result = 0; //bort

     people.sort((a, b) => b - a);
     let wegith = 0; // 
     let len = people.length;

     for (; i < len; i++) {
         if (people[i] + people[len - 1] <= limit) {
            len--;
         }
     } 
     return i;
 }
