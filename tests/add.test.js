import { add } from '../src/index';


test('should add two number',() => {
    expect(add(2,1)).toEqual(3);
});