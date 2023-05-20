import mongoose from "mongoose";
import Pin from "../models/Pin";

export const CreatePin = async (req: any, res: any) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const GetPins = async (req: any, res: any) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
}


