import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //...
    
    res.setPreviewData({})

    const redirect =  req.query.redirect;

    if (typeof redirect === 'string') res.redirect(redirect)
}