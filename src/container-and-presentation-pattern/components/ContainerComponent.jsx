import { useState, useEffect } from "react";
import PresentationComponent from "./PresentationComponent";

const ContainerComponent = () => {
    const [ loading, setLoading ] = useState();
    const [ users, setUsers ] = useState();

    // application logic
    useEffect(() => {
        retrieveUsers();
    }, [])

    const retrieveUsers = async () => {
        setLoading(true);
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="container-component">
            <h3>Container and Presentation Pattern Example</h3>
            { loading ? "Loading..." : <PresentationComponent users={users} /> }
        </div>
    )

}

export default ContainerComponent