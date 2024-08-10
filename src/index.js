module.exports = function toReadable (number) {
    if (number === 0) return 'zero'
    const point = number % 10  // 9
    const ten = Math.floor((number % 100) / 10);// 99
    const hundred = Math.floor(number / 100);//9

    let result = ''

    function numPoint(value) {
        switch(value) {
            case 1 : return 'one'
            case 2 : return 'two'
            case 3 : return 'three'
            case 4 : return 'four'
            case 5 : return 'five'
            case 6 : return 'six'
            case 7 : return 'seven'
            case 8 : return 'eight'
            case 9 : return 'nine'
            default : return ''
      }
    }
    function numTeen(value) {
        switch(value){
            case 10 : return 'ten'
            case 11 : return 'eleven'
            case 12 : return 'twelve'
            case 13 : return 'thirteen'
            case 14 : return 'fourteen'
            case 15 : return 'fifteen'
            case 16 : return 'sixteen'
            case 17 : return 'seventeen'
            case 18 : return 'eighteen'
            case 19 : return 'nineteen'
            default : return ''
        }
    }
    function numTens(value) {
        switch(value){
            case 2 : return 'twenty'
            case 3 : return 'thirty'
            case 4 : return 'forty'
            case 5 : return 'fifty'
            case 6 : return 'sixty'
            case 7 : return 'seventy'
            case 8 : return 'eighty'
            case 9 : return 'ninety'
            default : return ''
        }
    }
    function numHundred(value) {
        return numPoint(value) + ' hundred'
    }

    if (hundred){
        result +=  numHundred(hundred) 
    }

    if (ten === 1) {
        result += (result ? ' ' : '') + numTeen(ten * 10 + point);
    } else {
        if (ten > 0) {
            result += (result ? ' ' : '') + numTens(ten);
        }
        if (point > 0) {
            result += (result ? ' ' : '') + numPoint(point);
        }
    }

    
    return result
}
