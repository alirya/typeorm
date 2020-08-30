import ExpandRelation from "../../../dist/array/expand-relation";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("0 parts", function() {

    let result = ExpandRelation('');
    expect(result).toEqual(['']);

});


it("1 parts", function() {

    let result = ExpandRelation('root');
    expect(result).toEqual(['root']);

});


it("2 parts", function() {

    let result = ExpandRelation('root.parent');
    expect(result).toEqual(['root', 'root.parent']);

});

it("3 parts", function() {

    let result = ExpandRelation('root.parent.child');
    expect(result).toEqual(['root', 'root.parent', 'root.parent.child']);

});
