import ValidatorInterface from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default function Id(messages?: (results: (Message & Validatable)[]) => any): ValidatorInterface<any, number>;
