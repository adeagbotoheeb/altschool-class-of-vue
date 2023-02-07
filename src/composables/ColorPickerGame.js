import { ref } from "@vue/reactivity";

const ColorPickerCompose = () => {
    const colors = [ "green", "red", "purple", "blue" ];
    let message = ref("Pick a color...")

    const mathColor = (value) => {
        //random color due to array index;
        const randomNumber = Math.floor(Math.random()*3)+1; //between 1-4

        if(colors[randomNumber] === value){
            message.value= 'You win... [answer: ${colors[randomNumber]}]';
            return;
        }

        message.value= 'You loose[answer: ${colors[randomNumber]}]';
    };

    return { colors, message, mathColor};

    
}

export default ColorPickerCompose;