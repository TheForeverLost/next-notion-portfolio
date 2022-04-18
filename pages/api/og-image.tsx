import { getScreenshot } from "@util/chromium";
import { isDev } from "@util/config";
import { getBlogArticle } from "@util/notion";
import { getHTML } from "@util/template";
import { BlogArticle } from "@util/types";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { id } = req.query;
    try {
        const article: BlogArticle = await getBlogArticle(id.toString());
        const html = getHTML(article);
        // res.setHeader('Content-Type', 'text/html');
        //     res.end(html);
        //     return;
        const file = await getScreenshot(html, isDev);
        res.statusCode = 200;
        res.setHeader("Content-Type", `image/png`);
        res.setHeader(
            "Cache-Control",
            `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
        );
        res.end(file);
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
}
