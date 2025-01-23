export default function TextHead({title, color}) {
    return (
        <h1 className={`text-3xl md:text-5xl poppins-bold ${color} tracking-wider leading-[45px] md:leading-[70px] text-shadow opacity-80`} data-aos="zoom-in">{title}</h1>
    )
}