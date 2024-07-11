import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function View() {

    const user = usePage().props.auth.user;

    return(
        <div>
            <pre>
                {Object.keys(user).map((key, index) => (
                    <div key={index}>{key}: {user[key]}</div>
                ))}
            </pre>
        </div>
    )
}