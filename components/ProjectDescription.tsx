import { useState } from "react";

const sections = {
    1: {
        title: "Monkeytype",
        description: "A typing test website",
        link: "https://monkeytype.com/",
        type: "internship",
    },
};

const ProjectDescription = ({
    percentScrolled,
}: {
    percentScrolled: number;
}) => {
    const [section, setSection] = useState<number>(0);
    return <div></div>;
};

export default ProjectDescription;
