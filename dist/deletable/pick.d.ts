import Deletable from "./deletable";
export default function Pick<DeletableType extends Deletable>(object: DeletableType): Pick<DeletableType, 'deleted'>;
