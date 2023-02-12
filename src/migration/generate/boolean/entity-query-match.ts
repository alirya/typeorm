import Escape from "@alirya/string/pattern/escape.js";

export default function EntityQueryMatch(
    query: string,
    table: string,
    tables: string[],
) : boolean {

    const firstLines : RegExpMatchArray|null = query.trim().match(/[^\n\r]*/);

    if(!firstLines) {

        return false;
    }

    const [firstLine] = firstLines;

    const compares : RegExpMatchArray[] = tables
        .map(tbl=>firstLine.match(new RegExp(Escape(tbl))))
        .filter(match=>!!match)
        .sort((val1 : RegExpMatchArray, val2 : RegExpMatchArray) => {

            const compare = (val1.index ?? 0) - (val2.index ?? 0);

            // same index match, compare for length
            if(compare === 0) {

               return val2[0].length - val1[0].length;
            }

            return compare;

        }) as RegExpMatchArray[];

    if(compares[0][0] === table) {

        return true;
    }

    return false;
}