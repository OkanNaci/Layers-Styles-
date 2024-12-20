import Button from "../components/Button";
import { GoBell, GoBrowser, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBrowser />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary onClick={handleClick}>
          haha
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
