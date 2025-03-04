import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react"

class About extends Component{
    constructor(props){
        super(props)

        console.log("Parent Constructur")
    }

    componentDidMount(){
        console.log("Parent Did Mount")
    }

    render(){

        console.log("Parent render")
        return(
            <>
            <h1>This is about section</h1>
            <ul>
                <li>About us</li>
                <li>career</li>
            </ul>
    
            <UserClass
            name={"Fasal Mammasrayillakath"}
            place={"Sulthan Bathery"}
            number={"989599 8571"}
            />
            
        
        </>
        )
    }
}

export default About