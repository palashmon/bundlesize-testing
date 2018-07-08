const expect = require('chai').expect;
const numFormatter = require('.');

describe('#numFormatter', function() {
	it('should convert single digits', function() {
		const result = numFormatter(1);
		expect(result).to.equal('1');
	});

	it('should convert double digits', function() {
		const result = numFormatter(12);
		expect(result).to.equal('12');
	});

	it('should convert triple digits', function() {
		const result = numFormatter(123);
		expect(result).to.equal('123');
	});

	it('should convert 4 digits', function() {
		const result = numFormatter(1234);
		expect(result).to.equal('1,234');
	});
});
