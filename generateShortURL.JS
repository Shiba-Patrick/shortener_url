//lowerCase+upperCase+number=26+26+10=62
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const upperLetter = lowerLetter.toUpperCase()
const number = '1234567890'

//將三個陣列結合在一起並運用split分割每一個字母及數字
const word = upperLetter.concat(lowerLetter).concat(number).split('')

//generate shortener URL  function
//for loop做5次亂數產生字元並加在網址後方
function generateShortURL() {
  let shortURL = ''
  for (let i = 1; i <= 5; i++) {
    const index = Math.floor(Math.random() * word.length)
    shortURL += word[index]
  }
  return shortURL
}

module.exports = generateShortURL