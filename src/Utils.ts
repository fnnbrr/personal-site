export function PreloadImages(urls: string[]): void {
    urls.forEach((url: string) => {
        const image = new Image();
        image.src = url;
    })
}