import DetailsContainer from "./DetailsContainer";
import Detail from "./Detail";
import DetailHeading from "./DetailHeading";
import DetailBody from "./DetailBody";

function Details({ip, location, timezone, isp}) {

    return (

            <DetailsContainer>
                <Detail>
                    <DetailHeading>IP address</DetailHeading>
                    <DetailBody>{ip}</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>Location</DetailHeading>
                    <DetailBody>{location}</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>Timezone</DetailHeading>
                    <DetailBody>UTC {timezone}</DetailBody>
                </Detail>
                <Detail>
                    <DetailHeading>ISP</DetailHeading>
                    <DetailBody>{isp}</DetailBody>
                </Detail>
            </DetailsContainer>
    );
}

export default Details;