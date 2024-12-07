import IconUff from "../../icons/icons";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex-shrink-0 border-t-4 text-center">
            <div className="max-w-screen-lg mx-auto py-4">
                <div className="flex justify-center">
                    <IconUff styles="relative right-8 top-2" />
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
