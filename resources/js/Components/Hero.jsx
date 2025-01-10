import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextHead from "./TextHead";

export default function Hero(props) {
    const [currentUrlImg, setCurentUrlImg] = useState(0)
    const [beforeImg, setBeforeImg] = useState(0)
    const [active, setActive] = useState(false)

    const handleImg = (current) => {
        setBeforeImg(current)
    }

    return (
        <>
            <div className={`w-full h-full absolute top-0 left-0 bg-center bg-[--primary-color]`} style={{ backgroundImage: `url(${props.url[beforeImg]})`, backgroundSize: 'cover' }}>
                <div className="w-full h-full px-20 py-32 bg-black/70 relative">
                    <div className="w-[55%] h-full flex flex-col">
                        <TextHead title={"Tempat Tinggal Modern dengan Fasilitas Lengkap"} color={"text-white"} />
                        <p className="open-sans mt-2 text-2xl text-white opacity-70">Rasakan gaya hidup yang memadukan yang terbaik dari kedua dunia—kenyamanan dengan kemewahan.</p>
                        <span className="w-40 mt-6">
                            <PrimaryButton title={"Hubungi Kami"} />
                        </span>
                    </div>
                    <ul className="flex flex-col gap-y-3 absolute top-7 right-7" >
                        <li>
                            <button onClick={() => handleImg(0)} className="w-20 h-20 bg-center rounded-lg" style={{ backgroundImage: `url(${props.url[0]})`, backgroundSize: 'cover' }}></button>
                        </li>
                        <li>
                            <button onClick={() => handleImg(1)} className="w-20 h-20 bg-center rounded-lg" style={{ backgroundImage: `url(${props.url[1]})`, backgroundSize: 'cover' }}></button>
                        </li>
                        <li>
                            <button onClick={() => handleImg(2)} className="w-20 h-20 bg-center rounded-lg" style={{ backgroundImage: `url(${props.url[2]})`, backgroundSize: 'cover' }}></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}