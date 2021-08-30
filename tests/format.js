'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});
	
	QUnit.test('format работает правильно c девятью колонками и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 200, -100, 2000, 10000, -20000 ];

		const expected =
			'0 1 2 10 200 -100 2000 10000 -20000';

		assert.strictEqual(format(input, 9), expected);
	});
	
	QUnit.test('format работает правильно c одной колонкой и отрицательными числами', function (assert) {
		const input = [ -1, -2, -3, -10, -100, -500, -1000, -10000, -99999 ];

		const expected =
			'    -1\n' +
			'    -2\n' +
			'    -3\n' +
			'   -10\n' +
			'  -100\n' +
			'  -500\n' +
			' -1000\n' +
			'-10000\n' +
			'-99999';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками с отрицательными числами', function (assert) {
		const input = [ -1, -2, -3, -10, -100, -1000, -10000, -10000 ];

		const expected2 =
			'    -1     -2\n' +
			'    -3    -10\n' +
			'  -100  -1000\n' +
			'-10000 -10000';

		const expected3 =
			'    -1     -2    -3\n' +
			'   -10   -100 -1000\n' +
			'-10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c несколькими колонками с отрицательными не целыми числами', function (assert) {
		const input = [ -1.333, -2, -3, -10.555, -100, -1000, -10000, -10000 ];

		const expected2 =
			'-1.333      -2\n' +
			'    -3 -10.555\n' +
			'  -100   -1000\n' +
			'-10000  -10000';

		assert.strictEqual(format(input, 2), expected2);
	});

	QUnit.test('format работает правильно при вводе не целого количества колонок', function (assert) {
		const input = [ 1, 2, 3 ];

		assert.strictEqual(format(input, 2.5), null);
	});

	QUnit.test('format работает правильно при вводе отрицательного количества колонок', function (assert) {
		const input = [ 1, 2, 3 ];

		assert.strictEqual(format(input, -2), null);
	});

	QUnit.test('format работает правильно при вводе некорректного количества колонок', function (assert) {
		const input = [ 1, 2, 3 ];

		assert.strictEqual(format(input, 'text'), null);
	});

	QUnit.test('format работает правильно при вводе некорректного массива чисел', function (assert) {
		const input = [ 1, 2, 'text', 3 ];

		assert.strictEqual(format(input, 1), null);
	});

	QUnit.test('format работает правильно при вводе не массива чисел', function (assert) {
		const input = 'Not array of number';

		assert.strictEqual(format(input, 1), null);
	});
});
