import { subtract } from '../src/index';

test('should subtract two number',() => {
    expect(subtract(5,1)).toEqual(4);
});