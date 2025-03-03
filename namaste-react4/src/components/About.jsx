import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return(
        <>
        <h1>This is about section</h1>
        <ul>
            <li>About us</li>
            <li>career</li>
        </ul>
        <User
            name={"Fasal Mammasrayil"}
            place={"Sulthan Bathery"}
            number={"989599 8571"}
        />

        <UserClass
        name={"Fasal Mammasrayillakath"}
        place={"Sulthan Bathery"}
        number={"989599 8571"}
        />
    
    </>
    )
}
export default About