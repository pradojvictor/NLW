import { useEffect, useState } from "react";
import {  images } from "../../assets";
import CardGame from "../../components/CardGame";
import ModalAs from "../../components/ModalAds";
import { Div, Grid, Section } from "./style";

interface IGamesprops {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

export default function Home() {

    const [games, setGames] = useState<IGamesprops[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])


    return (
        <Div>
            <img src={images.logo} alt="" />
            <h1>Seu <span>duo</span> está aqui.</h1>

            <Grid>
                {games.map(game => {
                    return (
                        <CardGame
                            key={game.id}
                            titleGame={game.title}
                            ad={game._count.ads}
                            redirect={undefined}
                            imagemUrl={game.bannerUrl} alt={"gamer"} />
                    )
                })}
            </Grid>

            <Section>
                <div>
                    <div>
                        <strong>Não encontrou seu duo?</strong>
                        <span>Publique um anúncio para encontrar novos players!</span>
                    </div>
                    <ModalAs/>
                </div>
            </Section>
                

        </Div>
    )
}

//00:40