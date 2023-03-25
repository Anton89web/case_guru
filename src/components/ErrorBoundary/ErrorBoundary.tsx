import React, {Component} from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class ErrorBoundary extends Component<any, any>{
    state={
        error: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {

        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error){
            return <ErrorMessage/>
        }


        return this.props.children;
    }

}

export default ErrorBoundary