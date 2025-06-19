export default function FilterBtn({ children, className, onClick }) {
    return (
        <button className={className} onClick={onClick} type='button'>
            {children}
        </button>
    )
};