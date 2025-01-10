export default function TextHead({title, color}) {
    return (
        <h1 className={`text-5xl poppins-bold ${color} line tracking-wider leading-[60px] text-shadow opacity-80`}>{title}</h1>
    )
}