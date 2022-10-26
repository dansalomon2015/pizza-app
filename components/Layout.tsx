import { FC } from "react";
import { Footer, Navbar } from ".";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
