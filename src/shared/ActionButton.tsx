import { ReactNode } from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    children: ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
    return (
        <AnchorLink
            className="rounded-sm bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition-all duration-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;
