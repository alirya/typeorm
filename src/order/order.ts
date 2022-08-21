import Mode from "./mode/mode";

type Order<Type extends object = object> = Partial<Record<keyof Type, Mode>>;
export default Order;
