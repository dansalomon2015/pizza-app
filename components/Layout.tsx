import { FC } from "react";
import { Footer, Navbar } from ".";

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
