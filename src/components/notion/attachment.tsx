import { RoundButton } from "@components/button";
import { CustomLink } from "@components/link";
import { renderText } from "@components/notion/text";

import { WebBookmarkBlock } from "@util/interface";

import { PropsWithRef } from "react";
import { FaArrowRight } from "react-icons/fa";

type WebBookmarkProps = PropsWithRef<WebBookmarkBlock>;

export const WebBookmark: React.FC<WebBookmarkProps> = ({
    id,
    bookmark,
}: WebBookmarkProps) => {
    const children =
        bookmark.caption.length > 0
            ? renderText(id, bookmark.caption)
            : "For more information";
    return (
        <CustomLink
            className="flex flex-row group items-center card justify-evenly prose mx-2 py-4"
            href={bookmark.url}
        >
            {children}
            <RoundButton href={bookmark.url} Icon={FaArrowRight} />
        </CustomLink>
    );
};
