import Insert from "../../dist/database/insert";
import Connection from "../connection";
import GrandParentGenerate from "../grand-parent/grand-parent-generate";
import ParentGenerate from "../parent/parent-generate";
import ChildrenGenerate from "../children/children-generate";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let grandParent : number;
let prent : number;


it('grand-parent', (done)=>{

    Connection.then(function (connection) {

        let entity = GrandParentGenerate()

        Insert(connection.manager, entity).then((result)=>{

            expect(result).toEqual(entity);
            expect(typeof result.id).toBe("number");
            grandParent = <number>result.id;
            done();
        });
    })
})

it('parent', (done)=>{

    Connection.then(function (connection) {

        let entity = ParentGenerate(grandParent);
        Insert(connection.manager, entity).then((result)=>{

            expect(result).toEqual(entity);
            expect(typeof result.id).toBe("number");
            prent = <number>result.id;
            done();
        });
    })
})

it('children', (done)=>{

    Connection.then(function (connection) {

        let entity = ChildrenGenerate(prent);

        Insert(connection.manager, entity).then((result)=>{

            expect(result).toEqual(entity);
            expect(typeof result.id).toBe("number");
            done();
        });
    })
});
