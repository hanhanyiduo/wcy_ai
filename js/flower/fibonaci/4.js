const f = [];
const climbStaires = function(n){
  if(n==1) return 1;
  if(n==2) return 2;

  if(f[n] === undefined) f[n] = climbStaires(n-1) + climbStaires(n-2);
  return f[n];
}
