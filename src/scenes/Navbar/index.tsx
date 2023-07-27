import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";
import Logo from "~/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "~/shared/types";
import ActionButton from "~/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const isAboveMediumScreen = useMediaQuery({
        query: "(min-width: 1060px)",
    });

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-all duration-500`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side */}
                    <img src={Logo} alt="Logo" />

                    {/* Right side */}
                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <a
                                    href="https://www.instagram.com/rio.le_/"
                                    target="_blank"
                                >
                                    <p>Sign In</p>
                                </a>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Become a Member
                                </ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled((prev) => !prev)}
                        >
                            <Bars3Icon className="w-6 h-6 text-white" />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Menu Icons */}
                    <div className="ml-[33%] flex flex-col gap-10 text-lg">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
