export const isImage = (attachment) => {
    // Assurez-vous que 'mime' est défini avant de tenter de le diviser
    let mime = attachment.mime || attachment.type
    mime = mime.split('/');
    return mime[0].toLowerCase() === 'image';
}
