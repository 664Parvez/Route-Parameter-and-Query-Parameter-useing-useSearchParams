{/* url : localhost/post/?name=parvez&age=24 */}

import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Post = () => {

    const [ name, setName ] = useState()
    const [ searchParams, setSearchParams ] = useSearchParams()

    const submitValue = (e) => {
        e.preventDefault()
        setSearchParams( { name : name } )
    }

  return (
    <>

    {/* Dynamically */}
    <form onSubmit={ submitValue }>
        <input type="text" value={ name } onChange= { 
            (e) => {
                setName (e.target.value)
            }
        } />
        <button type='submit'>Click Here</button>
    </form>

    <h1>User Name id { searchParams.get( 'name' ) }</h1>


    {/* Manually */}
        {/* Post { searchParams.get( 'id') }
        name : { searchParams.get('name') } */}
    </>
  )
}

export default Post
