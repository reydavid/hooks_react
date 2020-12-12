//Input arr = [1,2,3,4,9,10,11,12,14]
//Step through array elements
//Determine consecutive numbers
//If number = (index -1)+1
//and number !=
//send consecutive numbers to array
//Print arrays

var arr = [1,2,3,4,7,9,10,11,12,14];
ranges(arr);

function ranges(){
  const bigArr=[];
  const smallArr=[];
  const len=arr.length-1;

  for (let i=0;i<=len;i++){
      if (arr[0]==arr[i+1]-1 && arr[i]!=arr[i-1]+1){
        bigArr.push(arr[0]);
      } else if (arr[i]!=arr[i-1]+1 && arr[i]!=arr[i+1]-1 ){
        smallArr.push(arr[i]);
      } else if(arr[i]==arr[i-1]+1){
        bigArr.push(arr[i]);
      } else {
        bigArr.push(arr[i]);
      }
  }
  console.log(bigArr,smallArr);
}