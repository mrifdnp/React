import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
    // eslint-disable-next-line react/prop-types
    const {label, name, type, placeholder} = props
    return(
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name= {name} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default InputForm