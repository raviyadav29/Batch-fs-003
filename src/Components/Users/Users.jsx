import { useState } from 'react'
import UserTable from './UserTable';
import FilterUsers from './FilterUsers';
import { getUsers } from '../API/Users';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState([]);

    const getData = () => {
        getUsers(setUsers, setState);
    }

    return (
        <div style={{ padding: "30px" }}>
            <h1>Users Information</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam impedit necessitatibus excepturi explicabo nemo expedita magnam quia ad voluptate cupiditate, deserunt ab, fugiat rerum itaque earum repudiandae at totam laborum voluptatem nam exercitationem consequatur a ex. Veritatis, ad earum nihil hic perspiciatis blanditiis officia libero quasi aperiam ea illo cumque culpa pariatur sed necessitatibus consequuntur iste voluptatem esse tempore voluptate. Ipsa facilis voluptate explicabo id natus. Repudiandae quasi pariatur modi aut, earum quam eius distinctio quidem et mollitia odit quos culpa? Animi vero neque sunt et explicabo adipisci autem quisquam sed voluptatum quo, libero magni dicta consequuntur aut necessitatibus eaque at, earum eum suscipit, nostrum cumque! Eligendi laboriosam harum temporibus cupiditate vitae in quia totam facere, corrupti pariatur aliquid voluptatum minus esse impedit odio placeat velit minima consectetur beatae fugit! Ad adipisci architecto hic sapiente minima magni inventore deleniti nam? Ullam quis, incidunt odio delectus laudantium in, maiores doloremque, voluptatum harum laboriosam facilis minus tempora impedit magnam cumque perspiciatis! Nobis dolor explicabo magni quisquam quibusdam sint nisi libero numquam at! Corrupti amet molestias et minus modi incidunt quidem quia fugiat atque, quos accusamus alias repellat aut ullam recusandae iusto magnam. Ipsam est tempora minima in praesentium dolorum vitae repellat?</p>
            <button onClick={getData}>Get Users</button>

            {
                users.length > 0 && <FilterUsers setUsers={setUsers} state={state} />
            }

            {
                users.length > 0 && <UserTable users={users} />

            }
        </div>
    )
}

export default Users