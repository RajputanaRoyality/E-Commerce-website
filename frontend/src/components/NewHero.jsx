import React, { useState } from "react";
import Fanta1 from "../assets/fanta1.jpg";
import Fanta2 from "../assets/fanta2.jpg";
import Fanta3 from "../assets/fanta3.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "./Navbar";


const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        },
    };
};

const headphoneData = [
    {
        id: 1,
        image: Fanta1,
        title: "Women Fashion",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "Women Store",
        newPrice:"Trendy",
        modal: "Fashion",
        bgColor: "#202020",
    },
    {
        id: 2,
        image: Fanta3,
        title: "Accesories",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "Men & Women",
        newPrice:"Bold",
        modal: "Accessories",
        bgColor: "#202020",
    },
    {
        id: 3,
        image: Fanta2,
        title: "Men's Cloth",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "Men's Section",
        newPrice:"Rough And Strong",
        modal: "Men's Clothing",
        bgColor: "#202020",
    },
];

const NewHero = () => {
    const [activeData, setActiveData] = useState(headphoneData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <>
            <motion.section
                initial={{ backgroundColor: activeData.bgColor }}
                animate={{ backgroundColor: activeData.bgColor }}
                transition={{ duration: 0.8 }}
                className="bg-brandDark text-white -z-4"
            >

                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                    {/* ______ Headphone Info ______ */}
                    <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
                        <div className="space-y-5 text-center md:text-left">
                            <AnimatePresence mode="wait">
                                {/* <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        mixBlendMode: "difference",
                                        scale: 10,
                                    }}
                                > */}
                                    <motion.h1
                                        key={activeData.id}
                                        variants={SlideRight(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="text-3xl pl-20 lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                                    >
                                        {activeData.title}
                                    </motion.h1>
                                {/* </UpdateFollower> */}
                            </AnimatePresence>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeData.id}
                                    variants={SlideRight(0.4)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="text-sm leading-loose ml-20 text-white/80"
                                >
                                    {activeData.subtitle}
                                </motion.p>
                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                {/* <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgColor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        scale: 6,
                                        backgroundElement: (
                                            <div>
                                                <img src={activeData.image} />
                                            </div>
                                        ),
                                    }}
                                > */}
                                    <motion.button
                                        key={activeData.id}
                                        variants={SlideRight(0.6)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        style={{ color: activeData.bgColor }}
                                        className="px-4 py-2 ml-20 bg-white inline-block font-normal rounded-sm"
                                    >
                                        Explore
                                    </motion.button>
                                {/* </UpdateFollower> */}
                            </AnimatePresence>

                            {/* ______ Headphone List Separator ______ */}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
                            >
                                <div className="w-20 h-[1px] bg-white"></div>
                                <p className="uppercase text-sm ">Top Recommendation</p>
                                <div className="w-20 h-[1px] bg-white"></div>
                            </motion.div>

                            {/* Headphone list switcher */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                                className="grid grid-cols-3 gap-10"
                            >
                                {headphoneData.map((item) => {
                                    return (
                                        // <UpdateFollower
                                        //     mouseOptions={{
                                        //         backgroundColor: item.bgColor,
                                        //         zIndex: 9999,
                                        //         followSpeed: 0.5,
                                        //         scale: 5,
                                        //         text: "View Details",
                                        //         textFontSize: "3px",
                                        //     }}
                                        // >
                                            <div
                                                key={item.id}
                                                onClick={() => handleActiveData(item)}
                                                className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                                            >
                                                <div className="flex justify-center">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className={`w-[100px] mt-10 img-shadow ${activeData.image === item.image
                                                                ? "opacity-100 scale-110"
                                                                : "opacity-50" 
                                                            }`}
                                                    />
                                                </div>
                                                <div className="!mt-6 space-y-1 text-center">
                                                    <p className="text-sm opacity-50">
                                                        {item.price}
                                                    </p>
                                                    <p className="font-bold">{item.newPrice}</p>
                                                    {/* <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p> */}
                                                </div>
                                            </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>

                    {/* ______ Hero Image ______ */}
                    <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                                exit={{
                                    opacity: 0,
                                    // scale: 0.9,
                                    x: -100,

                                    transition: {
                                        duration: 0.4,
                                    },
                                }}
                                src={activeData.image}
                                alt=""
                                className="lg:h-[450px] md:h-[200px] md:w-[300px] md:mb-50 xl:w-[450px] sm:ml-7 sm:w-[350px] img-shadow relative lg:mb-40 mt-40"
                            />
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeData.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                                exit={{
                                    opacity: 0,
                                    // scale: 0.9,

                                    transition: {
                                        duration: 0.4,
                                    },
                                }}
                                className="text-white/5 text-[200px] font-poppins mt-100 font-extrabold absolute top-0 -translate-x-1/2 -translate-y-1/2"
                            >
                                {activeData.modal}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* ______ WhatsApp Icon ______ */}
                    {/* <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
                        <a href="">
                            <FaWhatsapp />
                        </a>
                    </div> */}
                </div>
            </motion.section>
        </>
    );
};

export default NewHero;