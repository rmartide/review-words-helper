// This should be on a .json
export const mockedData = [
    { word: 'eindeutig', translations: ['obvio', 'inequivoco', 'indiscutible', 'indudable'] },
    { word: 'selbstverständlich', translations: ['obvio', 'evidente', 'lógico'] },
    { word: 'ausgezeichnet', translations: ['excelente', 'magnífico'] },
    { word: 'tatsächlich', translations: ['efectivamente'] },
    { word: 'begeister', translations: ['entusiasmado', 'impresionado'] },
    { word: 'hoffen', translations: ['esperar'] },
    { word: 'finden', translations: ['encontrar'] },
    { word: 'treffen', translations: ['encontrar'] },
    { word: 'suchen', translations: ['buscar'] },
    { word: 'erweitern', translations: ['alargar', 'dilatar', 'estirar'] },

    // { word: '', translations: [''] },
]

// Bad practice to loop two times the same array
export const mockedDictionary = {
    words: mockedData.map(row => row.word),
    translations: mockedData.map(row => row.translations)
}