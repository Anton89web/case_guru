export interface SelectLabelsProps{
    label: string
    values: string[]
    activeValue: string
    changeValue: (e:string)=> void
}