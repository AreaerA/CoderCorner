import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GoogleMap() {

    const render = (status: Status) => {
    return <h1>{status}</h1>;
};

<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  <YourComponent/>
</Wrapper>

    return (
        <h1>Google Map</h1>
    )
}