// [Level1]

// < forEach 사용 >

const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
];

// forEach를 이용하여 objArray의 name을 모두 출력
objArray.forEach(function(item) {
  console.log(item.name);
});

  // [답]

  objArray.forEach(item => {
    console.log(item.name);
  }) // apple, banana, grape

// <----------------------------------------------------------------------------->

// <indexOf 구현>
// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];

function myIndexOf(arr, value) {
  // 배열을 처음부터 끝까지 순차적으로 확인
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i; // 값을 찾으면 그 인덱스를 반환
    }
  }
  return -1; // 값을 찾지 못한 경우 -1 반환
}

const index1 = arr.indexOf(3); // 2
const index2 = myIndexOf(arr, 3); // 2
console.log(index1 === index2); // true


// <----------------------------------------------------------------------------->
// < includes 구현 >

const arr0 = [1, 2, 3, 4, 5];

function myIncludes(arr, value) {
  // 배열을 처음부터 끝까지 순차적으로 확인
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true; // 값을 찾으면 true를 반환
    }
  }
  return false; // 값을 찾지 못한 경우 false 반환
}

const includes1 = arr.includes(3); // true
const includes2 = myIncludes(arr, 3); // true
console.log(includes1 === includes2); // true


// <----------------------------------------------------------------------------->
// Level2 - [forEach 구현심화]
const objArray0 = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
];

function myForEach(arr, callback) {
  // 배열을 처음부터 끝까지 순차적으로 확인
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);  // 각 요소에 대해 콜백 함수 실행
  }
}
objArray.forEach(function (obj) {
  console.log(obj);
});

myForEach(objArray, function (obj) {
  console.log(obj);
});
// <----------------------------------------------------------------------------->
// Level2 - [find 사용]

const objArray1 = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
];

const index = objArray1.findIndex(obj => obj.name === 'banana');

console.log(index); // Output: 0

// <----------------------------------------------------------------------------->
// findIndex를 이용하여 name 이 apple 인 객체의 index 찾기

const objArray2 = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
];

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i]; 
    }
  }
  return undefined; 
}
// ===================================
const result1 = objArray2.find(function (obj) {
  return obj.name === 'banana';
});
// ==================================
const result2 = myFind(objArray2, function (obj) {
  return obj.name === 'banana';
});

console.log(result1 === result2); // true

// ===============================================
  // 예상 출력 : { name: 'grape', price: 300 }

// <----------------------------------------------------------------------------->
// [Level 3]
// [findIndex 구현]
  const objArray3 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ];
  
  function myFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return i; 
      }
    }
    return -1; 
  }
  
  const result3 = objArray.findIndex(function (obj) {
    return obj.name === 'banana';
  });
  
  const result4 = myFindIndex(objArray, function (obj) {
    return obj.name === 'banana';
  });
  
  console.log(result3 === result4); // true
  
  // =====================================================
  
  // filter 를 이용하여 price가 200 이상인 객체 filter

  const objArray5 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ];
  
  // 200보다 작은 값
  const filteredArray = objArray5.filter(function (obj) {
    return obj.price >= 200;
  });
  
  console.log(filteredArray);
  
  // =====================================================
  const objArray6 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ];
  
  const pricesArray = objArray.map(function (obj) {
    return obj.price;
  });
  
  console.log(pricesArray);

  // =====================================================
  // [filter 구현]
  const objArray7 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ];
  
  // Implementing myFilter
  function myFilter(arr, callback) {
    const result = []; // Array to hold the filtered results
    
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]); // If callback returns true, push element into result array
      }
    }
    
    return result; // Return the filtered array
  }
  
  const filteredArray2 = objArray.filter(function (obj) {
    return obj.price >= 200;
  });
  
  const myFilteredArray = myFilter(objArray, function (obj) {
    return obj.price >= 200;
  });
  
  console.log(filteredArray2); // 예상값: [ { name: 'banana', price: 200 }, { name: 'grape', price: 300 } ]
  console.log(myFilteredArray); // 예상값: [ { name: 'banana', price: 200 }, { name: 'grape', price: 300 } ]
  console.log(filteredArray2 === myFilteredArray); // true
  
// =====================================================

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
const objArray8 = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
]

function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {

    result.push(callback(arr[i], i, arr));

  }

  return result;
}

// ======================================================
// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합 구하기.

const arr8 = [1, 2, 3, 4, 5];

const result = arr8.reduce((acc, currentValue) => {
  return acc + currentValue * 2;
}, 0); 

console.log(result); // 30 출력