describe ("pow" , function() {
	it ("возводит в n-ю степень", function () {
		assert.equal(pow(2, 3), 8);
	});
	
	it ("возводит в n-ю степень", function () {
		assert.equal(pow(3, 4), 81);
	});
	
	it("при возведении в отрицательную степень результат NaN", function() {
    assert.equal(pow(2, -1), false);
	});

	it("при возведении в дробную степень результат NaN", function() {
    assert.equal(pow(2, 0.5), false);
	});
});

function pow(x, n) {
	if (n === 1) return x;
	if (getDecimal(n) != 0) return false;
	if (n < 0) return false;
	return x*pow(x, n-1);
}


function getDecimal(num) {
        var result;
        var initialNum = Math.abs(num);
        var roundedNum = Math.round(initialNum);

        if (roundedNum > initialNum) {
            result = roundedNum - initialNum - 1;
            result = Math.abs(result);
            result = +result.toFixed(10);
        }
        else {
            result = initialNum - roundedNum;
            result = +result.toFixed(10);
        }
        return result;
}