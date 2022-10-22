import { Card } from "./style";

interface ICardGameProps {
    titleGame: string;
    ad: number;
    redirect: any;
    imagemUrl: any;
    alt: string;
}

export default function CardGame(props: ICardGameProps) {
    return (
        <Card>
            <a href={props.redirect}>
                <img src={props.imagemUrl} alt={props.alt} />
                <div>
                    <strong>{props.titleGame}</strong>
                    <span>{props.ad} anúcio(s)</span>
                </div>
            </a>
        </Card>
    )
}