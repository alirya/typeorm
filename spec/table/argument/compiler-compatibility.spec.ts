import Standard from "../../../dist/table/standard";
import GrandParent from "../../grand-parent/grand-parent";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let standard  = new Standard(GrandParent, 'GP');

let string : typeof GrandParent = standard.entity;

