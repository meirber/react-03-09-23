import React from 'react'

interface User {
    id: number;
    שם: string;
    אימייל: string;
}

export default function Users({ users }: { users: User[] }) {
    return (
        <div>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>שם: {user.name}</p>
                        <p>אימייל: {user.email}</p>
                    </li>
                ))}
            </ul>
            <h2>הוספת משתמש חדש</h2>
            <div>
                <label>שם:</label>
                <input type="text" ref={nameRef} />
            </div>
            <div>
                <label>אימייל:</label>
                <input type="email" ref={emailRef} />
            </div>
            <button onClick={handleAddUser}>הוסף משתמש</button>

        </div>
    )
}
