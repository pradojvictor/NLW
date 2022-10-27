import * as Dialog from "@radix-ui/react-dialog"
import { DivWeek, DivYears, Form } from "./style";
import { useEffect, useState } from "react";

import { styled } from '@stitches/react';
import { icons } from "../../assets";
import CheckBox from "../CheckBox";
import Select from "../Select";



const Overlay = styled(Dialog.Overlay, {
    background: 'rgba(0 0 0 / 0.6)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
});

const Content = styled(Dialog.Content, {
    position: 'fixed',
    background: 'rgba(42 38 52 / 1)',
    padding: '32px 40px',
    color: 'White',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    borderRadius: '8px',
    width: '480px',
    boxShadow: 'rgba(0 0 0 / 1) 0px 10px 38px -10px, rgba(0 0 0 / 1) 0px 10px 20px -15px',
});

const Title = styled(Dialog.Title, {
    fontSize: '25px',
    fontWeight: '900',
    fontFamily: 'Inter, sans-serif',
});



interface IGamesprops {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

export default function ModalAs() {

    const [games, setGames] = useState<IGamesprops[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])

    return (

        <Dialog.Root>
            <Dialog.Trigger>
                <img src={icons.search} />
                Publicar anúncio
            </Dialog.Trigger>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Title>Publique um anúncio</Title>

                    <Form>
                        <div>
                            <label htmlFor="game">Qual o game?</label>
                            <Select id={"game"} placeholder={"Selecione o game que deseja jogarjogar"}/>
                        </div>
                        <div>
                            <label htmlFor="name">Seu nome (ou nickname)</label>
                            <input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                        </div>
                        <div>
                            <DivYears>
                                <div className="test">
                                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                    <input id="yearsPlaying" className="inputyears" type="" placeholder="Tudo bem ser ZERO" />
                                </div>
                                <div>
                                    <label htmlFor="discord">Qual seu Discord?</label>
                                    <input id="discord" type="text" placeholder="Usuario#0000" />
                                </div>
                            </DivYears>

                            <DivWeek>
                                <div className="weekdays">
                                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                                </div>
                                <section className="weekstart">
                                    <label htmlFor="hourStart">Qual horário do dia?</label>
                                    <div className="weekhours">
                                        <input id="hourStart" type="time" placeholder="De" />
                                        <input id="hourEnd" type="time" placeholder="Até" />
                                    </div>
                                </section>
                            </DivWeek>

                        </div>

                        <CheckBox />

                        <footer>
                            <Dialog.Close className="buttoncancel">Cancelar</Dialog.Close>
                            <button className="buttonsubmit" type="submit">
                                <img src={icons.gamepad} />
                                Encontrar duo
                            </button>
                        </footer>
                    </Form>

                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

