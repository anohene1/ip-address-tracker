import DetailsContainer from "./DetailsContainer";
import Detail from "./Detail";
import DetailHeading from "./DetailHeading";
import DetailBody from "./DetailBody";

function Details() {
    return (

            <DetailsContainer>
                <Detail>
                    <DetailHeading>IP address</DetailHeading>
                    <DetailBody>192.168.40.41</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>Location</DetailHeading>
                    <DetailBody>Brooklyn, NY 10001</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>Timezone</DetailHeading>
                    <DetailBody>192.168.40.41</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>ISP</DetailHeading>
                    <DetailBody>192.168.40.41</DetailBody>
                </Detail>
            </DetailsContainer>
    );
}

export default Details;