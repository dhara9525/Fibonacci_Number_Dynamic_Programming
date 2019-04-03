/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) 
{  
    var arr=[];
    arr[0]=0;
    arr[1]=1;    
    if (N <= 1) 
       return N;
    for(var i=2;i<=N;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[N];
};