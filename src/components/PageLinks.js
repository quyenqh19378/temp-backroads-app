import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass, parentId }) => {
    return (
        <ul className={parentClass} id={parentId}>
            {pageLinks.map((link) => {
                return <PageLink key={link.id} {...link} itemClass={itemClass} />;
            })}
        </ul>
    );
};

export default PageLinks;
