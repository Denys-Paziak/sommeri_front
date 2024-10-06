"use client"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const MasonryGrid = ({children}: { children: React.ReactNode; }) => {
    return (
            <Masonry gutter="50px">
                {children}
            </Masonry>
    );
};

export default MasonryGrid;
