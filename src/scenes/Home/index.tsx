import { useMediaQuery } from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import { SelectedPage } from "~/shared/types";
import ActionButton from "~/shared/ActionButton";
import HomePageText from "~/assets/HomePageText.png";
import HomePageGraphic from "~/assets/HomePageGraphic.png";
import SponsorRedBull from "~/assets/SponsorRedBull.png";
import SponsorForbes from "~/assets/SponsorForbes.png";
import SponsorFortune from "~/assets/SponsorFortune.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery({
        query: "(min-width: 1060px)",
    });

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:mb-0"
        >
            {/* Image and Main Header */}
            <motion.div
                className="mx-auto w-5/6 md:flex items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="Home page text" />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness
                            Classes. World Class Studios to get the Body Shapes
                            That you Dream of.. Get Your Dream Body Now.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition-all duration-500"
                            onClick={() =>
                                setSelectedPage(SelectedPage.ContactUs)
                            }
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="Home Page Graphic" />
                </div>
            </motion.div>

            {/* Sponsors */}
            {isAboveMediumScreen && (
                <div className="h-[150px] w-full bg-primary-100 py-10 flex items-center">
                    <div className="mx-auto w-5/6">
                        <div className="flex items-center justify-between">
                            <img src={SponsorRedBull} alt="redBull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
