import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

function UserProfile({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [userId]);

    if (!user) return <p>Loading...</p>;
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}

export default UserProfile;
