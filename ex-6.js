let height = undefined;
let result;

function nullishCheck(params) {
    console.log(params);
    result = params ?? "Height is not defined"
}

nullishCheck(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
