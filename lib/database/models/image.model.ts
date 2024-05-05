import { Document, model } from "mongoose";
import { Schema, models } from "mongoose";

export interface IImage extends Document {
    title: string; // Required string
    transformationType: string; // Required string
    publicId: string; // Required string
    secureURL: string; // URL as a string, required
    width?: number; // Optional number
    height?: number; // Optional number
    config?: Record<string, any>; // Optional object
    transformationURL?: string; // URL as a string, optional
    aspectRatio?: string; // Optional string
    color?: string; // Optional string
    prompt?: string; // Optional string
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date; // Optional, default to current Date
    updatedAt?: Date; // Optional, default to current Date
}

const ImageSchema = new Schema({
    title: { type: String, required: true }, 
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: String, required: true}, 
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationURL: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', 
ImageSchema);

export default Image;