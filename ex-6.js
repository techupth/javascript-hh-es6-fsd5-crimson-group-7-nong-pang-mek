let height = undefined;
let result = (height) => {
  return (result = height ?? "Height is not defined");
};

result(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

// isHeightDefine
