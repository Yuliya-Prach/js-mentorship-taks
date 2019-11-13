function plus(a){
    return function(b){
        return a + b;
    }
}

console.log(plus(2)(3));
console.log(plus(12)(16));

function compareObjects(a, b) {
    for (let key in a) {
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            if (compareObjects(a[key], b[key]) === false)
                return false;
        }
        else if (!(b.hasOwnProperty(key) && (a[key] === b[key]))) {
            return false;
        }
    }
    return true;
}

let ob1 = {
  name: "Yuliya",
  innerObj: {
      age: 24
  }
};

let ob2 = {
    name: 'Yuliya',
    innerObj: {
        age: 23
    }
};

console.log(compareObjects({}, {}));
console.log(compareObjects(ob1, ob2));
