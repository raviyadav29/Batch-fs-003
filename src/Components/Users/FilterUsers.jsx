import React from 'react'

function FilterUsers({ setUsers, state }) {
    return (
        <div style={{ width: "500px", display: "flex", justifyContent: "space-evenly", margin: "20px auto", }}>
            <div>
                <input type='radio' name='gender' value="all" onChange={() => {
                    setUsers(state)
                }} />
                All
            </div>
            <div>
                <input type='radio' name='gender' value="male" onChange={() => {
                    setUsers(state.filter((data) => data.gender === "male"))
                }} />
                MALE
            </div>
            <div>
                <input type='radio' name='gender' value="female" onChange={() => {
                    setUsers(state.filter((data) => data.gender === "female"))
                }} />
                FEMALE
            </div>
        </div>
    )
}

export default FilterUsers

