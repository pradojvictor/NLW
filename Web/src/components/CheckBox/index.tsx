import * as Checkbox from "@radix-ui/react-checkbox";
import { icons } from "../../assets";
import { DivCheckbox } from "./style";

export default function CheckBox() {
    return (
        <DivCheckbox>
            <Checkbox.Root className="checkRoot">
                <Checkbox.Indicator>
                <img src={icons.check} />
                </Checkbox.Indicator>
            </Checkbox.Root>
            Constumo me conectar ao chat de voz
        </DivCheckbox>

    )
}