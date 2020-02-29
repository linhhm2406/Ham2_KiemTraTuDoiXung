function isPalindrome(str) {
    let check_result;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] == str[str.length - i - 1]) {
            check_result = true;
        } else {
            check_result = false;
        }
    }
    return check_result;
}

let input_word = prompt('Nhap vao tu can kiem tra');
let check_result = isPalindrome(input_word);
// console.log(input_word;
if (check_result===true) {
    alert('Tu vua nhap la tu doi xung');
} else {
    alert('Tu vua nhap KHONG PHAI la tu doi xung');
}