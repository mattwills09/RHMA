import React, { Component } from "react";
import { Chart } from "react-google-charts";


import axios from "axios";



class Report extends Component {
    state = {
        expenseData:[ ["Expense", "Amount"],
        ["advertising", 0],
        ["insurance", 0],
        ["payroll", 0],
        ["rentMortgage", 0],
        ["utilities", 0]]
    }


    render() {
        axios.get("/api/expense").then(res => {
            res = res.data;
            console.log(res[0].payroll);
            this.setState({
                expenseData : [
                    ["Expense", "Amount"],
                    ["advertising", res[0].advertising],
                    ["insurance", res[0].insurance],
                    ["payroll", res[0].payroll],
                    ["rentMortgage", res[0].rentMortgage],
                    ["utilities", res[0].utilities]
                ]
            })

        });

        return (
            <div className="chart-container">

                <Chart

                    chartType="PieChart"
                    data={this.state.expenseData}
                    width="100%"
                    height="400px"

                />
            </div>
        );
    }
}
export default Report;

// expenseData : [
//     ["Expense", "Amount"],
//     ["advertising", res[0].advertising],
//     ["insurance", res[0].insurance],
//     ["payroll", res[0].payroll],
//     ["rentMortgage", res[0].rentMortgage],
//     ["utilities", res[0].utilities]
// ]