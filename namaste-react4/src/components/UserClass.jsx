import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
                avatar_url: "dummy-url"
            }
        }

        console.log("CHild Constructor")
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/fazza-tech")
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json)
    }

    render(){

       const {name, url,id,avatar_url} = this.state.userInfo



    
        return(
            <div className="user-class">
            <img src={avatar_url} alt="" />
            <h2>Name : {name}</h2>
            <h2>Url: {url}</h2>
            <h2>Id: {id}</h2>
        </div>
        )
    }
}

export default UserClass