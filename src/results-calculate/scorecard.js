function evaluateScorecard(scorecard) {
    if(scorecard.iceCream > scorecard.brownie 
        && scorecard.iceCream > scorecard.sorbet
        && scorecard.iceCream > scorecard.tiramisu) {
        return 'Vanilla Ice Cream';
    }
    else if(scorecard.brownie > scorecard.iceCream 
        && scorecard.brownie > scorecard.sorbet
        && scorecard.brownie > scorecard.tiramisu) {
        return 'Brownie';
    }
    else if(scorecard.sorbet > scorecard.iceCream 
        && scorecard.sorbet > scorecard.tiramisu
        && scorecard.sorbet > scorecard.brownie) {
        return 'sorbet';
    }
    else if(scorecard.tiramisu > scorecard.iceCream 
        && scorecard.tiramisu > scorecard.brownie 
        && scorecard.tiramisu > scorecard.sorbet) {
        return 'tiramisu';
    }
    else 'Kale';
}

export default evaluateScorecard;
