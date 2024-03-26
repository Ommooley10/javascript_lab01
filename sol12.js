function intersectionArray(arr1,arr2){
    let intersection=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            intersection.push(arr1[i]);        }
    }
    console.log(...intersection);
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
intersectionArray(array1,array2);