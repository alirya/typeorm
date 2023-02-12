import {DataSource} from "typeorm";
import Connection from '../../../connection.js';
import Numeric from '../../../../dist/id/validator/numeric.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('number', ()=>{

    const vaidatable = Numeric()(1);

    expect(vaidatable.valid).toBeTrue();
    expect(vaidatable.message).toEqual([]/*[ 'type must string, actual number.' ]*/);
});


it('string', ()=>{

    const vaidatable = Numeric()('1');

    expect(vaidatable.valid).toBeTrue();
    expect(vaidatable.message).toEqual([  ]);
});

it('string', ()=>{

    const vaidatable = Numeric()(null);

    expect(vaidatable.valid).toBeFalse();
    expect(vaidatable.message).toEqual([
        'must in type of string, number, actual type object.',
        ['type must number, actual object.'],
    ]);
});
