import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            position: ""
        };
    }
    componentDidMount() {
        this.getQuote();
    }
    getQuote() {
        let url =
            "https://gist.githubusercontent.com/lalawuhan/2f3bd00ffb34deda831ac667a0f8f14b/raw/64f5a565be7364c4d545eb60508a285433b5cc89/quotes.json";

        axios.get(url).then(res => {
            let data = res.data;
            console.log(data);
            let quoteNum = Math.floor(Math.random() * data.length);
            console.log(quoteNum);
            let randomQuote = data[quoteNum];
            console.log(randomQuote);

            this.setState({
                quote: randomQuote["quote"],
                author: randomQuote["author"],
                position: randomQuote["position"]
            });
        });
    }
    getNewQuote = () => {
        this.getQuote();
    };

    render() {
        const { quote, author, position } = this.state;
        return (
            <div id="wrapper">
                <div id="image">
                    <img
                        src={require("./women.svg")}
                        alt="women sketch holding flag"
                    />
                </div>
                <h1 className="title">Inspirational Women in Tech.</h1>

                <div id="quote-box">
                    <div id="text">
                        <p>{quote}</p>
                    </div>
                    <div id="author">
                        <h5>
                            {author}, {position}
                        </h5>
                    </div>
                    <div id="buttons">
                        <a
                            id="tweet-quote"
                            href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Post this quote on twitter!"
                        >
                            {" "}
                            <button>Tweet</button>
                        </a>

                        <button
                            id="new-quote"
                            className="buttons"
                            onClick={this.getNewQuote}
                        >
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
