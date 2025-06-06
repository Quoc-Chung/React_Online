import './Header.css';
export default function Header({ user }) {
    return (
        <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/giohang">Giỏ hàng</a></li>
                <li><a href="/contact">Contact</a></li>
                {user && user.role === 'admin' && (
                    <li><a href="/admin">Admin</a></li>
                )}
            </ul>
        </nav>
        </header>
    );
}
