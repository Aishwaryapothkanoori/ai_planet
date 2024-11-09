function Feedback({ message }) {
    return message ? <div className="feedback">{message}</div> : null;
  }
  
  export default Feedback;
  