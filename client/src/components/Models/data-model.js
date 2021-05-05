export const postSchema = {
    title: String,
    location: String,
    desc: String,
    fileName: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    dislikes: Number
}

export const initialPostScheme = {
    title: '',
    location: '',
    desc: '',
    fileName: '',
    date: new Date(),
    likes: 0,
    dislikes: 0
}