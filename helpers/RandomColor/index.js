import { PINK, PEACH, FANTA, LIGHT_BLUE, TOSCA } from "../../assets/colors";

const colors = [PINK, PEACH, FANTA, LIGHT_BLUE, TOSCA]

export default function getRandomColor() {
    const numRandom = Math.random() * colors.length - 1 | 0
    const color = colors[numRandom]
    return color
}