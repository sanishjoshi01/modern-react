import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: "adlas",
            label: "This is React Section",
            content: "This section contains all the information about react only. This section contains all the information about react only. This section contains all the information about react only. This section contains all the information about react only."
        },
        {
            id: "aasdadlas",
            label: "This is JS Section",
            content: " This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only. This section contains all the information about js only."
        },
        {
            id: "dasdasd",
            label: "This is CSS Section",
            content: "This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only. This section contains all the information about css only."
        }
    ]

    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;