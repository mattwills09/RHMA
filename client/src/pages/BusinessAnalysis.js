import React, { Component } from "react";
import Chart from 'react-google-charts';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Expense from "../components/Expense";
import Book from "../components/Book";
import Visual from "../components/Visual";
import Quarter from "../components/Quarter";



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class BusinessAnalysis extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Business Analysis Visual</strong>

              </h1>
              <h2 className="text-center">Review Your Insights Below</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            
            <Card title="Visuals" icon="download">

              <Quarter>

                <Row>
                  <Col size="md-6">

                <div>
                <Chart className="febChart"
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  data={[
                    ['Expense', 'Amount'],
                    ['Advertising', 200],
                    ['Insurance', 350],
                    ['Payroll', 12000],
                    ['Rent', 1500],
                    ['Utilities', 1200],
                  ]}
                  options={{
                    title: 'February Expense Report',
                    is3D: true,
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
                </div>

                </Col>

                <Col size="md-6">
                  <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    data={[
                      ['Expense', 'Amount'],
                      ['Advertising', 150],
                      ['Insurance', 350],
                      ['Payroll', 11000],
                      ['Rent', 1500],
                      ['Utilities', 1000],
                    ]}
                    options={{
                      title: 'March Expense Report', 
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />

                </Col>
              </Row>

              </Quarter>

              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      month={book.month}
                      year={book.year}
                      rentMortgage={book.rentMortgage}
                      insurance={book.insurance}
                      payroll={book.payroll}
                      advertising={book.advertising}
                      utilities={book.utilities}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <div>
                  <br></br>
                  <h2 className="text-center">Visual Insights</h2>
                </div>
                )}
            </Card>

          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default BusinessAnalysis;


