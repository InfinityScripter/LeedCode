let isMatch = (s, p) => {
    let reg = new RegExp(`^${p}$`)
    return reg.test(s)
}
console.log(isMatch("a", "a")) //false
console.log('fa')
