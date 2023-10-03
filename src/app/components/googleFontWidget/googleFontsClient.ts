import Fuse from "fuse.js";
import fonts from './fonts.json';


export function searchFonts(keyword? : string) {

    const fuseOptions = {
        isCaseSensitive: false,
        // includeScore: false,
        shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "family",
        ]
    };

    const fuse = new Fuse(fonts.items,fuseOptions);
    return keyword ? fuse.search(keyword).map(o => o.item) : fonts.items;

    return fonts.items;

}

export function getPackage() {

}