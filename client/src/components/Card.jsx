import profilePic from '../assets/F2.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' alt="profile pic" src={profilePic}></img>
            <h2>Abhishek Nyamati</h2>
            <p>My name is Abhishek and i am a trainee engineer @AurionPro</p>
        </div>
    )
}

export default Card