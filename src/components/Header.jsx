import Logo from "./ui/Logo";
import ThemeSwitcher from "./ui/ThemeSwitcher";

export default function Header() {
    return(
        <>
            <header>
                <div className="container">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>
        </>
    )
};