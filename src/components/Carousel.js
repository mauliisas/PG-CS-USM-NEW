import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Slider() {
    return (
        <Carousel className="z-10">
            <div className="relative h-full w-full">
                <img
                    src="/images/c1.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Link href={"/programme/computer-science"} legacyBehavior>
                            <a href={"/programme/computer-science"}>
                                <>
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-4xl font-extrabold"
                                    >
                                        MASTER OF SCIENCE
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80 font-bold"
                                    >
                                        (COMPUTER SCIENCE)
                                        MIXED MODE
                                    </Typography></>
                            </a>

                        </Link>

                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/images/c2.png "
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Link href={"/programme/data-science-analytic"} legacyBehavior>
                            <a href={"/programme/data-science-analytic"}>
                                <>
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-4xl font-extrabold"
                                    >
                                        MASTER OF SCIENCE
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80 font-bold"
                                    >
                                        (DATA SCIENCE AND ANALYTICS) COURSEWORK MODE
                                    </Typography></>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/images/c3.png"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Link href={"/programme/digital-transformation"} legacyBehavior>
                            <a href={"/programme/digital-transformation"}>
                                <>
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-4xl font-extrabold"
                                    >
                                        MASTER OF SCIENCE
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80 font-bold"
                                    >
                                        IN DIGITAL TRANSFORMATION COURSEWORK MODE
                                    </Typography></>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}