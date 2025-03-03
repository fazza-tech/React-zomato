const User = ({name,place,number}) => {

    return(
        <div className="user-class">
            <h2>Name : {name}</h2>
            <h2>Place: {place}</h2>
            <h2>Conatct: {number}</h2>
        </div>
    )
}


export default User