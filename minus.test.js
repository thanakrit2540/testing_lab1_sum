const minus = require('./minus');

test('10 - 5 เท่ากับ 5', ()=> {
    expect(minus(10,5)).toBe(5);
});

test('5 - 6 เท่ากับ -1', ()=> {
    expect(minus(5,6)).toBe(-1);
})

test('8 - 3 เท่ากับ 5', ()=> {
    expect(minus(8,3)).toBe(5);
})

test('25 - 25 เท่ากับ 0', ()=> {
    expect(minus(25,25)).toBe(0);
})

test(' 2 - 1 เท่ากับ 1', ()=> {
    expect(minus(2,1)).toBe(1);
})