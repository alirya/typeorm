import GrandParent from "../../grand-parent/grand-parent";
import Argument from "../../../dist/table/column/value";
import Entity from "../../../dist/table/entity";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it('basic', ()=>{

    let column  = Entity(GrandParent);
    let build = new Argument(column, 'id', 5);

    expect(build.column).toBe('GrandParent.id');
    expect(build.parameter).toBe('GrandParentid');
    expect(build.argument).toEqual({'GrandParentid':5});
})

