import GrandParent from "../grand-parent/grand-parent";
import Entity from "../../dist/table/entity";
import Parent from "../parent/parent";
import Join from "../../dist/table/join";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it('default', ()=>{

    let grand = Entity(GrandParent);
    let parent = Entity(Parent);
    let join = new Join(parent, 'parent', grand);

    expect(join.table).toBe('ParentparentGrandParent');
    expect(join.entity).toBe(Parent);
    expect(join.key).toEqual('parent');
})


