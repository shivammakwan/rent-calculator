function calculateBreakdown() {
    // Get user input
    const rent = parseFloat(document.getElementById("rent").value);
    const ratio = parseFloat(document.getElementById("ratio").value);
    const depositMonths = parseFloat(document.getElementById("depositMonths").value);

    // Constants
    const deposit = rent * depositMonths;
    const brokerage = rent;
    const agreement = 3000;

    // Calculate user's share based on ratio
    const userDepositShare = deposit * (ratio / 100);
    const userBrokerageShare = brokerage * (ratio / 100);
    const userAgreementShare = agreement * 0.50; // agreement cost is 50:50 split
    const totalInitialCost = userDepositShare + userBrokerageShare + userAgreementShare + rent;

    const remainingDeposit = deposit * ((100 - ratio) / 100);
    const remainingBrokerage = brokerage * ((100 - ratio) / 100);
    const totalRemaining = remainingDeposit + remainingBrokerage;

    // Create table with the breakdown
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Initial Payment Breakdown</h3>
        <table>
            <tr>
                <th>Description</th>
                <th>Amount (₹)</th>
            </tr>
            <tr>
                <td>User's share of deposit (${ratio}%):</td>
                <td>${userDepositShare.toFixed(2)}</td>
            </tr>
            <tr>
                <td>User's share of brokerage (${ratio}%):</td>
                <td>${userBrokerageShare.toFixed(2)}</td>
            </tr>
            <tr>
                <td>User's share of rental agreement (50%):</td>
                <td>${userAgreementShare.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Rent (prepaid):</td>
                <td>${rent.toFixed(2)}</td>
            </tr>
            <tr>
                <td><strong>Total Initial Cost:</strong></td>
                <td><strong>${totalInitialCost.toFixed(2)}</strong></td>
            </tr>
        </table>
        
        <h3>Remaining Payment Breakdown</h3>
        <table>
            <tr>
                <th>Description</th>
                <th>Amount (₹)</th>
            </tr>
            <tr>
                <td>Remaining deposit (${100 - ratio}%):</td>
                <td>${remainingDeposit.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Remaining brokerage (${100 - ratio}%):</td>
                <td>${remainingBrokerage.toFixed(2)}</td>
            </tr>
            <tr>
                <td><strong>Total Remaining Amount:</strong></td>
                <td><strong>${totalRemaining.toFixed(2)}</strong></td>
            </tr>
        </table>
    `;
}
