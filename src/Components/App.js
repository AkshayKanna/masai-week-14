import React from "react"
import Hangman from "./Hangman";
import { done, randomWord, renderWord } from "./Words";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            word: randomWord(),
            filled_word: ["A", "E", "I", "O", "U"]
        }
        this.Alphabets = this.Alphabets.bind(this);
    }

    Alphabets(letter) {
        const { progress, filled_word, word, } = this.state
        return (
            <button type="button" className="btn btn-primary btn-lg rounded-pill mr-2 mt-1" onClick={() => this.setState({
                filled_word: [letter, ...filled_word],
                progress: word.indexOf(letter) > -1 ? progress : progress + 1,
            })} style={{fontFamily: "'Montserrat', sans-serif"}}>
                {letter}
            </button>
        )
    }

    render() {
        const { progress, word, filled_word } = this.state
        // console.log(this.state.word)

        if (done(word, filled_word)) {
            return (
                <main className="container">
                    <h1 style={{fontFamily: "'Montserrat', sans-serif"}}>You Won!</h1>
                    <div><img src="./done.gif" /></div>
                    <div>
                        <button className="btn-success btn btn-lg rounded-pill mt-5" onClick={(done) => this.setState({
                            progress: 0,
                            word: randomWord(),
                            filled_word: ["A", "E", "I", "O", "U"]
                        })} style={{fontFamily: "'Montserrat', sans-serif"}}>
                            DONE
                </button>
                    </div>
                </main>
            )
        }

        return (
            <div>
                <section style={{ height: "80vh" }} >
                    <p className='text-center'>
                        <img src="./back.jpg" style={{ width: "100%" }}></img>
                    </p>
                </section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div style={{ height: "35vh" }}></div>
                            <h2 className='h2 mt-5' style={{fontFamily: "'Montserrat', sans-serif"}}>FIND THE MISSING WORD</h2>
                            <p className="text-center lead mb-1" style={{fontFamily: "'Montserrat', sans-serif"}}>1. The Vowels are filled.<br></br>2. Find the Out Movie Name</p>
                            <form className='mt-5 mb-3'>
                                <div className="form-group" >
                                    <input type="text" class="form-control" value={renderWord(word, filled_word)} style={{fontFamily: "'Montserrat', sans-serif",fontSize:"20px"}}/>
                                </div>

                            </form>
                            <div className='mt-5' >
                                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                                    .split("")
                                    .map(letter => this.Alphabets(letter))}
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <p className="text-center">
                                <Hangman progress={progress} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;