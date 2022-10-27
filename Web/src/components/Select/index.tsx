import { useEffect, useState } from "react";
import { SelectGame } from "./style";

interface ISelectGameprops{
    id: string;
    placeholder: string;
    children?: JSX.Element;
}

interface IGamesprops {
    id: string;
    title: string;
}

export default function Select(props:ISelectGameprops) {

    const [games, setGames] = useState<IGamesprops[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])

    return (

        <SelectGame id={props.id} placeholder={props.placeholder}>
            <option value="" disabled selected >Selecione o game que deseja jogar</option>
            {games.map(game => {
                return(
                    <option key={game.id} value={game.id}>{game.title}</option>
                )
            })}
        </SelectGame>

    )
}