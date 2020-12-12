//Input arr = [1,2,3,4,9,10,11,12,14]<br>
//Step through array elements<br>
//Determine consecutive numbers<br>
//If number = (index -1)+1<br>
//and number !=<br>
//send consecutive numbers to array<br>
//Print arrays<br>
<br>
var arr = [1,2,3,4,7,9,10,11,12,14];<br>
ranges(arr);<br>
<br>
function ranges(){<br>
  const bigArr=[];<br>
  const smallArr=[];<br>
  const len=arr.length-1;<br>
<br>
  for (let i=0;i<=len;i++){<br>
      if (arr[0]==arr[i+1]-1 && arr[i]!=arr[i-1]+1){<br>
        bigArr.push(arr[0]);<br>
      } else if (arr[i]!=arr[i-1]+1 && arr[i]!=arr[i+1]-1 ){<br>
        smallArr.push(arr[i]);<br>
      } else if(arr[i]==arr[i-1]+1){<br>
        bigArr.push(arr[i]);<br>
      } else {<br>
        bigArr.push(arr[i]);<br>
      }<br>
  }<br>
  console.log(bigArr,smallArr);<br>
}<br>
