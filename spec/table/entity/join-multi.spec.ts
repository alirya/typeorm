import Connection from '../../connection';
import Parent from '../../parent/parent';
import Standard from '../../../dist/table/column/standard';
import GrandParent from '../../grand-parent/grand-parent';
import TableEntity from '../../../dist/table/entity';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('entity alias', (done)=>{

    Connection().connect().then(connection=>{

        let builder = connection.getRepository(Parent).createQueryBuilder('P').select();

        builder.leftJoinAndSelect(GrandParent, 'GF', 'P.parent = :GF.id');
        builder.leftJoinAndSelect(GrandParent, 'GM', 'P.mother = :GM.id');

        try {

            let grandPrent = Standard(TableEntity(builder, GrandParent), 'name');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }


        done();

    }).catch(fail).then(done);

});


