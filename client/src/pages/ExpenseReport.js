import React, { Component } from "react";
import Chart from 'react-google-charts';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";


class ExpenseReport extends Component {
  state = {
    expenses: [],
    q: "",
    message: "Visualize Your Monthly and Quarterly Expenses!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1 className="text-center">
                <strong>Learn Your True Cost of Doing Business</strong>
              </h1>
              <h2 className="text-center">Input Your Expenses for Data Insights</h2>
            </Jumbotron>
            
          </Col>

          <Col size="md-12">
            <Card title="Expense Report" icon="far fa-book">

              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
              
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card title="Current Insights" icon="fas fa-chart-pie">

            <Row>
              <Col size="md-12">

          <div align="center">

                <Chart nameClass="currentInsight"
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  data={[
                    ['Expense', 'Amount'],
                    ['Advertising', 50],
                    ['Insurance', 350],
                    ['Payroll', 10500],
                    ['Rent', 1500],
                    ['Utilities', 900],
                  ]}
                  options={{
                    title: 'May Expense Report', 
                    is3D: true,
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />

                </div>

                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default ExpenseReport;
