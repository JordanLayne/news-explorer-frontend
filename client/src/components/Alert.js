import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Alert";
const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <Wrapper>
      <div className={`alert alert-${alertType}`}>{alertText}</div>
    </Wrapper>
  );
};

export default Alert;
