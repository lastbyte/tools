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
