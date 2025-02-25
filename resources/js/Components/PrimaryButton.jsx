export default function PrimaryButton({
    title
}) {
    return (
        <button className="px-7 py-2 bg-[--primary-color] text-white font-bold transition-transform transform-gpu hover:shadow-lg hover:bg-gradient-to-br hover:from-[--secondary-color] hover:to-[--primary-color]">{title}</button>
    );
}
