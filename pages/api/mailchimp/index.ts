import { NextApiRequest, NextApiResponse } from "next";
import { IContact, ISend } from "../../../types/contact";
import { del, get, patch, post } from "./exports";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) return res.status(404).json({ message: "Send an id" });
    try {
      if (typeof id === "string") {
        const data = await del(id);
        return res.status(200).json({ message: data });
      }
      return res.status(404).json({ message: "Error: Send an email" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (req.method === "POST") {
    const newContact = req.body as ISend;
    try {
      if (!newContact.email_address || !newContact.status)
        return res
          .status(404)
          .json({ message: `Error: Send an email and status` });
      const data = await post(newContact);
      res.status(200).json({ message: data });
      return;
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (req.method === "PATCH") {
    const updateContact = req.body as ISend;
    try {
      if (!updateContact.email_address || !updateContact.status)
        return res
          .status(404)
          .json({ messasge: "Error: Send an email and status" });
      const data = await patch(updateContact);
      return res.status(200).json({ message: data });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  try {
    let { id, opt } = req.query as any;
    if (opt) opt = JSON.parse(opt);
    if (typeof id === "string") {
      const data = (await get(id)) as [IContact];
      res.status(200).json(data);
      return;
    }

    const data = (await get(null, opt)) as [IContact];
    res.status(200).json(data);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
}
