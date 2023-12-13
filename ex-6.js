let height = undefined;
let result;
function nullishCoalecing(item) {
  return (result = item ?? "Height is not defined");
}
nullishCoalecing(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
