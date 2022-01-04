module.exports = function toReadable (number) {
    const dictionary = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }
        const array = number.toString().split('').reverse()
    let result = '';

    if (array[2]) {
        result += dictionary[Number(array[2])] + ' ' + dictionary[100]
    }

    if (array[1]) {
        const n = Number(array[1]) * 10;
        if (n > 19) {
            if (array[2]) result += ' ' 
            result += dictionary[n]
            if (array[0]) {
                if (array[0] != 0) {
                    if (array[1]) result += ' ' 
                    result += dictionary[Number(array[0])]
                }
            }
        } else if (n > 0) {
            if (array[2]) result += ' ' 
            result += dictionary[n + Number(array[0])]
        } else if (array[0] && array[0] > 0) {
            if (array[1]) result += ' '
            result += dictionary[Number(array[0])]
        }
    } else if (array[0]) {
        if (array[1]) result += ' '
        result += dictionary[Number(array[0])]
    }

    return result
    }

