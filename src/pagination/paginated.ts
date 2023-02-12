import Pagination from "./pagination.js";


export default interface Paginated extends Pagination {

    pages : number;
    total : number;

}