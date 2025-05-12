isPalindrome(s) {
    let clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    console.log(clean)
    let reversed = clean.split('').reverse().join('')
return clean === reversed;

}