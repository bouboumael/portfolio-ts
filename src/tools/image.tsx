type ImageName = string

export function imageUrl(imageName: ImageName): string {
    try {
        return require(`../assets/images/${imageName}`)
    } catch (err) {
        return '';
    }
}
export function imageUploadUrl(imageName: ImageName): string {
    try {
        return window.location.origin + `/uploads/images/${imageName}`;
    } catch (err) {
        return '';
    }
}

export const imageBackground: (imageName: ImageName) => string = (imageName) => {
    return `url(${imageUrl(imageName)})`;
}
