function evaluateScorecard(scorecard) {
    if(scorecard.iceCream > scorecard.brownie
        && scorecard.iceCream > scorecard.sorbet
        && scorecard.iceCream > scorecard.tiramisu) {
        return 'Vanilla ice cream';
    }
    else if(scorecard.brownie > scorecard.iceCream
        && scorecard.brownie > scorecard.sorbet
        && scorecard.brownie > scorecard.tiramisu) {
        return 'Brownie';
    }
    else if(scorecard.sorbet > scorecard.iceCream
        && scorecard.sorbet > scorecard.brownie
        && scorecard.sorbet > scorecard.tiramisu) {
        return 'Sorbet';
    }
    else if(scorecard.tiramisu > scorecard.sorbet
        && scorecard.tiramisu > scorecard.iceCream
        && scorecard.tiramisu > scorecard.brownie) {
        return 'Tiramisu';
    }
    else return 'Kale.';
}

export default evaluateScorecard;