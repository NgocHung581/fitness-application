import { ClassType } from "~/shared/types";

type Props = { item: ClassType };

const Class = ({ item: { name, description, image } }: Props) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className="p-5 absolute z-30 h-full w-full flex flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>

            <img src={image} alt="Image" />
        </li>
    );
};

export default Class;
