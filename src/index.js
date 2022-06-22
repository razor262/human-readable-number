module.exports = function toReadable(number) {
    let dict = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (0 <= number && number < 20) return dict[number];

    if (20 <= number && number < 100) {
        return calculusTen(number);
    }

    if (number >= 100) {
        let tensDecimer = number % 100;
        let hundred = (number - tensDecimer) / 100;

        if (tensDecimer === 0) {
            return `${dict[hundred]} hundred`;
        } else if (tensDecimer >= 20) {
            return `${dict[hundred]} hundred ${calculusTen(tensDecimer)}`;
        } else {
            return `${dict[hundred]} hundred ${dict[tensDecimer]}`;
        }
    }

    function calculusTen(number) {
        let decimer = number % 10;
        let tens = number - decimer;
        return decimer > 0 ? `${dict[tens]} ${dict[decimer]}` : `${dict[tens]}`;
    }
};
