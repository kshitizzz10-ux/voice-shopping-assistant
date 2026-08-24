export const MULTILINGUAL_DICTIONARY = {
  'en-US': {
    addWords: ['add', 'need', 'buy', 'get', 'want', 'put', 'pick up', 'bring'],
    removeWords: ['remove', 'delete', 'take off', 'drop', 'clear', 'eliminate'],
    modifyWords: ['change', 'update', 'set', 'make'],
    searchWords: ['find', 'search', 'look for', 'where is', 'show me'],
    clearWords: ['clear list', 'clear all', 'delete all', 'empty list', 'clear my list'],
    messages: {
      added: (qty, unit, name) => `Added ${qty} ${unit} of ${name} to your list.`,
      removed: (name) => `Removed ${name} from your list.`,
      updated: (name, qty) => `Updated ${name} quantity to ${qty}.`,
      cleared: () => 'Cleared your shopping list.',
      clearedChecked: () => 'Cleared all checked items.',
      notFound: (name) => `Could not find ${name} on your list.`,
      searchResult: (count, query) => `Found ${count} items matching "${query}".`,
      notUnderstood: () => "I didn't quite catch that. Try saying 'Add 2 apples' or 'Find milk'.",
    }
  },
  'en-IN': {
    addWords: ['add', 'need', 'buy', 'get', 'want', 'put', 'lao', 'le aao', 'kharidna'],
    removeWords: ['remove', 'delete', 'hatao', 'hata do', 'nikal do'],
    modifyWords: ['change', 'update', 'badlo', 'karo'],
    searchWords: ['find', 'search', 'dhoondho', 'dekhao'],
    clearWords: ['clear list', 'sab hatao', 'list saaf karo'],
    messages: {
      added: (qty, unit, name) => `Added ${qty} ${unit} of ${name}.`,
      removed: (name) => `Removed ${name} from your list.`,
      updated: (name, qty) => `Updated ${name} quantity to ${qty}.`,
      cleared: () => 'Shopping list cleared.',
      clearedChecked: () => 'Removed checked items.',
      notFound: (name) => `Could not find ${name}.`,
      searchResult: (count, query) => `Found ${count} items for "${query}".`,
      notUnderstood: () => "Didn't catch that. Try 'Add 2 apples' or 'Search milk'.",
    }
  },
  'hi-IN': {
    addWords: ['जोड़ो', 'जोड़िए', 'डालो', 'लाओ', 'खरीदो', 'चाहिए', 'add', 'need', 'buy', 'le aao', 'kharidna'],
    removeWords: ['हटाओ', 'हटा दीजिए', 'निकालो', 'डिलीट', 'remove', 'delete'],
    modifyWords: ['बदलो', 'करो', 'change', 'update'],
    searchWords: ['खोजो', 'ढूंढो', 'दिखाओ', 'find', 'search'],
    clearWords: ['पूरी लिस्ट खाली करो', 'सब हटाओ', 'लिस्ट साफ करो', 'clear list'],
    messages: {
      added: (qty, unit, name) => `${name} को लिस्ट में जोड़ दिया गया है।`,
      removed: (name) => `${name} को लिस्ट से हटा दिया गया है।`,
      updated: (name, qty) => `${name} की मात्रा ${qty} कर दी गई है।`,
      cleared: () => 'आपकी पूरी लिस्ट खाली कर दी गई है।',
      clearedChecked: () => 'सभी टिक किए गए सामान हटा दिए गए हैं।',
      notFound: (name) => `लिस्ट में ${name} नहीं मिला।`,
      searchResult: (count, query) => `"${query}" के लिए ${count} उत्पाद मिले।`,
      notUnderstood: () => 'माफ़ कीजिए, समझ नहीं आया। कृपया दोबारा बोलें, जैसे "दूध जोड़ो"।',
    }
  },
  'es-ES': {
    addWords: ['añadir', 'agregar', 'comprar', 'necesito', 'quiero', 'pon', 'trae', 'add'],
    removeWords: ['eliminar', 'quitar', 'borrar', 'sacar', 'remove', 'delete'],
    modifyWords: ['cambiar', 'actualizar', 'modificar'],
    searchWords: ['buscar', 'encuentra', 'donde esta', 'find', 'search'],
    clearWords: ['borrar lista', 'vaciar lista', 'limpiar lista'],
    messages: {
      added: (qty, unit, name) => `Se añadió ${qty} ${unit} de ${name} a tu lista.`,
      removed: (name) => `Se eliminó ${name} de tu lista.`,
      updated: (name, qty) => `Se actualizó la cantidad de ${name} a ${qty}.`,
      cleared: () => 'Se ha vaciado la lista de compras.',
      clearedChecked: () => 'Se eliminaron los elementos completados.',
      notFound: (name) => `No se encontró ${name} en la lista.`,
      searchResult: (count, query) => `Se encontraron ${count} productos para "${query}".`,
      notUnderstood: () => 'No lo entendí bien. Prueba con "Añadir 2 manzanas".',
    }
  },
  'fr-FR': {
    addWords: ['ajouter', 'rajouter', 'acheter', 'besoin', 'mettre', 'prends', 'add'],
    removeWords: ['supprimer', 'enlever', 'retirer', 'effacer', 'remove'],
    modifyWords: ['changer', 'modifier', 'mettre a jour'],
    searchWords: ['chercher', 'trouver', 'ou est', 'find'],
    clearWords: ['vider la liste', 'effacer la liste', 'supprimer tout'],
    messages: {
      added: (qty, unit, name) => `Ajouté ${qty} ${unit} de ${name} à la liste.`,
      removed: (name) => `Supprimé ${name} de la liste.`,
      updated: (name, qty) => `Quantité de ${name} mise à jour à ${qty}.`,
      cleared: () => 'Liste de courses vidée.',
      clearedChecked: () => 'Articles cochés supprimés.',
      notFound: (name) => `Impossible de trouver ${name}.`,
      searchResult: (count, query) => `${count} articles trouvés pour "${query}".`,
      notUnderstood: () => 'Pardon, je n\'ai pas compris. Essayez "Ajouter du lait".',
    }
  },
  'de-DE': {
    addWords: ['hinzufügen', 'kaufen', 'brauche', 'packe', 'nimm', 'add'],
    removeWords: ['entfernen', 'löschen', 'streichen', 'remove'],
    modifyWords: ['ändern', 'aktualisieren'],
    searchWords: ['suchen', 'finde', 'wo ist', 'find'],
    clearWords: ['liste leeren', 'alles löschen'],
    messages: {
      added: (qty, unit, name) => `${qty} ${unit} ${name} zur Liste hinzugefügt.`,
      removed: (name) => `${name} von der Liste entfernt.`,
      updated: (name, qty) => `Menge von ${name} auf ${qty} geändert.`,
      cleared: () => 'Einkaufsliste geleert.',
      clearedChecked: () => 'Erledigte Artikel entfernt.',
      notFound: (name) => `${name} wurde nicht in der Liste gefunden.`,
      searchResult: (count, query) => `${count} Artikel für "${query}" gefunden.`,
      notUnderstood: () => 'Ich habe das nicht verstanden. Versuche "Milch hinzufügen".',
    }
  },
};

export function getDictionary(langCode = 'en-US') {
  return MULTILINGUAL_DICTIONARY[langCode] || MULTILINGUAL_DICTIONARY['en-US'];
}
