import { Request, Response } from 'express';

export const getHello = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'GO PDF - v0.1' });
};
