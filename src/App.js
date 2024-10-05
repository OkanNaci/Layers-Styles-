import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now{" "}
        </Button>
      </div>
      <div>
        <Button warning>Call me </Button>
      </div>
      <div>
        <Button secondary outline>
          press me
        </Button>
      </div>
      <div>
        <Button primary>haha</Button>
      </div>
    </div>
  );
}
export default App;
