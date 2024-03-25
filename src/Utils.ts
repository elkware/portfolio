export const setTtile = (document :Document, title: string): void => {
    document.getElementsByTagName("html")[0].getElementsByTagName('head')[0].getElementsByTagName('title')[0].innerText = title;
}