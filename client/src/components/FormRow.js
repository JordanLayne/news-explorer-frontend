import Wrapper from "../assets/wrappers/FormRow"

const FormRow = ({type,name,value,handleChange,labelText}) => {
    return (
        <Wrapper>
      <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
    </Wrapper>
    )
  }
  export default FormRow