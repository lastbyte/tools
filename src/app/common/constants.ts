export enum THEME {
    light='light',
    dark='dark',
    system='system'
}

export const languages: {[key in string] : {value : string, display : string}} =  {
    javascript:{value : 'javascript', display :"Javascript"},
    python :{value : 'python', display :"Python"},
    typescript :{value : 'typescript', display :"Typescript"},
    c :{value : 'c', display :"C"},
    java :{value : 'java', display :"Java"},
    css :{value : 'css', display :"CSS"},
    html : {value : 'html', display :"HTML"},
    cplusplus: {value : 'cpp', display :"C++"},
}


export const hashAlgorithms: {[key in string] : {value : string, display : string}} =  {
    sha1:{value : 'sha1', display :"SHA 1"},
    sha256:{value : 'sha256', display :"SHA 256"},
    sha512:{value : 'sha512', display :"SHA 512"},
    md5:{value : 'md5', display :"MD5"},
    rmd160 : {value : 'rmd160', display : 'RMD160'}
}
