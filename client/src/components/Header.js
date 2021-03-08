import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/savedbooks">
                <button>Saved Books</button>
            </Link>
        </>
    )
}