import {FC} from "react";

const ErrorMessage: FC = (): JSX.Element => {
    return (
        <div style={{display: 'flex', padding: '50px 0', alignItems: "center", justifyContent: 'center'}}>
            <img style={{display: 'block', width:'300px', height:'300px', objectFit:'contain',}} src={'/img/error.gif'} alt='Error'/>
        </div>
    )
}

export default ErrorMessage;