import React from "react"

const Ninjas =(props)=>{
        const {ninjas,deleteNinja}=props
        let ninjaList= ninjas.map((ninja)=>{
            return(
                <div key={ninja.id}>
                    <h2>Ninja Country:{ninja.country}</h2>
                    <h5>Ninja Belt:{ninja.belt}</h5>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
                </div>
            )
        })
        return(
            <div>
                {ninjaList}
            </div>
        )
}

export default Ninjas