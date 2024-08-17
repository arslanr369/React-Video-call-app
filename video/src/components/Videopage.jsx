import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from "./constant";

const Videopage = () => {
    const { id } = useParams();
    const roomID = id;

    const myMeeting = async (element) => {
        if (!element) return; // Ensure the element is not null

        // generate Kit Token
        const appID = APP_ID;
        const serverSecret = SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(), // Corrected: toString() method call
            "ARSLAN369"
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 calls
            },
        });
    };

    return (
        <div ref={myMeeting}>
            {/* This div will be used as the container for the video call */}
        </div>
    );
}

export default Videopage;
