const onlyLetters = (value) => /^[a-zA-Z]+$/.test(value)
const onlyNumbers = (value) => /^[0-9]+$/.test(value)
const isValidTelephone = (phone) => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)
const isAlfanumeric = (value) => /^[a-zA-Z0-9 áéíóúÁÉÍÓÚüÜ]+$/.test(value)

export{ onlyLetters, onlyNumbers, isValidTelephone, isAlfanumeric }