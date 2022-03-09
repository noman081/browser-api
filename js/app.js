const usePrompt = () => {
    const myNumber = prompt('Enter a number: ');
    console.log(myNumber);
    const sum = parseInt(myNumber) + 100;
    alert('Your number sum is: ' + sum);
}
const useConfirm = () => {
    const giveDecision = confirm('Do you want to see our web address?');
    console.log(giveDecision);
    if (giveDecision) alert('Our web adress is: ' + location.href);
}