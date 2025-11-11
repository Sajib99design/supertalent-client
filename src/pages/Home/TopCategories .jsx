
import { ArrowUpRight } from "lucide-react";
import React from "react";


const categories = [
    {
        name: "Web Development",
        src: "https://cdn.lordicon.com/jkzgajyr.json",
        img: "https://i.ibb.co.com/Hfq8xrK0/c3.jpg",
        text: "Web Developer with a passion for building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React."
    },
    {
        name: "Graphic Design",
        src: "https://cdn.lordicon.com/nocovwne.json",
        img: "https://i.ibb.co.com/MknH1XGs/c2.jpg",
        text: "Creative Graphic Designer specializing in visual storytelling. Skilled in Photoshop, Illustrator, and Figma to craft eye-catching designs."
    },
    {
        name: "Marketing",
        src: "https://cdn.lordicon.com/uwinmnkh.json",
        img: "https://i.ibb.co.com/3ycCx2rQ/c1.jpg",
        text: "Marketing professional focused on growing brands and engaging audiences. Skilled in digital marketing, social media, and conte"
    },
    {
        name: "Data & AI",
        src: "https://cdn.lordicon.com/fgkmrslx.json",
        img: "https://i.ibb.co.com/CK7ccKmz/api.png",
        text: "Data & AI enthusiast focused on turning data into actionable insights. Skilled in machine learning, Python, and data visualization."
    },
];

export default function TopCategories() {
    return (
        <div className="mt-20 bg-gradient-to-r from-[#632EE3]/10 to-orange-900/10 py-16 px-4">
            <div className="mx-auto ">
                <div className="md:flex justify-between items-center max-sm:text-center max-sm:mb-5">
                    <div className="md:mb-12 mb-3">
                        <h2 className="title  mb-3">
                            Browse talent by category
                        </h2>
                        <span> Get some Inspirations from 1800+ skills </span>
                    </div>
                    <div >
                        <button className="font-medium transition-all duration-500 flex gap-2 items-center  mx-auto bg-[#632EE3]/10 text-[#632EE3] py-3 px-8 rounded-full hover:text-white hover:bg-[#632EE3]/80">All Category  <ArrowUpRight /> </button>
                    </div>
                </div>
                {/* Grid */}
                <div className="grid  md:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition hover:-translate-y-1 bg-cover bg-center"
                            style={{ backgroundImage: `url(${cat.img})` }} // <-- এখানে img যোগ করা হলো
                        >
                            <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
                            <lord-icon
                                src={cat.src}
                                trigger="loop"
                                colors="primary:#632EE3,secondary:#ff8a00"
                                style={{ width: "90px", height: "90px" }}
                                speed="0.5"
                                delay={i * 500}
                            ></lord-icon>
                            <div className="relative text-center">
                                <h3 className="my-4  font-semibold text-white md:text-2xl text-[20px]  ">
                                    {cat.name}
                                </h3>
                                <p className="text-gray-200  md:text-sm ">{cat.text}</p>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
}
