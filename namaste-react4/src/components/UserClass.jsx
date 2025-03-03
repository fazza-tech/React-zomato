import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            count :0,
            count1 : 2
        }
    }

    render(){

        const {count,count1} = this.state


        const {name,place,number} = this.props
        return(
            <div className="user-class">
            <h2>Count : {count}</h2>
            <h3>Count : {count1}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count + 1,
                    count1:this.state.count1 + 1
                })
            }}>Counter</button>
            <h2>Name : {name}</h2>
            <h2>Place: {place}</h2>
            <h2>Conatct: {number}</h2>
        </div>
        )
    }
}

export default UserClass