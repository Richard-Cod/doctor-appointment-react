const formatImageFromBackend =  (image : string) => {
    if(!image) return "https://picsum.photos/200/300"
    return image;
}

export {formatImageFromBackend}