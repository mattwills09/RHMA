// import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

// function NoMatch() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1 className="text-center">404 Page Not Found</h1>
//             <h1 className="text-center">
//               <span role="img" aria-label="Face With Rolling Eyes Emoji">
//                 🙄
//               </span>
//             </h1>
//           </Jumbotron>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default NoMatch;




import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Visual from "../components/Visual";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Visualize Your Monthly and Quarterly Expenses!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          // books: [],
          message: "Expenses Not Fully Submitted.  Please Resubmit"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
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
            <Card title="Sample Insights">
            <Visual></Visual>
              {this.state.books.length ? (
                <List>
                  
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      rent={book.volumeInfo.rent}
                      taxes={book.volumeInfo.taxes}
                      payroll={book.volumeInfo.payroll}
                      advertising={book.volumeInfo.advertising.join(", ")}
                      utilities={book.volumeInfo.utilities}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
