import Mode from './mode/mode.js';

type Order<Type extends object = object> = Partial<Record<keyof Type, Mode>>;
export default Order;
