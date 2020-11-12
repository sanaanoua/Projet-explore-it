import { motion } from "framer-motion";
import React, {Component} from "react";
import Questionnaire from "./Questionnaire";


class QuestionAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      currentQuestion: 0,
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount(){

    fetch("https://opentdb.com/api.php?amount=3&category=9&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          questions: data.results,         
        });
      },
    )
  }

  handleAnswer = () => {
    this.setState({
        currentQuestion: this.state.currentQuestion + 1 
    })
  }

  render() {  
    return  this.state.questions.length > 0 ? (
       <div className="question"> 
         {this.state.currentQuestion < this.state.questions.length ? (
            <Questionnaire 
              data={this.state.questions[this.state.currentQuestion]}
              handleAnswer={this.handleAnswer}    
            />
          ) : ( 
           <motion.div
             exit={{ x: "-300vh" }}
             animate={{ x: 0 }}
             initial={{ x: "100vw" }}
             transition={{ transition: "" }}
             className="container" >
            <p> Continue your road... </p>
            </motion.div>
          ) }
        </div>       
    ) : ( 
  <p> Loading </p>
    )
  } 
}

export default QuestionAPI














