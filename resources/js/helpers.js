export const isImage = (attachment) => {
    // Assurez-vous que 'mime' est défini avant de tenter de le diviser
    if (!attachment.mime) {
        return false; // ou gérer l'erreur comme vous le souhaitez
    }
    const mime = attachment.mime.split('/');
    return mime[0].toLowerCase() === 'image';
}
