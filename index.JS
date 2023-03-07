function findMin(obj) {
    let min = null;
    for (let key in obj) {
      if (min === null) {
        min = obj[key];
      }
      else {
        min = Math.min(min, obj[key]);
      }
    }
    return min;
  }
  
  function findMax(obj) {
    let max = null;
    for (let key in obj) {
      if (max === null) {
        max = obj[key];
      }
      else {
        max = Math.max(max, obj[key]);
      }
    }
    return max;
  }
  
  function findAvgAndSum(obj) {
    let sum = 0;
    let count = 0;
    for (let key in salaries) {
        if (salaries.hasOwnProperty(key)) 
          sum+= salaries[key];
          count ++;
    }
    //return sum;
    return sum/count;
  }
  
  let salaries = {
    user1: 5000,
    user2: 2500,
    user3: 7500,
  }
  
  console.log(findMin(salaries));
  console.log(findMax(salaries));
  console.log(findAvgAndSum(salaries));