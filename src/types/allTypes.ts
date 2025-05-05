import type { Ref } from "vue";


const dynamicElements: string[] = ['dialogBox', 'optionsList'] as const;
type availableDialogBoxNames = 'link' | 'image' | 'video';
type valuesToString<T> =  { [K in keyof T]: string };
export type availableOptionsListNames = 'fontsize' | 'fontfamily' | 'lineheight';
export type allowedElementNamespace = null | availableOptionsListNames | availableDialogBoxNames;


export type elementDetailObj = {
    name: allowedElementNamespace,
    coords: {
        x: number,
        y: number
    },
    optional: {
        /* This parameters are useful for some (not all) of the Elements that uses elementDetailObj type */
        targetWidth: number,
        selectedText: string,
    }
}

export type dynamicElementsDetailsObj = {
    [K in typeof dynamicElements[number]]: elementDetailObj
}

export type inputProperties = {
    text: string,
    inputElement: Ref<null | HTMLInputElement>, 
    isTextCorrect: Ref<boolean>, 
    errorMessageElement: Ref<null | HTMLSpanElement>, 
    validatingFunction: any
}

export type fontFamilyOptionsObj = {
    name: string,
    sourceURL: string,
    isAlreadyLoaded: boolean
}

export type lineHeightOptionsObj = {
    displayName: string,
    value: number,
}

export type linkInputs = {
    alias: inputProperties,
    url: inputProperties
}
export type linkInputsValues = valuesToString<linkInputs>;


export type imageInputs = {
    url: inputProperties
}
export type imageInputsValues = valuesToString<imageInputs>;


export type videoInputs = {
    url: inputProperties
}
export type videoInputsValues = valuesToString<videoInputs>;
