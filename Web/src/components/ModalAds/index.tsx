import * as Dialog from "@radix-ui/react-dialog"
import { DivWeek, DivYears, Form } from "./style";

import { styled } from '@stitches/react';
import { icons } from "../../assets";


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



interface IModalProps {
    children?: JSX.Element;
}

export default function ModalAs(props: IModalProps) {
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
                            <input id="game" type="text" placeholder="Selecione o game que deseja jogar" />
                        </div>
                        <div>
                            <label htmlFor="name">Seu nome (ou nickname)</label>
                            <input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                        </div>
                        <div>
                            <DivYears>
                                <div className="test">
                                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                    <input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                                </div>
                                <div>
                                    <label htmlFor="discord">Qual seu Discord?</label>
                                    <input id="discord" type="text" placeholder="Usuario#0000" />
                                </div>
                            </DivYears>
                            <DivWeek>
                                <div>
                                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                                </div>
                                <section>
                                    <label htmlFor="hourStart">Qual horário do dia?</label>
                                    <div>
                                        <input id="hourStart" type="time" placeholder="De" />
                                        <input id="hourEnd" type="time" placeholder="Até" />
                                    </div>
                                </section>
                            </DivWeek>
                        </div>
                        <div>
                            <input type="checkbox" />
                            Constumo me conectar ao chat de voz
                        </div>

                        <footer>
                            <button>Cancelar</button>
                            <button type="submit">
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

//0:45 antigo