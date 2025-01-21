import React from "react"
import DefaultLayout from "../components/DefaultLayout"

function Home()
{
    const {cars} = useSelector(state=>state.carReducer)
    return(
        <DefaultLayout>
            <h1>Home pages</h1>
            <h1>The length of cars array is {cars.length}</h1>
        </DefaultLayout>
    )
}


export default Home