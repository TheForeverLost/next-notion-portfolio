import { CustomButton } from "@components/button";
import { DarkModeToggle } from "@components/darktoggle";
import { CustomLink } from "@components/link";
import { Menu } from "@components/menu";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export const Header: React.FC = () => {
    const { scrollY } = useViewportScroll();
    const buttonAppearance = useTransform(
        scrollY,
        [0, 300, 325],
        [-100, -100, 0],
    );
    const headerDisappearance = useTransform(
        scrollY,
        [0, 250, 300],
        [0, 0, -300],
    );

    return (
        <header>
            <motion.div
                className="header border-b-2 border-secondary bg-primary"
                style={{ y: headerDisappearance }}
            >
                <CustomLink
                    href="/"
                    className="font-logo my-auto text-4xl font-semibold w-2/5"
                >
                    AJ
                </CustomLink>
                <DarkModeToggle />
                <div className="my-auto w-2/5">
                    <Menu />
                </div>
            </motion.div>
            <motion.div className="header" style={{ y: buttonAppearance }}>
                <CustomButton text="Back to top" href="#" Icon={FaArrowUp} />
            </motion.div>
        </header>
    );
};
