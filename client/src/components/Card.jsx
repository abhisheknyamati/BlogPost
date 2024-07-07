
function Card(){
    return(
        <div className="p-5">
            <div className="w-52 border-2 h-64 p-5 border-black font-mono">
                <div className="title text-xl font-bold">Title</div>
                <div className="desc text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia aliquam soluta blanditiis cumque natus optio explicabo maxime facere aperiam.</div>
                <div className="author text-sm font-semibold">@abhishek_nyamati</div>
                <div className="time text-sm bottom-0 right-0">11:11 am</div>
            </div>
        </div>
    )
}

export default Card