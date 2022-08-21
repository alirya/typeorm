import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../../../connection";
import Numeric from "../../../../dist/id/validator/numeric";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('number', ()=>{

    const vaidatable = Numeric()(1);

    expect(vaidatable.valid).toBeTrue();
    expect(vaidatable.message).toEqual([ 'type must string, actual number.' ]);
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
        'type must string, actual object.',
        [ 'type must number, actual object.' ]
    ]);
});
