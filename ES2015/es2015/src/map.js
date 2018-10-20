/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 */
export class TextIndexer {
    constructor() {
        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencontrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous seront utiles !
     * @param text Le texte source à indexer
     */
    indexText(text) {

    }

    /**
     * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
     */
    getWeight(word) {}

    /**
     * retourne le nombre de mots indexés
     */
    get count() {}
}