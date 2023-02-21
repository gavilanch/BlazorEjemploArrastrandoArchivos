export function inicializarPegadoDeArchivo(contenedorDestinoArrastre, inputFile) {

    contenedorDestinoArrastre.addEventListener('paste', onPaste);

    function onPaste(event) {
        inputFile.files = event.clipboardData.files;
        const changeEvent = new Event('change', { bubbles: true });
        inputFile.dispatchEvent(changeEvent);
    }

    return {
        dispose: () => {
            contenedorDestinoArrastre.removeEventListener('paste', onPaste);
        }
    }

}