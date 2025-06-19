export default function FilterBtn({ children, className, onClick }) {
    return (
        <button className={className} onClick={onClick} >
            {children}
        </button>
    )
};