import Standard from '../../../dist/table/standard.js';
import GrandParent from '../../grand-parent/grand-parent.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let standard  = Standard(GrandParent, 'GP');

let string : typeof GrandParent = standard.entity;

