import {motion} from 'motion/react';
import {ReactNode, useState} from 'react';
import {Link, useLocation} from "react-router";

interface AnimatedNavLinkProps {
    to: string;
    children: ReactNode;
}

export default function AnimatedNavLink({to, children} : AnimatedNavLinkProps) {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Link
                to={to}
                className={`relative text-lg font-medium no-underline`}
            >
                {children}
                <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-white origin-left"
                    initial={{scaleX: isActive ? 1 : 0}}
                    animate={{scaleX: isHovered || isActive ? 1 : 0}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                />
            </Link>
        </motion.div>
    );
};