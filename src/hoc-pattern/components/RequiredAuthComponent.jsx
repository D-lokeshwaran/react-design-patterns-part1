import withRequiredAuth from "./withRequiredAuth";

const RequiredAuthComponent = () => {
    return (
        <div className="required-auth-component">
            <h3>HOC Authentication Component Example</h3>
            I am required auth component, I'll only show if user authenticated and<br/>
            authorized with ROLES "admin" or "operator"
        </div>
    )

}

export default withRequiredAuth(RequiredAuthComponent, ["admin", "operator"]);