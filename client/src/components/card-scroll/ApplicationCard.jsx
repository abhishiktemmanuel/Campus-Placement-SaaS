import React, { useState } from "react";
import { memo } from "react";
import PropTypes from "prop-types";

const Card = memo(({ image, title = "Full-Time, Software Developer", company = "Company A", status = "Closed" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const statusColor = status === "Apply Now" ? "bg-[#5932EA]" : "bg-[#808287]";
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`snap-always snap-start flex flex-col min-w-[130px] w-[130px] items-center relative rounded-[13px] overflow-hidden  mx-2 shadow-md border-4 border-white ${
                isHovered ? "shadow-lg duration-300 scale-105" : "shadow-md"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex h-[90px] items-center relative self-stretch w-full bg-gradient-to-tr from-purple-300 to-white">
                <div className={`inline-flex flex-col items-center justify-center p-[4px] absolute top-0 left-0 ${statusColor} rounded-[6px_0px_6px_0px]`}>
                    <div className="relative w-fit mt-[-1.00px] font-medium text-white text-[9px] tracking-[0] leading-[12px] whitespace-nowrap">
                        {status}
                    </div>
                </div>
                <img className="pt-4 pb-2" alt="Image" src={image} />
            </div>
            <div className="h-[74px] items-start gap-[4px] p-[8px] relative w-full bg-white text-left">
                <div className="relative mt-[-1.00px] font-normal text-black text-[10px] tracking-[0] leading-[16px]">
                    {company}
                </div>
                <div className="relative font-medium text-black text-[13px] tracking-[0] leading-[24px] overflow-hidden text-ellipsis">
                    {title}
                </div>
            </div>
        </div>
    );
});

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
    status: PropTypes.string,
};

export default Card;