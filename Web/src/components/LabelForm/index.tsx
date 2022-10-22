

interface ILabelProps{
    htmlFor: any;
    children: JSX.Element;

}

export default function Label( props: ILabelProps ) {
    return(
        <Label htmlFor={props.htmlFor}>{props.children}</Label>
    )
}