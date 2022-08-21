import Pagination from "./pagination";


export default interface Paginated extends Pagination {

    pages : number;
    total : number;

}